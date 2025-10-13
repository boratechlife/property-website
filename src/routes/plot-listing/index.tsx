import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type Signal,
  type QRL,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
  readonly description: string;
  readonly features: readonly string[];
  readonly landUse:
    | "residential"
    | "commercial"
    | "agricultural"
    | "industrial"
    | "mixed";
  readonly transactionType: "sale" | "lease" | "both";
  readonly availability: "available" | "pending" | "sold" | "leased";
  readonly dateAdded: string;
  readonly topography: "flat" | "gently-sloping" | "hilly" | "valley";
  readonly soilType?: string;
  readonly leasePeriod?: string; // For lease plots
}

interface PlotContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  interestedIn: "purchase" | "lease" | "both" | "more-info";
  budget?: string;
  preferredMeetingDate?: string;
}

interface PlotContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
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

const LAND_USE_TYPES = [
  "all",
  "residential",
  "commercial",
  "agricultural",
  "industrial",
  "mixed",
] as const;

const TRANSACTION_TYPES = ["all", "sale", "lease", "both"] as const;

const TOPOGRAPHY_TYPES = [
  "all",
  "flat",
  "gently-sloping",
  "hilly",
  "valley",
] as const;

// Enhanced sample plot data
const plots: readonly Plot[] = [
  {
    id: "1",
    title: "Prime Residential Plot - Elgon View",
    location: "Elgon View, Eldoret",
    totalPrice: 2500000,
    pricePerAcre: 2500000,
    sizeAcres: 1.0,
    sizeHectares: 0.4,
    landUse: "residential",
    transactionType: "sale",
    availability: "available",
    dateAdded: "2024-01-15",
    topography: "gently-sloping",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
    description:
      "Prime residential plot in the prestigious Elgon View area. Perfect for building your dream home with panoramic views of Mt. Elgon.",
    features: [
      "Title Deed Ready",
      "Electricity Connection",
      "Water Connection",
      "Tarmac Road Access",
      "Perimeter Wall",
      "Gate",
      "Mature Trees",
    ],
  },
  {
    id: "2",
    title: "Commercial Plot - CBD Adjacent",
    location: "Uganda Road, Eldoret",
    totalPrice: 8000000,
    pricePerAcre: 16000000,
    sizeAcres: 0.5,
    sizeHectares: 0.2,
    landUse: "commercial",
    transactionType: "both",
    availability: "available",
    dateAdded: "2024-01-12",
    topography: "flat",
    leasePeriod: "99 years available",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    description:
      "Strategic commercial plot on Uganda Road, ideal for retail, office complex, or mixed-use development. High traffic area with excellent visibility.",
    features: [
      "Corner Plot",
      "High Traffic Area",
      "Three Phase Power",
      "Sewer Connection",
      "Wide Road Frontage",
      "Commercial Zone",
      "Near Banks & Offices",
    ],
  },
  {
    id: "3",
    title: "Agricultural Land - Kapseret",
    location: "Kapseret, Eldoret",
    pricePerAcre: 800000,
    totalPrice: 8000000,
    sizeAcres: 10.0,
    sizeHectares: 4.0,
    landUse: "agricultural",
    transactionType: "both",
    availability: "available",
    dateAdded: "2024-01-10",
    topography: "flat",
    soilType: "Red volcanic soil",
    leasePeriod: "50-99 years negotiable",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
    description:
      "Fertile agricultural land perfect for crop farming or dairy farming. Rich volcanic soil with excellent drainage and access to irrigation.",
    features: [
      "Fertile Soil",
      "Borehole",
      "Irrigation Ready",
      "Access Road",
      "Fenced",
      "Near Market",
      "Water Rights Included",
    ],
  },
  {
    id: "4",
    title: "Residential Plots - Kipkorgot Estate",
    location: "Kipkorgot, Eldoret",
    pricePerAcre: 1800000,
    totalPrice: 900000,
    sizeAcres: 0.5,
    sizeHectares: 0.2,
    landUse: "residential",
    transactionType: "sale",
    availability: "available",
    dateAdded: "2024-01-08",
    topography: "gently-sloping",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description:
      "Affordable residential plots in a planned estate. Perfect for first-time home builders. Located in a growing residential area with good infrastructure.",
    features: [
      "Planned Estate",
      "Access Roads",
      "Electricity Nearby",
      "Water Connection",
      "Security",
      "Schools Nearby",
      "Flexible Payment",
    ],
  },
  {
    id: "5",
    title: "Industrial Plot - Eldoret Industrial Area",
    location: "Industrial Area, Eldoret",
    totalPrice: 15000000,
    pricePerAcre: 7500000,
    sizeAcres: 2.0,
    sizeHectares: 0.8,
    landUse: "industrial",
    transactionType: "lease",
    availability: "available",
    dateAdded: "2024-01-05",
    topography: "flat",
    leasePeriod: "50 years renewable",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    description:
      "Prime industrial plot in the heart of Eldoret's industrial zone. Perfect for manufacturing, warehousing, or logistics operations.",
    features: [
      "Industrial Zone",
      "Three Phase Power",
      "Railway Access",
      "Truck Route",
      "Drainage System",
      "Security",
      "Near Airport",
    ],
  },
  {
    id: "6",
    title: "Mixed-Use Development Plot",
    location: "West Indies, Eldoret",
    totalPrice: 12000000,
    pricePerAcre: 8000000,
    sizeAcres: 1.5,
    sizeHectares: 0.6,
    landUse: "mixed",
    transactionType: "both",
    availability: "pending",
    dateAdded: "2024-01-03",
    topography: "flat",
    leasePeriod: "99 years available",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop",
    description:
      "Prime mixed-use development plot suitable for residential, commercial, or hotel development. Located in the rapidly developing West Indies area.",
    features: [
      "Mixed-Use Zone",
      "High Growth Area",
      "Good Road Network",
      "Utilities Available",
      "Near University",
      "Investment Potential",
      "Easy Financing",
    ],
  },
  {
    id: "7",
    title: "Budget Residential Plot",
    location: "Huruma, Eldoret",
    totalPrice: 400000,
    pricePerAcre: 1600000,
    sizeAcres: 0.25,
    sizeHectares: 0.1,
    landUse: "residential",
    transactionType: "sale",
    availability: "available",
    dateAdded: "2024-01-20",
    topography: "gently-sloping",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
    description:
      "Affordable residential plot perfect for building rental units or starter homes. Located in an upcoming residential area with good potential.",
    features: [
      "Affordable Price",
      "Growing Area",
      "Access Road",
      "Power Line Nearby",
      "Water Source",
      "Quick Sale Process",
      "Clear Title",
    ],
  },
  {
    id: "8",
    title: "Large Agricultural Farm",
    location: "Soy, Eldoret",
    pricePerAcre: 600000,
    totalPrice: 30000000,
    sizeAcres: 50.0,
    sizeHectares: 20.0,
    landUse: "agricultural",
    transactionType: "both",
    availability: "available",
    dateAdded: "2024-01-18",
    topography: "valley",
    soilType: "Black cotton soil",
    leasePeriod: "99 years available",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad649?w=400&h=300&fit=crop",
    description:
      "Large-scale agricultural farm suitable for commercial farming, dairy farming, or agribusiness. Rich soil with natural irrigation from seasonal streams.",
    features: [
      "River Frontage",
      "Natural Irrigation",
      "Rich Soil",
      "Existing Structures",
      "Access Roads",
      "Grazing Areas",
      "Investment Grade",
    ],
  },
  {
    id: "9",
    title: "Premium Residential Estate Plot",
    location: "Elgon View, Eldoret",
    totalPrice: 5000000,
    pricePerAcre: 3333333,
    sizeAcres: 1.5,
    sizeHectares: 0.6,
    landUse: "residential",
    transactionType: "sale",
    availability: "available",
    dateAdded: "2024-01-16",
    topography: "hilly",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description:
      "Premium residential plot in an exclusive estate with panoramic views. Perfect for luxury home development with scenic mountain views.",
    features: [
      "Panoramic Views",
      "Exclusive Estate",
      "Paved Roads",
      "Underground Power",
      "Piped Water",
      "Landscaping",
      "24/7 Security",
    ],
  },
  {
    id: "10",
    title: "Commercial Hub Plot",
    location: "CBD, Eldoret",
    totalPrice: 20000000,
    pricePerAcre: 40000000,
    sizeAcres: 0.5,
    sizeHectares: 0.2,
    landUse: "commercial",
    transactionType: "lease",
    availability: "available",
    dateAdded: "2024-01-14",
    topography: "flat",
    leasePeriod: "99 years",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    description:
      "Prime commercial plot in the heart of Eldoret CBD. Ideal for high-rise office building, shopping complex, or hotel development.",
    features: [
      "CBD Location",
      "High Rise Approved",
      "Maximum Visibility",
      "Public Transport",
      "Banking District",
      "Parking Available",
      "High ROI Potential",
    ],
  },
] as const;

// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const formatSize = (acres: number, hectares: number): string => {
  if (acres >= 1) {
    return `${acres} acre${acres !== 1 ? "s" : ""} (${hectares.toFixed(1)} ha)`;
  } else {
    return `${acres} acre (${hectares.toFixed(2)} ha)`;
  }
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validatePlotForm = (
  formData: PlotContactFormData
): PlotContactFormErrors => {
  const errors: PlotContactFormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(formData.phone)) {
    errors.phone = "Please enter a valid Kenyan phone number";
  }

  return errors;
};

const getLandUseDisplayName = (landUse: string): string => {
  const landUseMap: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    agricultural: "Agricultural",
    industrial: "Industrial",
    mixed: "Mixed Use",
  };
  return landUseMap[landUse] || landUse;
};

const getTransactionTypeDisplayName = (transactionType: string): string => {
  const transactionMap: Record<string, string> = {
    sale: "For Sale",
    lease: "For Lease",
    both: "Sale/Lease",
  };
  return transactionMap[transactionType] || transactionType;
};

// Plot Contact Modal Component
const PlotContactModal = component$<{
  plot: Plot | null;
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const formData = useStore<PlotContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    interestedIn: "more-info",
    budget: "",
    preferredMeetingDate: "",
  });

  const errors = useStore<PlotContactFormErrors>({});
  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);

  const resetForm = $(() => {
    Object.assign(formData, {
      name: "",
      email: "",
      phone: "",
      message: "",
      interestedIn: "more-info",
      budget: "",
      preferredMeetingDate: "",
    });
    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof PlotContactFormErrors]
    );
    isSubmitting.value = false;
    submitSuccess.value = false;
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof PlotContactFormErrors]
    );

    const validationErrors = validatePlotForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      Object.assign(errors, validationErrors);
      return;
    }

    isSubmitting.value = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      submitSuccess.value = true;

      setTimeout(() => {
        props.onClose();
        resetForm();
      }, 2000);
    } catch (error) {
      errors.general = "Failed to send message. Please try again.";
      console.error("Form submission error:", error);
    } finally {
      isSubmitting.value = false;
    }
  });

  const handleClose = $(() => {
    props.onClose();
    resetForm();
  });

  useTask$(({ track }) => {
    track(() => props.isOpen);

    if (props.isOpen) {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }
  });

  if (!props.isOpen || !props.plot) return null;

  return (
    <div
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick$={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 id="modal-title" class="text-xl font-semibold text-gray-900">
              Land Inquiry
            </h3>
            <button
              onClick$={handleClose}
              class="text-gray-400 hover:text-gray-600 text-2xl font-bold p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
          </div>

          <div class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <h4 class="font-medium text-green-800">{props.plot.title}</h4>
            <p class="text-sm text-green-700">{props.plot.location}</p>
            <div class="text-sm font-semibold text-green-800">
              {props.plot.totalPrice && formatPrice(props.plot.totalPrice)}
              {props.plot.pricePerAcre && (
                <div class="text-xs text-green-600">
                  {formatPrice(props.plot.pricePerAcre)}/acre
                </div>
              )}
            </div>
            <p class="text-xs text-green-600">
              {formatSize(props.plot.sizeAcres, props.plot.sizeHectares)}
            </p>
          </div>

          {submitSuccess.value ? (
            <div class="text-center py-8">
              <div class="text-green-600 text-5xl mb-4">✓</div>
              <h4 class="text-lg font-semibold text-green-800 mb-2">
                Inquiry Sent Successfully!
              </h4>
              <p class="text-green-700">
                Our land specialist will contact you shortly to discuss this
                plot.
              </p>
            </div>
          ) : (
            <form onSubmit$={handleSubmit} class="space-y-4" noValidate>
              {errors.general && (
                <div class="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p class="text-sm text-red-600">{errors.general}</p>
                </div>
              )}

              <div>
                <label
                  for="contact-name"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onInput$={(e) => {
                    formData.name = (e.target as HTMLInputElement).value;
                    if (errors.name) delete errors.name;
                  }}
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p class="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  for="contact-email"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onInput$={(e) => {
                    formData.email = (e.target as HTMLInputElement).value;
                    if (errors.email) delete errors.email;
                  }}
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p class="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  for="contact-phone"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onInput$={(e) => {
                    formData.phone = (e.target as HTMLInputElement).value;
                    if (errors.phone) delete errors.phone;
                  }}
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., +254700000000"
                />
                {errors.phone && (
                  <p class="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  for="interested-in"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  I am interested in
                </label>
                <select
                  id="interested-in"
                  value={formData.interestedIn}
                  onChange$={(e) => {
                    formData.interestedIn = (e.target as HTMLSelectElement)
                      .value as any;
                  }}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="more-info">Getting more information</option>
                  <option value="purchase">Purchasing this plot</option>
                  <option value="lease">Leasing this plot</option>
                  <option value="both">Both purchase and lease options</option>
                </select>
              </div>

              <div>
                <label
                  for="budget"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Budget Range (Optional)
                </label>
                <input
                  id="budget"
                  type="text"
                  value={formData.budget}
                  onInput$={(e) => {
                    formData.budget = (e.target as HTMLInputElement).value;
                  }}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., KES 1M - 5M"
                />
              </div>

              <div>
                <label
                  for="meeting-date"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Preferred Site Visit Date
                </label>
                <input
                  id="meeting-date"
                  type="date"
                  value={formData.preferredMeetingDate}
                  onInput$={(e) => {
                    formData.preferredMeetingDate = (
                      e.target as HTMLInputElement
                    ).value;
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  for="contact-message"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Details
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onInput$={(e) => {
                    formData.message = (e.target as HTMLTextAreaElement).value;
                  }}
                  rows={4}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your intended use of the land, timeline, or any specific questions..."
                />
              </div>

              <div class="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick$={handleClose}
                  class="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors font-medium"
                  disabled={isSubmitting.value}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white rounded-md transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting.value ? (
                    <>
                      <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

// Plot Card Component
const PlotCard = component$<{
  plot: Plot;
  onContact: QRL<(plot: Plot) => void>;
}>((props) => {
  const imageLoaded = useSignal(false);

  return (
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div class="relative">
        <div
          class={`w-full h-48 bg-gray-200 ${imageLoaded.value ? "hidden" : "block animate-pulse"}`}
        ></div>
        <img
          src={props.plot.image}
          alt={`${props.plot.title} in ${props.plot.location}`}
          class={`w-full h-48 object-cover transition-opacity duration-300 ${imageLoaded.value ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad$={() => (imageLoaded.value = true)}
          onError$={() => (imageLoaded.value = true)}
        />

        <div class="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {props.plot.totalPrice
            ? formatPrice(props.plot.totalPrice)
            : props.plot.pricePerAcre
              ? `${formatPrice(props.plot.pricePerAcre)}/acre`
              : "Price on inquiry"}
        </div>

        {props.plot.availability === "pending" && (
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
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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

        <button
          onClick$={() => props.onContact(props.plot)}
          disabled={
            props.plot.availability === "sold" ||
            props.plot.availability === "leased"
          }
          class={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium ${
            props.plot.availability === "sold" ||
            props.plot.availability === "leased"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          }`}
        >
          {props.plot.availability === "sold" ||
          props.plot.availability === "leased"
            ? "Not Available"
            : "Inquire Now"}
        </button>
      </div>
    </article>
  );
});

// Plot Filters Component
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
          {isExpanded.value ? "Hide" : "Show"} Filters
        </button>
      </div>

      <div
        class={`${isExpanded.value ? "block" : "hidden"} md:block space-y-4 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-6 md:gap-4`}
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
          Showing <span class="font-semibold">{props.plotCount}</span>{" "}
          {props.plotCount === 1 ? "plot" : "plots"}
        </p>
      </div>
    </div>
  );
});

// Main Plot Listing Component
export default component$(() => {
  const selectedPlot = useSignal<Plot | null>(null);
  const isModalOpen = useSignal(false);

  const filters = useStore<PlotFilterState>({
    minPrice: PRICE_RANGES.MIN,
    maxPrice: PRICE_RANGES.MAX,
    minSize: SIZE_RANGES.MIN,
    maxSize: SIZE_RANGES.MAX,
    landUse: "all",
    transactionType: "all",
    location: "",
    topography: "all",
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
      if (filters.landUse !== "all" && plot.landUse !== filters.landUse)
        return false;
      if (
        filters.transactionType !== "all" &&
        plot.transactionType !== filters.transactionType
      )
        return false;
      if (filters.location && !plot.location.includes(filters.location))
        return false;
      if (
        filters.topography !== "all" &&
        plot.topography !== filters.topography
      )
        return false;
      return true;
    });
  });

  const openContactModal = $((plot: Plot) => {
    selectedPlot.value = plot;
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
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
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                  clipRule="evenodd"
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
                  onContact={openContactModal}
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
                  filters.landUse = "all";
                  filters.transactionType = "all";
                  filters.location = "";
                  filters.topography = "all";
                }}
                class="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
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
              <button
                onClick$={() => openContactModal(plots[0])}
                class="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md transition-colors font-medium text-lg"
              >
                Speak to a Land Specialist
              </button>
            </div>
          </aside>
        </div>
      </main>

      <PlotContactModal
        plot={selectedPlot.value}
        isOpen={isModalOpen.value}
        onClose={closeModal}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Land & Plots for Sale in Eldoret - Prime Investment Opportunities",
  meta: [
    {
      name: "description",
      content:
        "Find prime land and plots for sale in Eldoret. Residential, commercial, agricultural and industrial land with verified title deeds. Expert guidance and secure transactions guaranteed.",
    },
    {
      name: "keywords",
      content:
        "land for sale Eldoret, plots Eldoret, agricultural land Kenya, commercial plots, residential land, investment land, title deeds, land lease Eldoret",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      property: "og:title",
      content: "Premium Land & Plots for Sale in Eldoret",
    },
    {
      property: "og:description",
      content:
        "Discover prime land investment opportunities in Eldoret. Verified plots for residential, commercial, and agricultural development.",
    },
  ],
};
