import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Property Management specific interfaces
interface PropertyManagementService {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly icon: string;
  readonly category: 'core' | 'premium' | 'specialty';
}

interface ManagementPackage {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly priceUnit: 'property' | 'percentage';
  readonly description: string;
  readonly features: readonly string[];
  readonly popular?: boolean;
  readonly propertyTypes: readonly string[];
}

interface PropertyOwnerInquiry {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  propertyLocation: string;
  propertyCount: number;
  currentStatus: string;
  message: string;
  servicesInterested: string[];
  preferredContactMethod: string;
  timeline: string;
}

interface InquiryErrors {
  name?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
  general?: string;
}

interface Testimonial {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly company?: string;
  readonly rating: number;
  readonly comment: string;
  readonly propertyType: string;
  readonly avatar: string;
  readonly location: string;
}

interface FAQ {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category: 'general' | 'pricing' | 'maintenance' | 'legal';
}

// Service data
const managementServices: readonly PropertyManagementService[] = [
  {
    id: 'tenant-screening',
    title: 'Professional Tenant Screening',
    description:
      'Comprehensive background checks, credit verification, employment verification, and reference checks to ensure quality tenants for your property.',
    features: [
      'Credit Score Analysis',
      'Employment Verification',
      'Previous Landlord References',
      'Criminal Background Check',
      'Income Verification (3x rent rule)',
      'Rental History Review',
    ],
    icon: '👥',
    category: 'core',
  },
  {
    id: 'rent-collection',
    title: 'Automated Rent Collection',
    description:
      'Streamlined rent collection with multiple payment options, automatic reminders, and late fee management to ensure consistent cash flow.',
    features: [
      'Online Payment Portal',
      'Mobile Money Integration',
      'Automated Reminders',
      'Late Fee Processing',
      'Monthly Financial Reports',
      'Direct Bank Deposits',
    ],
    icon: '💰',
    category: 'core',
  },
  {
    id: 'maintenance-repairs',
    title: '24/7 Maintenance & Repairs',
    description:
      'Professional maintenance coordination with trusted contractors, emergency response, and preventive maintenance programs.',
    features: [
      '24/7 Emergency Response',
      'Vetted Contractor Network',
      'Preventive Maintenance',
      'Cost-Effective Repairs',
      'Maintenance Tracking',
      'Owner Approval System',
    ],
    icon: '🔧',
    category: 'core',
  },
  {
    id: 'property-inspections',
    title: 'Regular Property Inspections',
    description:
      'Scheduled property inspections to maintain property condition, identify issues early, and ensure lease compliance.',
    features: [
      'Move-in/Move-out Inspections',
      'Quarterly Condition Reports',
      'Photo Documentation',
      'Issue Identification',
      'Tenant Communication',
      'Damage Assessment',
    ],
    icon: '🔍',
    category: 'core',
  },
  {
    id: 'marketing-leasing',
    title: 'Professional Marketing & Leasing',
    description:
      'Expert property marketing with professional photography, online listings, and showings to minimize vacancy periods.',
    features: [
      'Professional Photography',
      'Multiple Platform Listings',
      'Social Media Marketing',
      'Virtual Tours Available',
      'Scheduled Showings',
      'Market Rate Analysis',
    ],
    icon: '📸',
    category: 'premium',
  },
  {
    id: 'legal-compliance',
    title: 'Legal Compliance & Documentation',
    description:
      'Ensure full compliance with Kenyan rental laws, proper lease agreements, and professional handling of legal matters.',
    features: [
      'Legally Compliant Leases',
      'Rent Tribunal Representation',
      'Eviction Processing',
      'Legal Document Preparation',
      'Compliance Monitoring',
      'Dispute Resolution',
    ],
    icon: '⚖️',
    category: 'premium',
  },
] as const;

const managementPackages: readonly ManagementPackage[] = [
  {
    id: 'essential',
    name: 'Essential Management',
    price: 8,
    priceUnit: 'percentage',
    description:
      'Perfect for hands-on property owners who want basic management support with professional tenant screening and rent collection.',
    features: [
      'Tenant Screening & Placement',
      'Monthly Rent Collection',
      'Basic Maintenance Coordination',
      'Monthly Financial Reports',
      'Online Owner Portal Access',
      'Email Support',
    ],
    propertyTypes: ['single-family', 'condo', 'townhouse'],
  },
  {
    id: 'complete',
    name: 'Complete Management',
    price: 12,
    priceUnit: 'percentage',
    description:
      'Our most popular package offering comprehensive property management with proactive maintenance and professional marketing.',
    features: [
      'Everything in Essential',
      'Professional Photography',
      'Multi-Platform Marketing',
      'Quarterly Inspections',
      '24/7 Emergency Response',
      'Preventive Maintenance',
      'Dedicated Property Manager',
      'Phone & Email Support',
    ],
    popular: true,
    propertyTypes: ['single-family', 'condo', 'townhouse'],
  },
  {
    id: 'premium',
    name: 'Premium Management',
    price: 15,
    priceUnit: 'percentage',
    description:
      'White-glove service for discerning property owners seeking maximum returns with minimal involvement and premium tenant experience.',
    features: [
      'Everything in Complete',
      'Virtual Tours & 3D Walkthroughs',
      'Premium Tenant Concierge',
      'Monthly Property Reports',
      'Legal Compliance Management',
      'Advanced Financial Analytics',
      'Priority Support Hotline',
      'Quarterly Strategy Reviews',
    ],
    propertyTypes: ['single-family', 'condo', 'townhouse', 'luxury-homes'],
  },
] as const;

const testimonials: readonly Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mwangi',
    role: 'Property Owner',
    rating: 5,
    comment:
      "Outstanding service! They've managed my 3 properties for 2 years now. Professional tenant screening has eliminated problematic tenants, and I receive my rent on time every month. The online portal makes everything transparent.",
    propertyType: 'Single-family homes',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=64&h=64&fit=crop&crop=face',
    location: 'Elgon View, Eldoret',
  },
  {
    id: '2',
    name: 'Dr. James Kiprotich',
    role: 'Medical Practitioner',
    company: 'Moi Teaching Hospital',
    rating: 5,
    comment:
      'As a busy doctor, I needed reliable property management for my rental units. Their 24/7 maintenance response and detailed monthly reports give me peace of mind. Highly recommend their complete management package.',
    propertyType: 'Townhouses',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    location: 'Pioneer Estate, Eldoret',
  },
  {
    id: '3',
    name: 'Grace Chelimo',
    role: 'Real Estate Investor',
    rating: 5,
    comment:
      "I've worked with several management companies, but none compare to their professionalism. They increased my rental income by 15% through better marketing and reduced my vacancy rate to almost zero. Excellent ROI!",
    propertyType: 'Mixed Portfolio',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    location: 'West Indies, Eldoret',
  },
] as const;

const faqs: readonly FAQ[] = [
  {
    id: '1',
    question: 'What percentage do you charge for property management?',
    answer:
      'Our fees range from 8-15% of monthly rental income depending on the package selected. The Essential package is 8%, Complete is 12%, and Premium is 15%. All packages include core services with no hidden fees.',
    category: 'pricing',
  },
  {
    id: '2',
    question: 'How do you screen potential tenants?',
    answer:
      'We conduct comprehensive screening including credit checks, employment verification, previous landlord references, criminal background checks, and income verification following the 3x rent rule. Our screening reduces tenant issues by over 90%.',
    category: 'general',
  },
  {
    id: '3',
    question: 'How quickly can you fill vacant properties?',
    answer:
      'With our professional marketing approach including high-quality photos and multi-platform listings, average vacancy periods are 14-21 days for well-priced properties in good condition. Premium properties may fill within 7-10 days.',
    category: 'general',
  },
  {
    id: '4',
    question: 'Do you handle emergency maintenance calls?',
    answer:
      'Yes, we provide 24/7 emergency response for urgent issues like plumbing leaks, electrical problems, or security concerns. Non-emergency maintenance is typically scheduled within 48-72 hours through our vetted contractor network.',
    category: 'maintenance',
  },
  {
    id: '5',
    question: "What happens if tenants don't pay rent?",
    answer:
      'We follow a structured process: immediate late notices, phone contact, payment plans if appropriate, and escalation to legal action if necessary. We work with legal experts to ensure proper procedures are followed under Kenyan rental law.',
    category: 'legal',
  },
  {
    id: '6',
    question: 'Can I see financial reports for my properties?',
    answer:
      'Absolutely. All clients receive detailed monthly reports including rent collection, expenses, maintenance costs, and net income. Our online portal provides 24/7 access to real-time financial data and property performance metrics.',
    category: 'general',
  },
] as const;

// Utility functions
const formatPercentage = (percentage: number): string => {
  return `${percentage}%`;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const validateInquiry = (formData: PropertyOwnerInquiry): InquiryErrors => {
  const errors: InquiryErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid Kenyan phone number';
  }

  if (!formData.propertyType) {
    errors.propertyType = 'Property type is required';
  }

  return errors;
};

// Property Owner Inquiry Modal
const PropertyOwnerModal = component$<{
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const formData = useStore<PropertyOwnerInquiry>({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    propertyLocation: '',
    propertyCount: 1,
    currentStatus: '',
    message: '',
    servicesInterested: [],
    preferredContactMethod: 'email',
    timeline: '',
  });

  const errors = useStore<InquiryErrors>({});
  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);

  const resetForm = $(() => {
    Object.assign(formData, {
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      propertyLocation: '',
      propertyCount: 1,
      currentStatus: '',
      message: '',
      servicesInterested: [],
      preferredContactMethod: 'email',
      timeline: '',
    });
    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof InquiryErrors]
    );
    isSubmitting.value = false;
    submitSuccess.value = false;
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof InquiryErrors]
    );

    const validationErrors = validateInquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      Object.assign(errors, validationErrors);
      return;
    }

    isSubmitting.value = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      submitSuccess.value = true;
      setTimeout(() => {
        props.onClose();
        resetForm();
      }, 2500);
    } catch (error) {
      console.log('Error', error);
      errors.general = 'Failed to send inquiry. Please try again.';
    } finally {
      isSubmitting.value = false;
    }
  });

  const handleClose = $(() => {
    props.onClose();
    resetForm();
  });

  const toggleService = $((service: string) => {
    const index = formData.servicesInterested.indexOf(service);
    if (index > -1) {
      formData.servicesInterested = formData.servicesInterested.filter(
        (s) => s !== service
      );
    } else {
      formData.servicesInterested = [...formData.servicesInterested, service];
    }
  });

  useTask$(({ track }) => {
    track(() => props.isOpen);
    if (props.isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  });

  if (!props.isOpen) return null;

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-8">
          <div class="flex justify-between items-center mb-6">
            <div>
              <h3 class="text-2xl font-bold text-slate-900">
                Get Your Free Property Analysis
              </h3>
              <p class="text-slate-600 mt-1">
                Let's discuss how we can maximize your rental income
              </p>
            </div>
            <button
              onClick$={handleClose}
              class="text-slate-400 hover:text-slate-600 p-2"
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
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {submitSuccess.value ? (
            <div class="text-center py-12">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 class="text-xl font-semibold text-slate-900 mb-2">
                Thank You!
              </h4>
              <p class="text-slate-600">
                Our property management specialist will contact you within 24
                hours to discuss your property portfolio and provide a
                customized management proposal.
              </p>
            </div>
          ) : (
            <form onSubmit$={handleSubmit} class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onInput$={(e) => {
                      formData.name = (e.target as HTMLInputElement).value;
                      if (errors.name) delete errors.name;
                    }}
                    class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? 'border-red-300' : 'border-slate-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p class="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onInput$={(e) => {
                      formData.phone = (e.target as HTMLInputElement).value;
                      if (errors.phone) delete errors.phone;
                    }}
                    class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-300' : 'border-slate-300'
                    }`}
                    placeholder="+254700000000"
                  />
                  {errors.phone && (
                    <p class="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onInput$={(e) => {
                    formData.email = (e.target as HTMLInputElement).value;
                    if (errors.email) delete errors.email;
                  }}
                  class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-300' : 'border-slate-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p class="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange$={(e) => {
                      formData.propertyType = (
                        e.target as HTMLSelectElement
                      ).value;
                      if (errors.propertyType) delete errors.propertyType;
                    }}
                    class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.propertyType
                        ? 'border-red-300'
                        : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select Type</option>
                    <option value="single-family">Single-Family Home</option>
                    <option value="condo">Condominium</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="mixed">Mixed Portfolio</option>
                  </select>
                  {errors.propertyType && (
                    <p class="text-red-600 text-sm mt-1">
                      {errors.propertyType}
                    </p>
                  )}
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Number of Properties
                  </label>
                  <select
                    value={formData.propertyCount}
                    onChange$={(e) => {
                      formData.propertyCount = parseInt(
                        (e.target as HTMLSelectElement).value
                      );
                    }}
                    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={1}>1 Property</option>
                    <option value={2}>2 Properties</option>
                    <option value={3}>3 Properties</option>
                    <option value={4}>4 Properties</option>
                    <option value={5}>5+ Properties</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Current Status
                  </label>
                  <select
                    value={formData.currentStatus}
                    onChange$={(e) => {
                      formData.currentStatus = (
                        e.target as HTMLSelectElement
                      ).value;
                    }}
                    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Status</option>
                    <option value="currently-rented">Currently Rented</option>
                    <option value="vacant">Vacant</option>
                    <option value="self-managed">Self-Managed</option>
                    <option value="other-company">
                      Other Management Company
                    </option>
                    <option value="new-purchase">New Purchase</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-3">
                  Services Interested In
                </label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Full Management',
                    'Tenant Screening',
                    'Rent Collection',
                    'Maintenance',
                    'Marketing',
                    'Legal Support',
                  ].map((service) => (
                    <label key={service} class="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.servicesInterested.includes(service)}
                        onChange$={() => toggleService(service)}
                        class="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span class="ml-2 text-sm text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Property Location
                </label>
                <input
                  type="text"
                  value={formData.propertyLocation}
                  onInput$={(e) => {
                    formData.propertyLocation = (
                      e.target as HTMLInputElement
                    ).value;
                  }}
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Elgon View, Pioneer Estate, West Indies"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  value={formData.message}
                  onInput$={(e) => {
                    formData.message = (e.target as HTMLTextAreaElement).value;
                  }}
                  rows={4}
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your goals, challenges, or specific questions about property management..."
                />
              </div>

              <div class="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick$={handleClose}
                  class="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="flex-1 px-6 py-3 bg-[#F04A00] text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
                >
                  {isSubmitting.value ? 'Sending...' : 'Get Free Analysis'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
});

// Main Component
export default component$(() => {
  const isModalOpen = useSignal(false);
  const selectedPackage = useSignal('');
  const activeTab = useSignal('general');

  const openModal = $((packageId?: string) => {
    if (packageId) {
      selectedPackage.value = packageId;
    }
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
    selectedPackage.value = '';
  });

  return (
    <div class="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
          <svg
            class="absolute bottom-0 w-full h-24 text-slate-50"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center bg-[#F04A00]/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Trusted by 500+ Property Owners
              </div>

              <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Property Management
                </span>{' '}
                in Eldoret
              </h1>

              <p class="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Maximize your rental income with zero hassle. We handle
                everything from tenant screening to maintenance, so you can
                focus on growing your investment portfolio.
              </p>

              <div class="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick$={() => openModal()}
                  class="px-8 py-4 bg-[#F04A00] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get Free Property Analysis
                </button>
                <button class="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200">
                  View Success Stories
                </button>
              </div>

              <div class="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div class="text-3xl font-bold text-blue-400">500+</div>
                  <div class="text-slate-300">Properties Managed</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-emerald-400">98%</div>
                  <div class="text-slate-300">Occupancy Rate</div>
                </div>
                <div>
                  <div class="text-3xl font-bold text-purple-400">15%</div>
                  <div class="text-slate-300">Average Income Increase</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 rounded-2xl blur-3xl"></div>
              <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <div class="flex items-center justify-between mb-6">
                  <h3 class="text-xl font-semibold">Property Dashboard</h3>
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div class="text-sm text-slate-300">Monthly Revenue</div>
                      <div class="text-2xl font-bold">KES 245,000</div>
                    </div>
                    <div class="text-green-400 text-sm">+12%</div>
                  </div>

                  <div class="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div class="text-sm text-slate-300">Occupancy Rate</div>
                      <div class="text-2xl font-bold">97.5%</div>
                    </div>
                    <div class="text-green-400 text-sm">+2.1%</div>
                  </div>

                  <div class="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                    <div>
                      <div class="text-sm text-slate-300">
                        Active Properties
                      </div>
                      <div class="text-2xl font-bold">8</div>
                    </div>
                    <div class="text-blue-400 text-sm">All Managed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Property Management Services
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">
              From tenant screening to emergency maintenance, we provide
              end-to-end property management solutions that maximize your
              returns and minimize your stress.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementServices.map((service) => (
              <div
                key={service.id}
                class="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                <div class="relative">
                  <div class="text-4xl mb-4">{service.icon}</div>
                  <h3 class="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p class="text-slate-600 mb-6">{service.description}</p>

                  <div class="space-y-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        class="flex items-center text-sm text-slate-600"
                      >
                        <svg
                          class="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Management Package
            </h2>
            <p class="text-xl text-slate-600">
              Transparent pricing with no hidden fees. Select the package that
              best fits your property portfolio.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {managementPackages.map((pkg) => (
              <div
                key={pkg.id}
                class={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white transform scale-105 shadow-2xl'
                    : 'bg-white border border-slate-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span class="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div class="mb-8">
                  <h3
                    class={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}
                  >
                    {pkg.name}
                  </h3>
                  <div class="flex items-baseline mb-4">
                    <span
                      class={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}
                    >
                      {formatPercentage(pkg.price)}
                    </span>
                    <span
                      class={`ml-2 ${pkg.popular ? 'text-blue-100' : 'text-slate-600'}`}
                    >
                      of monthly rent
                    </span>
                  </div>
                  <p
                    class={`${pkg.popular ? 'text-blue-100' : 'text-slate-600'}`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div class="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} class="flex items-start">
                      <svg
                        class={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                          pkg.popular ? 'text-green-300' : 'text-green-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                      </svg>
                      <span
                        class={`${pkg.popular ? 'text-white' : 'text-slate-700'}`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick$={() => openModal(pkg.id)}
                  class={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-white text-blue-600 hover:bg-slate-50 shadow-lg'
                      : 'bg-[#F04A00] text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-4">
              What Property Owners Say
            </h2>
            <p class="text-xl text-slate-600">
              Real feedback from property owners who trust us with their
              investment properties.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                class="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <div class="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <p class="text-slate-700 mb-6 leading-relaxed">
                  {testimonial.comment}
                </p>

                <div class="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    class="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div class="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div class="text-sm text-slate-600">{testimonial.role}</div>
                    <div class="text-xs text-slate-500">
                      {testimonial.location} • {testimonial.propertyType}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-slate-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-slate-600">
              Get answers to common questions about our property management
              services.
            </p>
          </div>

          <div class="mb-8">
            <div class="flex flex-wrap justify-center gap-2">
              {['general', 'pricing', 'maintenance', 'legal'].map(
                (category) => (
                  <button
                    key={category}
                    onClick$={() => (activeTab.value = category)}
                    class={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                      activeTab.value === category
                        ? 'bg-[#F04A00] text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          <div class="space-y-4">
            {faqs
              .filter((faq) =>
                activeTab.value === 'general'
                  ? true
                  : faq.category === activeTab.value
              )
              .map((faq) => (
                <div
                  key={faq.id}
                  class="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                >
                  <h3 class="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p class="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Maximize Your Rental Income?
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful property owners who have increased their
            rental income by an average of 15% while reducing their workload to
            zero.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick$={() => openModal()}
              class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Free Property Analysis
            </button>
            <button class="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200">
              Schedule a Call
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-2xl font-bold text-blue-200">Free</div>
              <div class="text-blue-100">Property Analysis</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-200">24/7</div>
              <div class="text-blue-100">Emergency Support</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-200">No</div>
              <div class="text-blue-100">Setup Fees</div>
            </div>
          </div>
        </div>
      </section>

      <PropertyOwnerModal isOpen={isModalOpen.value} onClose={closeModal} />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    'Residential Property Management Services in Eldoret | Single-Family Homes, Condos & Townhouses | EldoretManage',
  meta: [
    {
      name: 'description',
      content:
        'Professional residential property management in Eldoret for single-family homes, condominiums, and townhouses. Maximize rental income with our comprehensive tenant screening, rent collection, maintenance, and property marketing services. Trusted by 500+ property owners.',
    },
    {
      name: 'keywords',
      content:
        'residential property management Eldoret, single family home management, condo management, townhouse rental management, property management company Kenya, tenant screening Eldoret, rent collection services, property maintenance, rental property marketing',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'robots',
      content:
        'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      property: 'og:title',
      content:
        'Professional Residential Property Management in Eldoret - Single-Family Homes, Condos & Townhouses',
    },
    {
      property: 'og:description',
      content:
        'Maximize your rental property income with our comprehensive management services. Professional tenant screening, rent collection, 24/7 maintenance, and marketing for single-family homes, condos, and townhouses in Eldoret.',
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
      property: 'og:image',
      content:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop',
    },
    {
      property: 'og:image:alt',
      content:
        'Modern residential properties managed by professional property management company in Eldoret',
    },
    {
      property: 'og:site_name',
      content: 'EldoretManage - Residential Property Management',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Residential Property Management Services in Eldoret',
    },
    {
      name: 'twitter:description',
      content:
        'Professional management for single-family homes, condos & townhouses. Maximize rental income with expert tenant screening, maintenance & marketing services.',
    },
    {
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    // Structured Data for Local Business
    {
      name: 'geo.region',
      content: 'KE-30',
    },
    {
      name: 'geo.placename',
      content: 'Eldoret',
    },
    {
      name: 'geo.position',
      content: '0.5143;35.2699',
    },
    // Schema.org markup
    {
      property: 'business:contact_data:street_address',
      content: 'Eldoret, Kenya',
    },
    {
      property: 'business:contact_data:locality',
      content: 'Eldoret',
    },
    {
      property: 'business:contact_data:region',
      content: 'Uasin Gishu County',
    },
    {
      property: 'business:contact_data:country_name',
      content: 'Kenya',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://eldoretmanage.co.ke/residential-property-management',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'preconnect',
      href: 'https://images.unsplash.com',
    },
    {
      rel: 'dns-prefetch',
      href: 'https://images.unsplash.com',
    },
  ],
};
