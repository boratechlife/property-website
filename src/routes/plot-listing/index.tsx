import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Plot-specific TypeScript interfaces
interface Plot {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly pricePerAcre?: number;
  readonly totalPrice?: number;
  readonly sizeAcres: number;
  readonly sizeHectares: number;
  readonly image: string;
  readonly images: readonly string[];
  readonly description: string;
  readonly features: readonly string[];
  readonly landUse:
    | 'residential'
    | 'commercial'
    | 'agricultural'
    | 'industrial'
    | 'mixed';
  readonly transactionType: 'sale' | 'lease' | 'both';
  readonly availability: 'available' | 'pending' | 'sold' | 'leased';
  readonly dateAdded: string;
  readonly topography: 'flat' | 'gently-sloping' | 'hilly' | 'valley';
  readonly soilType?: string;
  readonly leasePeriod?: string; // For lease plots
  readonly whatsappNumber: string; // <-- ADDED: Individual plot contact
}

interface PlotFilterState {
  minPrice: number;
  maxPrice: number;
  minSize: number;
  maxSize: number;
  landUse: string;
  transactionType: string;
  location: string;
  topography: string;
}

// Constants
const PRICE_RANGES = {
  MIN: 100000,
  MAX: 50000000,
  STEP: 100000,
} as const;

const SIZE_RANGES = {
  MIN: 0.25,
  MAX: 100,
  STEP: 0.25,
} as const;

// Enhanced sample plot data with images array and whatsappNumber
const plots: readonly Plot[] = [
  {
    id: '1',
    title: 'Prime Residential Plot - Elgon View',
    location: 'Elgon View, Eldoret',
    totalPrice: 2500000,
    pricePerAcre: 2500000,
    sizeAcres: 1.0,
    sizeHectares: 0.4,
    landUse: 'residential',
    transactionType: 'sale',
    availability: 'available',
    dateAdded: '2024-01-15',
    topography: 'gently-sloping',
    image: '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.25 AM.jpeg',
    images: [
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.26 AM (1).jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.26 AM (2).jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.26 AM (2).jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.26 AM.jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.27 AM (1).jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.27 AM (2).jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.27 AM.jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.28 AM.jpeg',
      '/images/land for sale/WhatsApp Image 2025-10-14 at 9.11.53 AM.jpeg',
    ],
    description:
      'Prime residential plot in the prestigious Elgon View area. Perfect for building your dream home with panoramic views of Mt. Elgon.',
    features: [
      'Title Deed Ready',
      'Electricity Connection',
      'Water Connection',
      'Tarmac Road Access',
      'Perimeter Wall',
      'Gate',
      'Mature Trees',
    ],
    whatsappNumber: '254712345678', // Sample Number
  },
] as const;

// --- Utility Functions ---

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const formatSize = (acres: number, hectares: number): string => {
  if (acres >= 1) {
    return `${acres} acre${acres !== 1 ? 's' : ''} (${hectares.toFixed(1)} ha)`;
  } else {
    return `${acres} acre (${hectares.toFixed(2)} ha)`;
  }
};

const getLandUseDisplayName = (landUse: string): string => {
  const landUseMap: Record<string, string> = {
    residential: 'Residential',
    commercial: 'Commercial',
    agricultural: 'Agricultural',
    industrial: 'Industrial',
    mixed: 'Mixed Use',
  };
  return landUseMap[landUse] || landUse;
};

const getTransactionTypeDisplayName = (transactionType: string): string => {
  const transactionMap: Record<string, string> = {
    sale: 'For Sale',
    lease: 'For Lease',
    both: 'Sale/Lease',
  };
  return transactionMap[transactionType] || transactionType;
};

const generateWhatsAppLink = (plot: Plot): string => {
  const priceDisplay = plot.totalPrice
    ? formatPrice(plot.totalPrice)
    : plot.pricePerAcre
      ? `${formatPrice(plot.pricePerAcre)}/acre`
      : 'Price on Inquiry';

  const message = encodeURIComponent(
    `Hello, I'm interested in the plot: "${plot.title}" in ${plot.location}, currently listed for ${priceDisplay}. Can you provide more details? (ID: ${plot.id})`
  );
  // Removes non-digit characters to ensure clean wa.me link
  return `https://wa.me/${plot.whatsappNumber.replace(
    /\D/g,
    ''
  )}?text=${message}`;
};

// --- Image Gallery Modal Component (Kept) ---

const ImageGalleryModal = component$<{
  plot: Plot | null;
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const currentImageIndex = useSignal(0);

  const nextImage = $(() => {
    if (props.plot && currentImageIndex.value < props.plot.images.length - 1) {
      currentImageIndex.value++;
    }
  });

  const previousImage = $(() => {
    if (currentImageIndex.value > 0) {
      currentImageIndex.value--;
    }
  });

  const goToImage = $((index: number) => {
    currentImageIndex.value = index;
  });

  // Reset index when modal opens
  useTask$(({ track }) => {
    track(() => props.isOpen);
    if (props.isOpen) {
      currentImageIndex.value = 0;
    }
  });

  // Keyboard navigation and body scroll lock
  useTask$(({ track }) => {
    track(() => props.isOpen);

    if (props.isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          props.onClose();
        } else if (e.key === 'ArrowLeft') {
          previousImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      };

      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  });

  if (!props.isOpen || !props.plot) return null;

  const images = props.plot.images;

  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick$={(e) => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      }}
      role="dialog"
      aria-labelledby="gallery-title"
      aria-modal="true"
    >
      <div class="relative w-full max-w-6xl">
        {/* Close Button */}
        <button
          onClick$={props.onClose}
          class="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold z-10"
          aria-label="Close gallery"
          type="button"
        >
          ×
        </button>

        {/* Property Title */}
        <h3
          id="gallery-title"
          class="text-white text-xl font-semibold mb-4 text-center"
        >
          {props.plot.title} - {props.plot.location}
        </h3>

        {/* Main Image Container */}
        <div class="relative bg-black rounded-lg overflow-hidden">
          <img
            src={images[currentImageIndex.value]}
            alt={`${props.plot.title} - Image ${currentImageIndex.value + 1}`}
            class="w-full h-[60vh] object-contain"
            loading="eager"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick$={previousImage}
                disabled={currentImageIndex.value === 0}
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous image"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick$={nextImage}
                disabled={currentImageIndex.value === images.length - 1}
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next image"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex.value + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div class="flex gap-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick$={() => goToImage(index)}
                class={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex.value === index
                    ? 'border-green-500 scale-105'
                    : 'border-transparent hover:border-gray-400'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

// --- Plot Card Component (Modified for WhatsApp CTA) ---

const PlotCard = component$<{
  plot: Plot;
  onViewGallery: QRL<(plot: Plot) => void>;
}>((props) => {
  const imageLoaded = useSignal(false);
  const whatsappLink = generateWhatsAppLink(props.plot);

  return (
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div class="relative">
        <div
          class={`w-full h-48 bg-gray-200 ${
            imageLoaded.value ? 'hidden' : 'block animate-pulse'
          }`}
        ></div>
        <img
          src={props.plot.image}
          alt={`${props.plot.title} in ${props.plot.location}`}
          class={`w-full h-48 object-cover transition-opacity duration-300 ${
            imageLoaded.value ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad$={() => (imageLoaded.value = true)}
          onError$={() => (imageLoaded.value = true)}
        />

        <div class="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {props.plot.totalPrice
            ? formatPrice(props.plot.totalPrice)
            : props.plot.pricePerAcre
              ? `${formatPrice(props.plot.pricePerAcre)}/acre`
              : 'Price on inquiry'}
        </div>

        {props.plot.availability === 'pending' && (
          <div class="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Pending
          </div>
        )}

        <div class="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
          {getTransactionTypeDisplayName(props.plot.transactionType)}
        </div>

        <div class="absolute bottom-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-md text-xs font-medium">
          {getLandUseDisplayName(props.plot.landUse)}
        </div>

        {/* View Gallery Button */}
        {props.plot.images.length > 1 && (
          <button
            onClick$={() => props.onViewGallery(props.plot)}
            class="absolute top-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all shadow-md"
            aria-label={`View ${props.plot.images.length} images`}
            disabled={
              props.plot.availability === 'sold' ||
              props.plot.availability === 'leased'
            }
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {props.plot.images.length} Photos
          </button>
        )}
      </div>

      <div class="p-5">
        <header class="mb-3">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {props.plot.title}
          </h3>
          <p class="text-gray-600 text-sm flex items-center">
            <svg
              class="w-4 h-4 mr-1 text-green-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            {props.plot.location}
          </p>
        </header>

        <div class="flex items-center justify-between text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 mr-1 flex-shrink-0 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span class="font-medium">
              {formatSize(props.plot.sizeAcres, props.plot.sizeHectares)}
            </span>
          </div>

          <div class="flex items-center">
            <svg
              class="w-4 h-4 mr-1 flex-shrink-0 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
            <span class="font-medium capitalize">{props.plot.topography}</span>
          </div>
        </div>

        <p class="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {props.plot.description}
        </p>

        <div class="flex flex-wrap gap-1 mb-4">
          {props.plot.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
          {props.plot.features.length > 3 && (
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{props.plot.features.length - 3} more
            </span>
          )}
        </div>

        {props.plot.leasePeriod && (
          <div class="text-xs text-purple-600 mb-3 italic">
            Lease: {props.plot.leasePeriod}
          </div>
        )}

        {/* WhatsApp Button (Replaced Inquire Now button) */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          class={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium flex items-center justify-center gap-2 ${
            props.plot.availability === 'sold' ||
            props.plot.availability === 'leased'
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
              : 'bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          }`}
          aria-label={`Chat via WhatsApp about ${props.plot.title}`}
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {props.plot.availability === 'sold' ||
          props.plot.availability === 'leased'
            ? 'Not Available'
            : 'Chat on WhatsApp'}
        </a>
      </div>
    </article>
  );
});

// Plot Filters Component (Original, unchanged)
const PlotFilters = component$<{
  filters: PlotFilterState;
  onFiltersChange: QRL<(filters: Partial<PlotFilterState>) => void>;
  plotCount: number;
}>((props) => {
  const isExpanded = useSignal(false);

  return (
    <div class="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Filter Plots</h3>
        <button
          onClick$={() => (isExpanded.value = !isExpanded.value)}
          class="md:hidden px-3 py-1 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors"
        >
          {isExpanded.value ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      <div
        class={`${
          isExpanded.value ? 'block' : 'hidden'
        } md:block space-y-4 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4`}
      >
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Max Price: {formatPrice(props.filters.maxPrice)}
          </label>
          <input
            type="range"
            min={PRICE_RANGES.MIN}
            max={PRICE_RANGES.MAX}
            step={PRICE_RANGES.STEP}
            value={props.filters.maxPrice}
            onInput$={(e) => {
              props.onFiltersChange({
                maxPrice: parseInt((e.target as HTMLInputElement).value),
              });
            }}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Max Size: {props.filters.maxSize} acres
          </label>
          <input
            type="range"
            min={SIZE_RANGES.MIN}
            max={SIZE_RANGES.MAX}
            step={SIZE_RANGES.STEP}
            value={props.filters.maxSize}
            onInput$={(e) => {
              props.onFiltersChange({
                maxSize: parseFloat((e.target as HTMLInputElement).value),
              });
            }}
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Transaction Type
          </label>
          <select
            value={props.filters.transactionType}
            onChange$={(e) => {
              props.onFiltersChange({
                transactionType: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All</option>
            <option value="sale">For Sale</option>
            <option value="lease">For Lease</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Land Use
          </label>
          <select
            value={props.filters.landUse}
            onChange$={(e) => {
              props.onFiltersChange({
                landUse: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="agricultural">Agricultural</option>
            <option value="industrial">Industrial</option>
            <option value="mixed">Mixed Use</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Topography
          </label>
          <select
            value={props.filters.topography}
            onChange$={(e) => {
              props.onFiltersChange({
                topography: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Types</option>
            <option value="flat">Flat</option>
            <option value="gently-sloping">Gently Sloping</option>
            <option value="hilly">Hilly</option>
            <option value="valley">Valley</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={props.filters.location}
            onChange$={(e) => {
              props.onFiltersChange({
                location: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">All Locations</option>
            <option value="CBD">CBD</option>
            <option value="Elgon View">Elgon View</option>
            <option value="Uganda Road">Uganda Road</option>
            <option value="Kapseret">Kapseret</option>
            <option value="Kipkorgot">Kipkorgot</option>
            <option value="Industrial Area">Industrial Area</option>
            <option value="West Indies">West Indies</option>
            <option value="Huruma">Huruma</option>
            <option value="Soy">Soy</option>
          </select>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-200">
        <p class="text-sm text-gray-600">
          Showing <span class="font-semibold">{props.plotCount}</span>{' '}
          {props.plotCount === 1 ? 'plot' : 'plots'}
        </p>
      </div>
    </div>
  );
});

// --- Main Plot Listing Component (Removed Contact Modal Logic) ---

export default component$(() => {
  const selectedPlot = useSignal<Plot | null>(null);
  const isGalleryOpen = useSignal(false);

  // General WhatsApp number for the CTA
  const generalWhatsAppNumber = '254700000000';
  const generalWhatsAppLink = `https://wa.me/${generalWhatsAppNumber}?text=${encodeURIComponent(
    "Hello, I'm looking for specific land requirements in Eldoret. Can you assist me?"
  )}`;

  const filters = useStore<PlotFilterState>({
    minPrice: PRICE_RANGES.MIN,
    maxPrice: PRICE_RANGES.MAX,
    minSize: SIZE_RANGES.MIN,
    maxSize: SIZE_RANGES.MAX,
    landUse: 'all',
    transactionType: 'all',
    location: '',
    topography: 'all',
  });

  const filteredPlots = useSignal<Plot[]>([]);

  useTask$(({ track }) => {
    track(() => filters.maxPrice);
    track(() => filters.maxSize);
    track(() => filters.landUse);
    track(() => filters.transactionType);
    track(() => filters.location);
    track(() => filters.topography);

    filteredPlots.value = plots.filter((plot) => {
      if (plot.totalPrice && plot.totalPrice > filters.maxPrice) return false;
      if (plot.sizeAcres > filters.maxSize) return false;
      if (filters.landUse !== 'all' && plot.landUse !== filters.landUse)
        return false;
      if (
        filters.transactionType !== 'all' &&
        plot.transactionType !== filters.transactionType
      )
        return false;
      if (filters.location && !plot.location.includes(filters.location))
        return false;
      if (
        filters.topography !== 'all' &&
        plot.topography !== filters.topography
      )
        return false;
      return true;
    });
  });

  // Open the new image gallery modal
  const openGallery = $((plot: Plot) => {
    selectedPlot.value = plot;
    isGalleryOpen.value = true;
  });

  // Close the new image gallery modal
  const closeGallery = $(() => {
    isGalleryOpen.value = false;
    selectedPlot.value = null;
  });

  const updateFilters = $((newFilters: Partial<PlotFilterState>) => {
    Object.assign(filters, newFilters);
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <header class="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-10"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Land & Plots for Sale in Eldoret
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover prime land opportunities across Eldoret. From residential
            plots to agricultural land and commercial developments - find your
            perfect investment.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div class="flex items-center text-lg">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Title Deeds
            </div>
            <div class="flex items-center text-lg">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
              </svg>
              Expert Guidance
            </div>
            <div class="flex items-center text-lg">
              <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                  clip-rule="evenodd"
                />
              </svg>
              Secure Transactions
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Land & Plots
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our extensive selection of land for sale and lease
              across Eldoret. From affordable residential plots to prime
              commercial land and fertile agricultural acreage.
            </p>
          </div>

          <PlotFilters
            filters={filters}
            onFiltersChange={updateFilters}
            plotCount={filteredPlots.value.length}
          />

          {filteredPlots.value.length > 0 ? (
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlots.value.map((plot) => (
                <PlotCard
                  key={plot.id}
                  plot={plot}
                  onViewGallery={openGallery}
                />
              ))}
            </section>
          ) : (
            <div class="text-center py-12">
              <div class="text-gray-400 text-6xl mb-4">🌾</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                No Plots Found
              </h3>
              <p class="text-gray-600 mb-6">
                Try adjusting your filters to see more available land.
              </p>
              <button
                onClick$={() => {
                  filters.maxPrice = PRICE_RANGES.MAX;
                  filters.maxSize = SIZE_RANGES.MAX;
                  filters.landUse = 'all';
                  filters.transactionType = 'all';
                  filters.location = '';
                  filters.topography = 'all';
                }}
                class="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action with WhatsApp (Replaced form button) */}
          <aside class="text-center mt-16">
            <div class="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto border border-green-200">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Looking for Specific Land Requirements?
              </h3>
              <p class="text-gray-600 mb-6">
                Our land specialists can help you find the perfect plot that
                matches your specific needs, budget, and development plans. Get
                expert guidance on land acquisition.
              </p>
              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with a Land Specialist
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        plot={selectedPlot.value}
        isOpen={isGalleryOpen.value}
        onClose={closeGallery}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Land & Plots for Sale in Eldoret - Prime Investment Opportunities',
  meta: [
    {
      name: 'description',
      content:
        'Find prime land and plots for sale in Eldoret. Residential, commercial, agricultural and industrial land with verified title deeds. Expert guidance and secure transactions guaranteed.',
    },
    {
      name: 'keywords',
      content:
        'land for sale Eldoret, plots Eldoret, agricultural land Kenya, commercial plots, residential land, investment land, title deeds, land lease Eldoret',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      property: 'og:title',
      content: 'Premium Land & Plots for Sale in Eldoret',
    },
    {
      property: 'og:description',
      content:
        'Discover prime land investment opportunities in Eldoret. Verified plots for residential, commercial, and agricultural development.',
    },
  ],
};
