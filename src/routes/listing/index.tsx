import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Enhanced TypeScript interfaces
interface Property {
  readonly id: string;
  readonly title: string;
  readonly location: string;
  readonly price: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly area: number;
  readonly image: string;
  readonly images: readonly string[]; // Multiple images array
  readonly description: string;
  readonly features: readonly string[];
  readonly type:
    | 'house'
    | 'apartment'
    | 'villa'
    | 'studio'
    | 'single-room'
    | 'bedsitter'
    | 'shop'
    | 'office'
    | 'warehouse'
    | 'commercial';
  readonly availability: 'available' | 'pending' | 'rented';
  readonly dateAdded: string;
  readonly category: 'residential' | 'commercial';
  readonly whatsappNumber: string; // WhatsApp contact
}

interface FilterState {
  minPrice: number;
  maxPrice: number;
  bedrooms: number | null;
  propertyType: string;
  location: string;
  category: string;
}

// Constants
const PRICE_RANGES = {
  MIN: 5000,
  MAX: 150000,
  STEP: 2500,
} as const;

// Enhanced sample data with multiple images
const properties: readonly Property[] = [
  {
    id: '1',
    title: 'Modern 3BR House',
    location: 'Kipkorgot, Eldoret',
    price: 35000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: 'house',
    category: 'residential',
    availability: 'available',
    dateAdded: '2024-01-15',
    image:
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.23 AM.jpeg',
    images: [
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.23 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.26 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.27 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.28 AM (1).jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.28 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.29 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.30 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.31 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.32 AM.jpeg',
      '/images/Prtment for sale/WhatsApp Image 2025-10-14 at 9.10.33 AM.jpeg',
    ],
    description:
      'Beautiful modern house with spacious rooms and contemporary finishes. Perfect for families seeking comfort and style.',
    features: [
      'Parking',
      'Garden',
      'Security',
      'Water',
      'Fitted Kitchen',
      'Master En-suite',
    ],
    whatsappNumber: '+254700000000',
  },
] as const;

// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(price);
};

const getPropertyDisplayName = (type: string): string => {
  const typeMap: Record<string, string> = {
    'single-room': 'Single Room',
    bedsitter: 'Bedsitter',
    studio: 'Studio',
    apartment: 'Apartment',
    house: 'House',
    villa: 'Villa',
    shop: 'Shop',
    office: 'Office',
    warehouse: 'Warehouse',
    commercial: 'Commercial Space',
  };
  return typeMap[type] || type;
};

const generateWhatsAppLink = (property: Property): string => {
  const message = encodeURIComponent(
    `Hi, I'm interested in the ${property.title} located in ${property.location} priced at ${formatPrice(property.price)}/month. Can you provide more details?`
  );
  return `https://wa.me/${property.whatsappNumber.replace(/\+/g, '')}?text=${message}`;
};

// Image Gallery Modal Component
const ImageGalleryModal = component$<{
  property: Property | null;
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const currentImageIndex = useSignal(0);

  const nextImage = $(() => {
    if (
      props.property &&
      currentImageIndex.value < props.property.images.length - 1
    ) {
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

  // Keyboard navigation
  useTask$(({ track }) => {
    track(() => props.isOpen);

    if (props.isOpen) {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          props.onClose();
        } else if (e.key === 'ArrowLeft') {
          previousImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      };

      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeydown);
        document.body.style.overflow = 'unset';
      };
    }
  });

  if (!props.isOpen || !props.property) return null;

  const images = props.property.images;

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
          {props.property.title} - {props.property.location}
        </h3>

        {/* Main Image */}
        <div class="relative bg-black rounded-lg overflow-hidden">
          <img
            src={images[currentImageIndex.value]}
            alt={`${props.property.title} - Image ${currentImageIndex.value + 1}`}
            class="w-full h-[60vh] object-contain"
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
                    ? 'border-yellow-500 scale-105'
                    : 'border-transparent hover:border-gray-400'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  class="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

// Enhanced Property Card with gallery button and WhatsApp
const PropertyCard = component$<{
  property: Property;
  onViewGallery: QRL<(property: Property) => void>;
}>((props) => {
  const imageLoaded = useSignal(false);
  const whatsappLink = generateWhatsAppLink(props.property);

  return (
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div class="relative">
        <div
          class={`w-full h-48 bg-gray-200 ${imageLoaded.value ? 'hidden' : 'block animate-pulse'}`}
        ></div>
        <img
          src={props.property.image}
          alt={`${props.property.title} in ${props.property.location}`}
          class={`w-full h-48 object-cover transition-opacity duration-300 ${imageLoaded.value ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad$={() => (imageLoaded.value = true)}
          onError$={() => (imageLoaded.value = true)}
        />
        <div class="absolute top-3 right-3 bg-yellow-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {formatPrice(props.property.price)}/mo
        </div>
        {props.property.availability === 'pending' && (
          <div class="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Pending
          </div>
        )}
        <div class="absolute bottom-3 left-3 bg-[#F04A00] text-white px-2 py-1 rounded-md text-xs font-medium">
          {getPropertyDisplayName(props.property.type)}
        </div>

        {/* View Gallery Button */}
        {props.property.images.length > 1 && (
          <button
            onClick$={() => props.onViewGallery(props.property)}
            class="absolute bottom-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-all"
            aria-label={`View ${props.property.images.length} images`}
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
            {props.property.images.length} Photos
          </button>
        )}
      </div>

      <div class="p-5">
        <header class="mb-3">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {props.property.title}
          </h3>
          <p class="text-gray-600 text-sm flex items-center">
            <svg
              class="w-4 h-4 mr-1 text-yellow-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            {props.property.location}
          </p>
        </header>

        <div
          class="flex items-center justify-between text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-lg"
          role="list"
        >
          {props.property.category === 'residential' ? (
            <>
              <div class="flex items-center" role="listitem">
                <svg
                  class="w-4 h-4 mr-1 flex-shrink-0 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span
                  class="font-medium"
                  aria-label={`${props.property.bedrooms} bedrooms`}
                >
                  {props.property.bedrooms > 0
                    ? `${props.property.bedrooms} BR`
                    : 'Room'}
                </span>
              </div>
              <div class="flex items-center" role="listitem">
                <svg
                  class="w-4 h-4 mr-1 flex-shrink-0 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span
                  class="font-medium"
                  aria-label={`${props.property.bathrooms} bathrooms`}
                >
                  {props.property.bathrooms > 0
                    ? `${props.property.bathrooms} BA`
                    : 'Shared'}
                </span>
              </div>
            </>
          ) : (
            <div class="flex items-center" role="listitem">
              <svg
                class="w-4 h-4 mr-1 flex-shrink-0 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0H3"
                />
              </svg>
              <span class="font-medium">Commercial</span>
            </div>
          )}
          <div class="flex items-center" role="listitem">
            <svg
              class="w-4 h-4 mr-1 flex-shrink-0 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <span
              class="font-medium"
              aria-label={`${props.property.area} square meters`}
            >
              {props.property.area}m²
            </span>
          </div>
        </div>

        <p class="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {props.property.description}
        </p>

        <div
          class="flex flex-wrap gap-1 mb-4"
          role="list"
          aria-label="Property features"
        >
          {props.property.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
              role="listitem"
            >
              {feature}
            </span>
          ))}
          {props.property.features.length > 3 && (
            <span
              class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              aria-label={`${props.property.features.length - 3} additional features`}
            >
              +{props.property.features.length - 3} more
            </span>
          )}
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          class={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium flex items-center justify-center gap-2 ${
            props.property.availability === 'rented'
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
              : 'bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
          }`}
          aria-label={`Contact via WhatsApp about ${props.property.title}`}
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {props.property.availability === 'rented'
            ? 'Not Available'
            : 'Chat on WhatsApp'}
        </a>
      </div>
    </article>
  );
});

// Property Filters Component
const PropertyFilters = component$<{
  filters: FilterState;
  onFiltersChange: QRL<(filters: Partial<FilterState>) => void>;
  propertyCount: number;
}>((props) => {
  const isExpanded = useSignal(false);

  return (
    <div class="bg-white rounded-lg shadow-md p-6 mb-8 border border-gray-100">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Filter Properties</h3>
        <button
          onClick$={() => (isExpanded.value = !isExpanded.value)}
          class="md:hidden px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200 transition-colors"
          aria-expanded={isExpanded.value}
          aria-controls="filters-content"
        >
          {isExpanded.value ? 'Hide' : 'Show'} Filters
        </button>
      </div>

      <div
        id="filters-content"
        class={`${isExpanded.value ? 'block' : 'hidden'} md:block space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-4`}
      >
        <div>
          <label
            for="price-range"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Max Price: {formatPrice(props.filters.maxPrice)}
          </label>
          <input
            id="price-range"
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
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        <div>
          <label
            for="category-filter"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="category-filter"
            value={props.filters.category}
            onChange$={(e) => {
              props.onFiltersChange({
                category: (e.target as HTMLSelectElement).value,
                propertyType: 'all',
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div>
          <label
            for="type-filter"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Property Type
          </label>
          <select
            id="type-filter"
            value={props.filters.propertyType}
            onChange$={(e) => {
              props.onFiltersChange({
                propertyType: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            {props.filters.category === 'all' ||
            props.filters.category === 'residential' ? (
              <>
                <option value="single-room">Single Room</option>
                <option value="bedsitter">Bedsitter</option>
                <option value="studio">Studio</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </>
            ) : null}
            {props.filters.category === 'all' ||
            props.filters.category === 'commercial' ? (
              <>
                <option value="shop">Shop</option>
                <option value="office">Office</option>
                <option value="warehouse">Warehouse</option>
                <option value="commercial">Commercial Space</option>
              </>
            ) : null}
          </select>
        </div>

        <div>
          <label
            for="bedrooms-filter"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            {props.filters.category === 'commercial'
              ? 'Space Type'
              : 'Bedrooms'}
          </label>
          <select
            id="bedrooms-filter"
            value={props.filters.bedrooms?.toString() || ''}
            onChange$={(e) => {
              const value = (e.target as HTMLSelectElement).value;
              props.onFiltersChange({
                bedrooms: value ? parseInt(value) : null,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Any</option>
            {props.filters.category === 'commercial' ? (
              <>
                <option value="0">Open Plan</option>
                <option value="1">1+ Rooms</option>
                <option value="2">2+ Rooms</option>
              </>
            ) : (
              <>
                <option value="0">Room/Studio</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label
            for="location-filter"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Location
          </label>
          <select
            id="location-filter"
            value={props.filters.location}
            onChange$={(e) => {
              props.onFiltersChange({
                location: (e.target as HTMLSelectElement).value,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">All Locations</option>
            <option value="CBD">CBD</option>
            <option value="Kipkorgot">Kipkorgot</option>
            <option value="Kapsoya">Kapsoya</option>
            <option value="Elgon View">Elgon View</option>
            <option value="Kapseret">Kapseret</option>
            <option value="Pioneer">Pioneer</option>
            <option value="West Indies">West Indies</option>
            <option value="Huruma">Huruma</option>
            <option value="Bondeni">Bondeni</option>
            <option value="Industrial Area">Industrial Area</option>
            <option value="Uganda Road">Uganda Road</option>
          </select>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-200">
        <p class="text-sm text-gray-600">
          Showing <span class="font-semibold">{props.propertyCount}</span>{' '}
          {props.propertyCount === 1 ? 'property' : 'properties'}
        </p>
      </div>
    </div>
  );
});

// Main Page Component
export default component$(() => {
  const selectedProperty = useSignal<Property | null>(null);
  const isGalleryOpen = useSignal(false);

  const filters = useStore<FilterState>({
    minPrice: PRICE_RANGES.MIN,
    maxPrice: PRICE_RANGES.MAX,
    bedrooms: null,
    propertyType: 'all',
    location: '',
    category: 'all',
  });

  const filteredProperties = useSignal<Property[]>([]);

  // Filter properties based on current filters
  useTask$(({ track }) => {
    track(() => filters.maxPrice);
    track(() => filters.bedrooms);
    track(() => filters.propertyType);
    track(() => filters.location);
    track(() => filters.category);

    filteredProperties.value = properties.filter((property) => {
      if (property.price > filters.maxPrice) return false;
      if (filters.bedrooms !== null && property.bedrooms < filters.bedrooms)
        return false;
      if (
        filters.propertyType !== 'all' &&
        property.type !== filters.propertyType
      )
        return false;
      if (filters.location && !property.location.includes(filters.location))
        return false;
      if (filters.category !== 'all' && property.category !== filters.category)
        return false;
      return true;
    });
  });

  const openGallery = $((property: Property) => {
    selectedProperty.value = property;
    isGalleryOpen.value = true;
  });

  const closeGallery = $(() => {
    isGalleryOpen.value = false;
    selectedProperty.value = null;
  });

  const updateFilters = $((newFilters: Partial<FilterState>) => {
    Object.assign(filters, newFilters);
  });

  // Generate WhatsApp link for general inquiry
  const generalWhatsAppLink = `https://wa.me/254700000000?text=${encodeURIComponent(
    "Hi, I'm looking for a property to rent in Eldoret. Can you help me find something suitable?"
  )}`;

  return (
    <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <header class="relative bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
        <div
          class="absolute inset-0 bg-black opacity-10"
          aria-hidden="true"
        ></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Space in Eldoret
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover quality residential and commercial properties in prime
            locations across Eldoret. From affordable single rooms to executive
            offices and retail spaces.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
            role="list"
          >
            <div class="flex items-center text-lg" role="listitem">
              <svg
                class="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Verified Properties
            </div>
            <div class="flex items-center text-lg" role="listitem">
              <svg
                class="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              Professional Service
            </div>
            <div class="flex items-center text-lg" role="listitem">
              <svg
                class="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
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
              Available Properties & Spaces
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our diverse selection of residential and commercial
              properties available for rent in different areas of Eldoret. From
              budget-friendly single rooms to premium commercial spaces - we
              have something for everyone.
            </p>
          </div>

          {/* Filters */}
          <PropertyFilters
            filters={filters}
            onFiltersChange={updateFilters}
            propertyCount={filteredProperties.value.length}
          />

          {/* Properties Grid */}
          {filteredProperties.value.length > 0 ? (
            <section
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              aria-label="Available properties"
            >
              {filteredProperties.value.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onViewGallery={openGallery}
                />
              ))}
            </section>
          ) : (
            <div class="text-center py-12">
              <div class="text-gray-400 text-6xl mb-4">🏢</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                No Properties Found
              </h3>
              <p class="text-gray-600 mb-6">
                Try adjusting your filters to see more properties.
              </p>
              <button
                onClick$={() => {
                  filters.maxPrice = PRICE_RANGES.MAX;
                  filters.bedrooms = null;
                  filters.propertyType = 'all';
                  filters.location = '';
                  filters.category = 'all';
                }}
                class="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-md transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action with WhatsApp */}
          <aside class="text-center mt-16">
            <div class="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto border border-yellow-200">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Didn't Find What You're Looking For?
              </h3>
              <p class="text-gray-600 mb-6">
                Let us know your specific requirements and we'll help you find
                the perfect property that matches your needs and budget -
                whether residential or commercial.
              </p>
              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md transition-colors duration-200 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with Us on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* Image Gallery Modal */}
      <ImageGalleryModal
        property={selectedProperty.value}
        isOpen={isGalleryOpen.value}
        onClose={closeGallery}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    'Properties for Rent in Eldoret - Residential & Commercial | EldoretSpaces',
  meta: [
    {
      name: 'description',
      content:
        'Find rental properties in Eldoret - from budget single rooms to luxury homes, shops, offices, and commercial spaces. Verified listings with professional service and transparent pricing.',
    },
    {
      name: 'keywords',
      content:
        'Eldoret rental properties, single rooms Eldoret, bedsitter Eldoret, shops for rent, office space Eldoret, houses Eldoret, apartments Eldoret, commercial property Kenya, warehouse rental',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'Properties for Rent in Eldoret - Residential & Commercial',
    },
    {
      property: 'og:description',
      content:
        'Discover rental properties in Eldoret - single rooms, apartments, houses, shops, offices and commercial spaces. Professional service with verified listings.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: 'en_KE',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'theme-color',
      content: '#d97706',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://eldoretspaces.co.ke',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
};
