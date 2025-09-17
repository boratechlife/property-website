import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

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
  readonly description: string;
  readonly features: readonly string[];
  readonly type:
    | "house"
    | "apartment"
    | "villa"
    | "studio"
    | "single-room"
    | "bedsitter"
    | "shop"
    | "office"
    | "warehouse"
    | "commercial";
  readonly availability: "available" | "pending" | "rented";
  readonly dateAdded: string;
  readonly category: "residential" | "commercial";
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredViewingDate?: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  general?: string;
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

// Enhanced sample data with more property types
const properties: readonly Property[] = [
  {
    id: "1",
    title: "Modern 3BR House",
    location: "Kipkorgot, Eldoret",
    price: 35000,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: "house",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-15",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    description:
      "Beautiful modern house with spacious rooms and contemporary finishes. Perfect for families seeking comfort and style.",
    features: [
      "Parking",
      "Garden",
      "Security",
      "Water",
      "Fitted Kitchen",
      "Master En-suite",
    ],
  },
  {
    id: "2",
    title: "Cozy 2BR Apartment",
    location: "Kapsoya, Eldoret",
    price: 25000,
    bedrooms: 2,
    bathrooms: 1,
    area: 80,
    type: "apartment",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    description:
      "Comfortable apartment perfect for small families or young professionals. Located in a secure neighborhood.",
    features: ["Balcony", "Parking", "Security", "Water", "Internet Ready"],
  },
  {
    id: "3",
    title: "Spacious 4BR Villa",
    location: "Elgon View, Eldoret",
    price: 55000,
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    type: "villa",
    category: "residential",
    availability: "pending",
    dateAdded: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
    description:
      "Luxurious villa with panoramic views and premium amenities. Features include spacious rooms and modern fixtures.",
    features: [
      "Swimming Pool",
      "Garden",
      "Garage",
      "Security",
      "Generator",
      "Gym",
      "Study Room",
    ],
  },
  {
    id: "4",
    title: "Budget Studio",
    location: "Kapseret, Eldoret",
    price: 15000,
    bedrooms: 0,
    bathrooms: 1,
    area: 45,
    type: "studio",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    description:
      "Affordable studio apartment ideal for students or young professionals starting their careers.",
    features: ["Furnished", "Security", "Water", "Wi-Fi Ready"],
  },
  {
    id: "5",
    title: "Family 3BR House",
    location: "Pioneer, Eldoret",
    price: 40000,
    bedrooms: 3,
    bathrooms: 2,
    area: 135,
    type: "house",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-05",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    description:
      "Well-maintained family house in a quiet, child-friendly neighborhood with excellent schools nearby.",
    features: [
      "Garden",
      "Parking",
      "Security",
      "Borehole",
      "Playground",
      "Storage Room",
    ],
  },
  {
    id: "6",
    title: "Executive 2BR Flat",
    location: "West Indies, Eldoret",
    price: 30000,
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: "apartment",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-03",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=300&fit=crop",
    description:
      "Executive apartment with modern amenities and strategic location. Perfect for working professionals.",
    features: [
      "Balcony",
      "Gym",
      "Security",
      "Backup Water",
      "Elevator",
      "Concierge",
    ],
  },
  {
    id: "7",
    title: "Affordable Single Room",
    location: "Huruma, Eldoret",
    price: 8000,
    bedrooms: 0,
    bathrooms: 0,
    area: 12,
    type: "single-room",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-20",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description:
      "Clean single room perfect for students and young professionals. Shared bathroom facilities available.",
    features: [
      "Security",
      "Water",
      "Shared Bathroom",
      "Electricity",
      "Wi-Fi Ready",
    ],
  },
  {
    id: "8",
    title: "Modern Bedsitter",
    location: "Kipkorgot, Eldoret",
    price: 12000,
    bedrooms: 1,
    bathrooms: 1,
    area: 25,
    type: "bedsitter",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-18",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    description:
      "Compact bedsitter with private bathroom and kitchenette. Ideal for young professionals seeking independence.",
    features: [
      "Private Bathroom",
      "Kitchenette",
      "Security",
      "Water",
      "Balcony",
    ],
  },
  {
    id: "9",
    title: "Prime Shop Space",
    location: "CBD, Eldoret",
    price: 45000,
    bedrooms: 0,
    bathrooms: 1,
    area: 60,
    type: "shop",
    category: "commercial",
    availability: "available",
    dateAdded: "2024-01-16",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description:
      "Strategic shop location in the heart of Eldoret CBD. High foot traffic and excellent visibility for retail business.",
    features: [
      "Street Facing",
      "High Traffic",
      "Security",
      "Parking",
      "Storage Area",
      "Display Windows",
    ],
  },
  {
    id: "10",
    title: "Modern Office Suite",
    location: "West Indies, Eldoret",
    price: 35000,
    bedrooms: 0,
    bathrooms: 2,
    area: 80,
    type: "office",
    category: "commercial",
    availability: "available",
    dateAdded: "2024-01-14",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    description:
      "Professional office space with modern amenities. Perfect for small to medium businesses and professional services.",
    features: [
      "Air Conditioning",
      "High-Speed Internet",
      "Conference Room",
      "Parking",
      "Security",
      "Reception Area",
    ],
  },
  {
    id: "11",
    title: "Large Warehouse",
    location: "Industrial Area, Eldoret",
    price: 80000,
    bedrooms: 0,
    bathrooms: 2,
    area: 500,
    type: "warehouse",
    category: "commercial",
    availability: "available",
    dateAdded: "2024-01-12",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    description:
      "Spacious warehouse facility with loading docks and office space. Ideal for storage, distribution, or light manufacturing.",
    features: [
      "Loading Dock",
      "Office Space",
      "High Ceiling",
      "24/7 Security",
      "Truck Access",
      "Three Phase Power",
    ],
  },
  {
    id: "12",
    title: "Budget Single Room",
    location: "Bondeni, Eldoret",
    price: 6000,
    bedrooms: 0,
    bathrooms: 0,
    area: 10,
    type: "single-room",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-10",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description:
      "Very affordable single room for students and budget-conscious tenants. Basic amenities with shared facilities.",
    features: [
      "Security",
      "Water",
      "Electricity",
      "Shared Kitchen",
      "Shared Bathroom",
    ],
  },
  {
    id: "13",
    title: "Commercial Space",
    location: "Uganda Road, Eldoret",
    price: 60000,
    bedrooms: 0,
    bathrooms: 3,
    area: 120,
    type: "commercial",
    category: "commercial",
    availability: "available",
    dateAdded: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    description:
      "Multi-purpose commercial space suitable for various businesses. Ground floor location with excellent accessibility.",
    features: [
      "Ground Floor",
      "Multiple Entrances",
      "Parking",
      "Security",
      "Backup Power",
      "Elevator Access",
    ],
  },
  {
    id: "14",
    title: "Furnished Bedsitter",
    location: "Kapsoya, Eldoret",
    price: 18000,
    bedrooms: 1,
    bathrooms: 1,
    area: 28,
    type: "bedsitter",
    category: "residential",
    availability: "available",
    dateAdded: "2024-01-06",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    description:
      "Fully furnished bedsitter ready for immediate occupation. All utilities included in the rent.",
    features: [
      "Fully Furnished",
      "Private Bathroom",
      "Kitchenette",
      "Water Included",
      "Internet Ready",
      "Security",
    ],
  },
] as const;

// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
  }).format(price);
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateForm = (formData: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {};

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

const getPropertyDisplayName = (type: string): string => {
  const typeMap: Record<string, string> = {
    "single-room": "Single Room",
    bedsitter: "Bedsitter",
    studio: "Studio",
    apartment: "Apartment",
    house: "House",
    villa: "Villa",
    shop: "Shop",
    office: "Office",
    warehouse: "Warehouse",
    commercial: "Commercial Space",
  };
  return typeMap[type] || type;
};

// Enhanced Contact Modal Component with better validation and UX
const ContactModal = component$<{
  property: Property | null;
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const formData = useStore<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredViewingDate: "",
  });

  const errors = useStore<ContactFormErrors>({});
  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);

  const resetForm = $(() => {
    Object.assign(formData, {
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredViewingDate: "",
    });
    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof ContactFormErrors]
    );
    isSubmitting.value = false;
    submitSuccess.value = false;
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    // Clear previous errors
    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof ContactFormErrors]
    );

    // Validate form
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      Object.assign(errors, validationErrors);
      return;
    }

    isSubmitting.value = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success feedback
      submitSuccess.value = true;

      // Auto-close after success
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

  // Keyboard navigation
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

  if (!props.isOpen || !props.property) return null;

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
              Contact Agent
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

          <div class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 class="font-medium text-yellow-800">{props.property.title}</h4>
            <p class="text-sm text-yellow-700">{props.property.location}</p>
            <p class="text-sm font-semibold text-yellow-800">
              {formatPrice(props.property.price)}/month
            </p>
          </div>

          {submitSuccess.value ? (
            <div class="text-center py-8">
              <div class="text-green-600 text-5xl mb-4">✓</div>
              <h4 class="text-lg font-semibold text-green-800 mb-2">
                Message Sent Successfully!
              </h4>
              <p class="text-green-700">
                Our agent will contact you shortly regarding your inquiry.
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
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                    errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" class="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
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
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" class="mt-1 text-sm text-red-600">
                    {errors.email}
                  </p>
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
                  class={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                    errors.phone
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  placeholder="e.g., +254700000000"
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" class="mt-1 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  for="viewing-date"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  {props.property.category === "commercial"
                    ? "Preferred Meeting Date"
                    : "Preferred Viewing Date"}
                </label>
                <input
                  id="viewing-date"
                  type="date"
                  value={formData.preferredViewingDate}
                  onInput$={(e) => {
                    formData.preferredViewingDate = (
                      e.target as HTMLInputElement
                    ).value;
                  }}
                  min={new Date().toISOString().split("T")[0]}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  for="contact-message"
                  class="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Message
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onInput$={(e) => {
                    formData.message = (e.target as HTMLTextAreaElement).value;
                  }}
                  rows={4}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder={
                    props.property.category === "commercial"
                      ? "Tell us about your business needs, budget, or any specific requirements..."
                      : "Tell us about your specific requirements, budget constraints, or any questions..."
                  }
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
                  class="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 disabled:cursor-not-allowed text-white rounded-md transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting.value ? (
                    <>
                      <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
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

// Enhanced Property Card with better accessibility and performance
const PropertyCard = component$<{
  property: Property;
  onContact: QRL<(property: Property) => void>;
}>((props) => {
  const imageLoaded = useSignal(false);

  return (
    <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div class="relative">
        <div
          class={`w-full h-48 bg-gray-200 ${imageLoaded.value ? "hidden" : "block animate-pulse"}`}
        ></div>
        <img
          src={props.property.image}
          alt={`${props.property.title} in ${props.property.location}`}
          class={`w-full h-48 object-cover transition-opacity duration-300 ${imageLoaded.value ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad$={() => (imageLoaded.value = true)}
          onError$={() => (imageLoaded.value = true)}
        />
        <div class="absolute top-3 right-3 bg-yellow-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          {formatPrice(props.property.price)}/mo
        </div>
        {props.property.availability === "pending" && (
          <div class="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            Pending
          </div>
        )}
        <div class="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
          {getPropertyDisplayName(props.property.type)}
        </div>
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
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {props.property.location}
          </p>
        </header>

        <div
          class="flex items-center justify-between text-sm text-gray-600 mb-4 p-3 bg-gray-50 rounded-lg"
          role="list"
        >
          {props.property.category === "residential" ? (
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span
                  class="font-medium"
                  aria-label={`${props.property.bedrooms} bedrooms`}
                >
                  {props.property.bedrooms > 0
                    ? `${props.property.bedrooms} BR`
                    : "Room"}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                <span
                  class="font-medium"
                  aria-label={`${props.property.bathrooms} bathrooms`}
                >
                  {props.property.bathrooms > 0
                    ? `${props.property.bathrooms} BA`
                    : "Shared"}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
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

        <button
          onClick$={() => props.onContact(props.property)}
          disabled={props.property.availability === "rented"}
          class={`w-full py-2 px-4 rounded-md transition-colors duration-200 font-medium ${
            props.property.availability === "rented"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          }`}
          aria-label={`Contact agent about ${props.property.title}`}
        >
          {props.property.availability === "rented"
            ? "Not Available"
            : "Contact Agent"}
        </button>
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
          {isExpanded.value ? "Hide" : "Show"} Filters
        </button>
      </div>

      <div
        id="filters-content"
        class={`${isExpanded.value ? "block" : "hidden"} md:block space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-5 md:gap-4`}
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
                propertyType: "all", // Reset property type when category changes
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
            {props.filters.category === "all" ||
            props.filters.category === "residential" ? (
              <>
                <option value="single-room">Single Room</option>
                <option value="bedsitter">Bedsitter</option>
                <option value="studio">Studio</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
              </>
            ) : null}
            {props.filters.category === "all" ||
            props.filters.category === "commercial" ? (
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
            {props.filters.category === "commercial"
              ? "Space Type"
              : "Bedrooms"}
          </label>
          <select
            id="bedrooms-filter"
            value={props.filters.bedrooms?.toString() || ""}
            onChange$={(e) => {
              const value = (e.target as HTMLSelectElement).value;
              props.onFiltersChange({
                bedrooms: value ? parseInt(value) : null,
              });
            }}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Any</option>
            {props.filters.category === "commercial" ? (
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
          Showing <span class="font-semibold">{props.propertyCount}</span>{" "}
          {props.propertyCount === 1 ? "property" : "properties"}
        </p>
      </div>
    </div>
  );
});

// Main Page Component with enhanced features
export default component$(() => {
  const selectedProperty = useSignal<Property | null>(null);
  const isModalOpen = useSignal(false);

  const filters = useStore<FilterState>({
    minPrice: PRICE_RANGES.MIN,
    maxPrice: PRICE_RANGES.MAX,
    bedrooms: null,
    propertyType: "all",
    location: "",
    category: "all",
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
        filters.propertyType !== "all" &&
        property.type !== filters.propertyType
      )
        return false;
      if (filters.location && !property.location.includes(filters.location))
        return false;
      if (filters.category !== "all" && property.category !== filters.category)
        return false;
      return true;
    });
  });

  const openContactModal = $((property: Property) => {
    selectedProperty.value = property;
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
    selectedProperty.value = null;
  });

  const updateFilters = $((newFilters: Partial<FilterState>) => {
    Object.assign(filters, newFilters);
  });

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
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
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
                  onContact={openContactModal}
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
                  filters.propertyType = "all";
                  filters.location = "";
                  filters.category = "all";
                }}
                class="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-6 rounded-md transition-colors font-medium"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Call to Action */}
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
              <button
                onClick$={() => openContactModal(properties[0])}
                class="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-8 rounded-md transition-colors duration-200 font-medium text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Tell Us Your Requirements
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal
        property={selectedProperty.value}
        isOpen={isModalOpen.value}
        onClose={closeModal}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    "Properties for Rent in Eldoret - Residential & Commercial | EldoretSpaces",
  meta: [
    {
      name: "description",
      content:
        "Find rental properties in Eldoret - from budget single rooms to luxury homes, shops, offices, and commercial spaces. Verified listings with professional service and transparent pricing.",
    },
    {
      name: "keywords",
      content:
        "Eldoret rental properties, single rooms Eldoret, bedsitter Eldoret, shops for rent, office space Eldoret, houses Eldoret, apartments Eldoret, commercial property Kenya, warehouse rental",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: "Properties for Rent in Eldoret - Residential & Commercial",
    },
    {
      property: "og:description",
      content:
        "Discover rental properties in Eldoret - single rooms, apartments, houses, shops, offices and commercial spaces. Professional service with verified listings.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "en_KE",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "theme-color",
      content: "#d97706",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://eldoretspaces.co.ke",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
};
