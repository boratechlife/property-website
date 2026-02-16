import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// Commercial Property Management interfaces
interface CommercialService {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly icon: string;
  readonly category: 'core' | 'financial' | 'strategic' | 'specialized';
  readonly propertyTypes: readonly string[];
}

interface CommercialPackage {
  readonly id: string;
  readonly name: string;
  readonly basePrice: number;
  readonly priceUnit: 'sqft' | 'percentage' | 'fixed';
  readonly minFee: number;
  readonly description: string;
  readonly features: readonly string[];
  readonly bestFor: readonly string[];
  readonly popular?: boolean;
}

interface CommercialInquiry {
  companyName: string;
  contactName: string;
  title: string;
  email: string;
  phone: string;
  propertyType: string;
  propertySize: string;
  propertyLocation: string;
  currentOccupancy: string;
  annualRevenue: string;
  managementNeeds: string[];
  timeline: string;
  budget: string;
  message: string;
}

interface CommercialInquiryErrors {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
  general?: string;
}

interface CommercialTestimonial {
  readonly id: string;
  readonly companyName: string;
  readonly contactName: string;
  readonly position: string;
  readonly industry: string;
  readonly rating: number;
  readonly comment: string;
  readonly propertyType: string;
  readonly results: string;
  readonly avatar: string;
  readonly location: string;
}

interface CommercialFAQ {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category:
    | 'leasing'
    | 'financial'
    | 'maintenance'
    | 'legal'
    | 'strategic';
}

// Commercial services data
const commercialServices: readonly CommercialService[] = [
  {
    id: 'tenant-leasing',
    title: 'Strategic Tenant Leasing & Retention',
    description:
      'Comprehensive tenant acquisition and retention strategies that optimize tenant mix, minimize vacancy, and maximize long-term asset value.',
    features: [
      'Market Analysis & Competitive Positioning',
      'Professional Tenant Prospecting',
      'Lease Negotiation & Structuring',
      'Tenant Mix Optimization',
      'Renewal Strategies & Retention',
      'Space Planning & Optimization',
    ],
    icon: '🏢',
    category: 'core',
    propertyTypes: ['office', 'retail', 'warehouse', 'mixed-use'],
  },
  {
    id: 'lease-administration',
    title: 'Advanced Lease Administration',
    description:
      'Professional lease management with automated tracking, CAM reconciliation, and compliance monitoring to ensure maximum revenue capture.',
    features: [
      'CAM Charges & Reconciliation',
      'Lease Compliance Monitoring',
      'Automated Rent Escalations',
      'Operating Expense Recovery',
      'Lease Audit & Documentation',
      'Tenant Notice Management',
    ],
    icon: '📋',
    category: 'financial',
    propertyTypes: ['office', 'retail', 'warehouse'],
  },
  {
    id: 'facility-management',
    title: 'Comprehensive Facility Management',
    description:
      'Professional facility operations including HVAC, security systems, preventive maintenance, and emergency response for optimal building performance.',
    features: [
      'HVAC System Management',
      '24/7 Security Coordination',
      'Preventive Maintenance Programs',
      'Emergency Response Protocols',
      'Vendor Management & Procurement',
      'Energy Efficiency Optimization',
    ],
    icon: '⚙️',
    category: 'core',
    propertyTypes: ['office', 'warehouse', 'mixed-use'],
  },
  {
    id: 'financial-reporting',
    title: 'Advanced Financial Reporting & Analytics',
    description:
      'Detailed financial analysis, budgeting, and performance reporting with real-time dashboards and strategic insights for informed decision-making.',
    features: [
      'Monthly P&L Statements',
      'Annual Budget Planning',
      'Cash Flow Analysis',
      'Market Performance Benchmarking',
      'Capital Expenditure Planning',
      'ROI & Asset Performance Metrics',
    ],
    icon: '📊',
    category: 'financial',
    propertyTypes: ['office', 'retail', 'warehouse', 'mixed-use'],
  },
  {
    id: 'tenant-improvements',
    title: 'Tenant Improvement Coordination',
    description:
      'Project management for tenant improvements, space modifications, and build-outs to enhance tenant satisfaction and property value.',
    features: [
      'TI Project Management',
      'Contractor Vetting & Selection',
      'Permit & Approval Processing',
      'Timeline & Budget Management',
      'Quality Control & Inspections',
      'Move-in Coordination',
    ],
    icon: '🔨',
    category: 'specialized',
    propertyTypes: ['office', 'retail'],
  },
  {
    id: 'asset-optimization',
    title: 'Strategic Asset Value Optimization',
    description:
      'Long-term strategic planning to maximize property value through market positioning, capital improvements, and performance optimization.',
    features: [
      'Asset Valuation Analysis',
      'Capital Improvement Planning',
      'Market Repositioning Strategies',
      'Disposition Planning Support',
      'Investment Performance Analysis',
      'Exit Strategy Development',
    ],
    icon: '📈',
    category: 'strategic',
    propertyTypes: ['office', 'retail', 'warehouse', 'mixed-use'],
  },
] as const;

const commercialPackages: readonly CommercialPackage[] = [
  {
    id: 'professional',
    name: 'Professional Management',
    basePrice: 4,
    priceUnit: 'percentage',
    minFee: 15000,
    description:
      'Comprehensive property management for established commercial properties with stable tenant base and standard operational requirements.',
    features: [
      'Tenant Leasing & Relations',
      'Lease Administration & CAM',
      'Basic Facility Management',
      'Monthly Financial Reporting',
      'Vendor Coordination',
      'Emergency Response',
      'Quarterly Property Inspections',
      'Online Owner Portal',
    ],
    bestFor: [
      'Established Office Buildings',
      'Strip Centers',
      'Small Warehouses',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Management',
    basePrice: 6,
    priceUnit: 'percentage',
    minFee: 25000,
    description:
      'Advanced management solution with strategic leasing, detailed analytics, and proactive asset optimization for growing commercial portfolios.',
    features: [
      'Everything in Professional',
      'Strategic Tenant Mix Planning',
      'Advanced Financial Analytics',
      'Capital Planning & Budgeting',
      'Market Analysis & Positioning',
      'Tenant Improvement Coordination',
      'Preventive Maintenance Programs',
      'Dedicated Account Manager',
    ],
    popular: true,
    bestFor: [
      'Multi-tenant Office Buildings',
      'Shopping Centers',
      'Distribution Centers',
    ],
  },
  {
    id: 'institutional',
    name: 'Institutional Management',
    basePrice: 8,
    priceUnit: 'percentage',
    minFee: 50000,
    description:
      'White-glove institutional-grade management with comprehensive strategic services, asset optimization, and maximum value enhancement.',
    features: [
      'Everything in Premium',
      'Asset Value Optimization',
      'Investment Performance Analysis',
      'Disposition Planning Support',
      'Advanced Market Intelligence',
      'Executive-level Reporting',
      '24/7 Dedicated Support',
      'Quarterly Strategy Reviews',
    ],
    bestFor: [
      'Class A Office Towers',
      'Major Retail Centers',
      'Industrial Complexes',
    ],
  },
] as const;

const commercialTestimonials: readonly CommercialTestimonial[] = [
  {
    id: '1',
    companyName: 'Eldoret Business Park Ltd',
    contactName: 'Michael Koros',
    position: 'Managing Director',
    industry: 'Real Estate Investment',
    rating: 5,
    comment:
      "Their strategic tenant leasing approach transformed our occupancy from 72% to 96% within 18 months. The financial reporting is institutional-grade, and they've increased our NOI by 28% through better lease terms and operational efficiency.",
    propertyType: 'Class A Office Complex',
    results: '24% NOI increase, 96% occupancy',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    location: 'West Indies, Eldoret',
  },
  {
    id: '2',
    companyName: 'Pioneer Retail Holdings',
    contactName: 'Catherine Mbugua',
    position: 'Investment Manager',
    industry: 'Retail Real Estate',
    rating: 5,
    comment:
      'Managing our 15,000 sqft shopping center was complex until we partnered with them. Their tenant mix optimization brought in anchor tenants, and CAM reconciliation recovered 92% of operating expenses. Professional service that delivers results.',
    propertyType: 'Community Shopping Center',
    results: '35% revenue increase, optimal tenant mix',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=64&h=64&fit=crop&crop=face',
    location: 'Uganda Road, Eldoret',
  },
  {
    id: '3',
    companyName: 'Industrial Properties East Africa',
    contactName: 'David Kimutai',
    position: 'Portfolio Manager',
    industry: 'Industrial Real Estate',
    rating: 5,
    comment:
      'Their facility management expertise is unmatched for our warehouse portfolio. 24/7 security coordination, preventive maintenance programs, and strategic tenant retention have reduced our operational costs by 18% while improving tenant satisfaction scores.',
    propertyType: 'Industrial Warehouse Complex',
    results: '18% cost reduction, 100% tenant retention',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    location: 'Industrial Area, Eldoret',
  },
] as const;

const commercialFAQs: readonly CommercialFAQ[] = [
  {
    id: '1',
    question: 'What are your management fees for commercial properties?',
    answer:
      'Our fees range from 4-8% of gross rental income depending on property type and service level. Professional Management is 4% (min KES 15,000), Premium is 6% (min KES 25,000), and Institutional is 8% (min KES 50,000). All packages include comprehensive services with no hidden fees.',
    category: 'financial',
  },
  {
    id: '2',
    question: 'How do you handle CAM charges and expense recovery?',
    answer:
      'We provide detailed CAM administration including budget preparation, monthly billing, annual reconciliation, and audit support. Our sophisticated accounting systems ensure accurate expense allocation and maximum recovery rates, typically achieving 90-95% collection efficiency.',
    category: 'financial',
  },
  {
    id: '3',
    question: 'What is your average time to lease vacant commercial space?',
    answer:
      'Leasing timelines vary by property type and market conditions. Office space typically leases within 60-90 days, retail within 90-120 days, and warehouse space within 30-60 days. Our strategic marketing approach and extensive tenant network significantly reduce vacancy periods.',
    category: 'leasing',
  },
  {
    id: '4',
    question: 'Do you provide emergency maintenance for commercial properties?',
    answer:
      'Yes, we offer 24/7 emergency response for critical issues including HVAC failures, security breaches, plumbing emergencies, and power outages. Our vetted contractor network ensures rapid response times and quality repairs to minimize tenant disruption and property damage.',
    category: 'maintenance',
  },
  {
    id: '5',
    question: 'How do you optimize tenant mix for retail properties?',
    answer:
      'We analyze market demographics, competitor analysis, and traffic patterns to develop optimal tenant mix strategies. This includes identifying anchor tenants, complementary businesses, and avoiding over-saturation of similar services to maximize foot traffic and rental income.',
    category: 'strategic',
  },
  {
    id: '6',
    question: 'What financial reporting do you provide to property owners?',
    answer:
      'Monthly reports include detailed P&L statements, cash flow analysis, budget vs actual comparisons, and key performance metrics. Quarterly reports add market analysis and strategic recommendations. All reporting is available through our secure online portal with real-time access.',
    category: 'financial',
  },
] as const;

// Utility functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const validateCommercialInquiry = (
  formData: CommercialInquiry
): CommercialInquiryErrors => {
  const errors: CommercialInquiryErrors = {};

  if (!formData.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }

  if (!formData.contactName.trim()) {
    errors.contactName = 'Contact name is required';
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

// Commercial Inquiry Modal
const CommercialInquiryModal = component$<{
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const formData = useStore<CommercialInquiry>({
    companyName: '',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    propertyType: '',
    propertySize: '',
    propertyLocation: '',
    currentOccupancy: '',
    annualRevenue: '',
    managementNeeds: [],
    timeline: '',
    budget: '',
    message: '',
  });

  const errors = useStore<CommercialInquiryErrors>({});
  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);

  const resetForm = $(() => {
    Object.assign(formData, {
      companyName: '',
      contactName: '',
      title: '',
      email: '',
      phone: '',
      propertyType: '',
      propertySize: '',
      propertyLocation: '',
      currentOccupancy: '',
      annualRevenue: '',
      managementNeeds: [],
      timeline: '',
      budget: '',
      message: '',
    });
    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof CommercialInquiryErrors]
    );
    isSubmitting.value = false;
    submitSuccess.value = false;
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();

    Object.keys(errors).forEach(
      (key) => delete errors[key as keyof CommercialInquiryErrors]
    );

    const validationErrors = validateCommercialInquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      Object.assign(errors, validationErrors);
      return;
    }

    isSubmitting.value = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      submitSuccess.value = true;
      setTimeout(() => {
        props.onClose();
        resetForm();
      }, 3000);
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

  const toggleManagementNeed = $((need: string) => {
    const index = formData.managementNeeds.indexOf(need);
    if (index > -1) {
      formData.managementNeeds = formData.managementNeeds.filter(
        (n) => n !== need
      );
    } else {
      formData.managementNeeds = [...formData.managementNeeds, need];
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
    <div class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-8">
          <div class="flex justify-between items-start mb-8">
            <div>
              <h3 class="text-3xl font-bold text-slate-900 mb-2">
                Commercial Property Assessment
              </h3>
              <p class="text-slate-600">
                Let's discuss how we can optimize your commercial property
                performance
              </p>
            </div>
            <button
              onClick$={handleClose}
              class="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
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
            <div class="text-center py-16">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  class="w-10 h-10 text-purple-600"
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
              <h4 class="text-2xl font-bold text-slate-900 mb-3">
                Thank You for Your Interest!
              </h4>
              <p class="text-lg text-slate-600 mb-4">
                Our commercial property specialists will analyze your portfolio
                and contact you within 24 hours with a customized management
                proposal and market insights.
              </p>
              <p class="text-sm text-slate-500">
                You'll receive a detailed assessment of potential revenue
                optimization opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit$={handleSubmit} class="space-y-8">
              <div class="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-6">
                <h4 class="text-lg font-semibold text-slate-900 mb-4">
                  Company Information
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onInput$={(e) => {
                        formData.companyName = (
                          e.target as HTMLInputElement
                        ).value;
                        if (errors.companyName) delete errors.companyName;
                      }}
                      class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.companyName
                          ? 'border-red-300'
                          : 'border-slate-300'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.companyName && (
                      <p class="text-red-600 text-sm mt-1">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Industry/Business Type
                    </label>
                    <select
                      value={formData.title}
                      onChange$={(e) => {
                        formData.title = (e.target as HTMLSelectElement).value;
                      }}
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Industry</option>
                      <option value="real-estate-investment">
                        Real Estate Investment
                      </option>
                      <option value="property-development">
                        Property Development
                      </option>
                      <option value="corporate-real-estate">
                        Corporate Real Estate
                      </option>
                      <option value="family-office">Family Office</option>
                      <option value="pension-fund">Pension Fund</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onInput$={(e) => {
                        formData.contactName = (
                          e.target as HTMLInputElement
                        ).value;
                        if (errors.contactName) delete errors.contactName;
                      }}
                      class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.contactName
                          ? 'border-red-300'
                          : 'border-slate-300'
                      }`}
                      placeholder="Primary contact name"
                    />
                    {errors.contactName && (
                      <p class="text-red-600 text-sm mt-1">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Position/Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onInput$={(e) => {
                        formData.title = (e.target as HTMLInputElement).value;
                      }}
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., Managing Director, Property Manager"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                      class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.email ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="business.email@company.com"
                    />
                    {errors.email && (
                      <p class="text-red-600 text-sm mt-1">{errors.email}</p>
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
                      class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.phone ? 'border-red-300' : 'border-slate-300'
                      }`}
                      placeholder="+254700000000"
                    />
                    {errors.phone && (
                      <p class="text-red-600 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl p-6">
                <h4 class="text-lg font-semibold text-slate-900 mb-4">
                  Property Portfolio Information
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      class={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        errors.propertyType
                          ? 'border-red-300'
                          : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select Property Type</option>
                      <option value="office-building">Office Building</option>
                      <option value="retail-center">Retail Center</option>
                      <option value="warehouse">Warehouse/Industrial</option>
                      <option value="mixed-use">Mixed-Use Development</option>
                      <option value="portfolio">
                        Multi-Property Portfolio
                      </option>
                    </select>
                    {errors.propertyType && (
                      <p class="text-red-600 text-sm mt-1">
                        {errors.propertyType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Total Property Size
                    </label>
                    <select
                      value={formData.propertySize}
                      onChange$={(e) => {
                        formData.propertySize = (
                          e.target as HTMLSelectElement
                        ).value;
                      }}
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Size Range</option>
                      <option value="under-5k">Under 5,000 sqft</option>
                      <option value="5k-15k">5,000 - 15,000 sqft</option>
                      <option value="15k-50k">15,000 - 50,000 sqft</option>
                      <option value="50k-100k">50,000 - 100,000 sqft</option>
                      <option value="over-100k">Over 100,000 sqft</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Current Occupancy
                    </label>
                    <select
                      value={formData.currentOccupancy}
                      onChange$={(e) => {
                        formData.currentOccupancy = (
                          e.target as HTMLSelectElement
                        ).value;
                      }}
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Occupancy</option>
                      <option value="under-50">Under 50%</option>
                      <option value="50-75">50% - 75%</option>
                      <option value="75-90">75% - 90%</option>
                      <option value="90-100">90% - 100%</option>
                      <option value="fully-leased">Fully Leased</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., CBD, Uganda Road, Industrial Area"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">
                      Annual Gross Revenue Range
                    </label>
                    <select
                      value={formData.annualRevenue}
                      onChange$={(e) => {
                        formData.annualRevenue = (
                          e.target as HTMLSelectElement
                        ).value;
                      }}
                      class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Revenue Range</option>
                      <option value="under-1m">Under KES 1M</option>
                      <option value="1m-5m">KES 1M - 5M</option>
                      <option value="5m-15m">KES 5M - 15M</option>
                      <option value="15m-50m">KES 15M - 50M</option>
                      <option value="over-50m">Over KES 50M</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-3">
                  Management Services Needed (Select all that apply)
                </label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Tenant Leasing',
                    'Lease Administration',
                    'Facility Management',
                    'Financial Reporting',
                    'Tenant Improvements',
                    'Asset Optimization',
                  ].map((need) => (
                    <label
                      key={need}
                      class="flex items-center p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.managementNeeds.includes(need)}
                        onChange$={() => toggleManagementNeed(need)}
                        class="rounded border-slate-300 text-purple-600 focus:ring-purple-500 mr-3"
                      />
                      <span class="text-sm text-slate-700">{need}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Timeline for Implementation
                  </label>
                  <select
                    value={formData.timeline}
                    onChange$={(e) => {
                      formData.timeline = (e.target as HTMLSelectElement).value;
                    }}
                    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">
                      Immediate (Within 30 days)
                    </option>
                    <option value="quarter">This Quarter</option>
                    <option value="6-months">Within 6 Months</option>
                    <option value="planning">Planning Stage</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">
                    Management Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange$={(e) => {
                      formData.budget = (e.target as HTMLSelectElement).value;
                    }}
                    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-50k">Under KES 50K/month</option>
                    <option value="50k-150k">KES 50K - 150K/month</option>
                    <option value="150k-300k">KES 150K - 300K/month</option>
                    <option value="over-300k">Over KES 300K/month</option>
                  </select>
                </div>
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
                  rows={5}
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your current challenges, goals, or specific requirements for commercial property management..."
                />
              </div>

              <div class="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick$={handleClose}
                  class="flex-1 px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="flex-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting.value ? (
                    <>
                      <div class="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Analyzing Portfolio...
                    </>
                  ) : (
                    'Get Commercial Property Assessment'
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

// Main Component
export default component$(() => {
  const isModalOpen = useSignal(false);
  const activeTab = useSignal('leasing');

  const openModal = $(() => {
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
  });

  return (
    <div class="min-h-screen bg-white">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div class="inline-flex items-center bg-purple-600/20 text-purple-200 px-6 py-3 rounded-full text-sm font-medium mb-8">
                <svg
                  class="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Institutional-Grade Commercial Management
              </div>

              <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                  Commercial
                </span>
                <br />
                Property Management
                <br />
                <span class="text-4xl lg:text-5xl text-slate-300">
                  Excellence
                </span>
              </h1>

              <p class="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed">
                Maximize asset value and optimize returns with our comprehensive
                commercial property management solutions for office buildings,
                retail centers, and industrial facilities.
              </p>

              <div class="flex flex-col sm:flex-row gap-6 mb-16">
                <button
                  onClick$={() => openModal()}
                  class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Portfolio Assessment
                </button>
                <button class="px-8 py-4 border-2 border-purple-400/30 text-purple-200 hover:bg-purple-400/10 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300">
                  View Case Studies
                </button>
              </div>

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div class="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div class="text-3xl font-bold text-purple-400 mb-1">2M+</div>
                  <div class="text-sm text-slate-300">Sqft Managed</div>
                </div>
                <div class="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div class="text-3xl font-bold text-pink-400 mb-1">94%</div>
                  <div class="text-sm text-slate-300">Avg Occupancy</div>
                </div>
                <div class="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div class="text-3xl font-bold text-blue-400 mb-1">28%</div>
                  <div class="text-sm text-slate-300">NOI Increase</div>
                </div>
                <div class="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <div class="text-3xl font-bold text-green-400 mb-1">150+</div>
                  <div class="text-sm text-slate-300">Clients Served</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl"></div>
              <div class="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div class="flex items-center justify-between mb-8">
                  <h3 class="text-2xl font-bold">Asset Performance</h3>
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div class="space-y-6">
                  <div class="p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl border border-white/20">
                    <div class="flex justify-between items-center mb-2">
                      <div class="text-sm text-purple-200">Gross Revenue</div>
                      <div class="text-green-400 text-sm font-medium">+24%</div>
                    </div>
                    <div class="text-3xl font-bold mb-2">KES 8.2M</div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>

                  <div class="p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl border border-white/20">
                    <div class="flex justify-between items-center mb-2">
                      <div class="text-sm text-purple-200">Occupancy Rate</div>
                      <div class="text-blue-400 text-sm font-medium">+12%</div>
                    </div>
                    <div class="text-3xl font-bold mb-2">96.5%</div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>

                  <div class="p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl border border-white/20">
                    <div class="flex justify-between items-center mb-2">
                      <div class="text-sm text-purple-200">Asset Value</div>
                      <div class="text-purple-400 text-sm font-medium">
                        +18%
                      </div>
                    </div>
                    <div class="text-3xl font-bold mb-2">KES 125M</div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Commercial Services
            </h2>
            <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From strategic tenant leasing to advanced financial analytics, our
              institutional-grade services are designed to maximize NOI and
              enhance asset value across all commercial property types.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <div
                key={service.id}
                class="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

                <div class="relative">
                  <div class="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div class="mb-4">
                    <span class="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full mb-3">
                      {service.category.toUpperCase()}
                    </span>
                    <h3 class="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <p class="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div class="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} class="flex items-start">
                        <div class="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3"></div>
                        <span class="text-sm text-slate-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div class="mt-6 pt-6 border-t border-slate-100">
                    <div class="flex flex-wrap gap-2">
                      {service.propertyTypes.map((type) => (
                        <span
                          key={type}
                          class="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                        >
                          {type.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-bold text-slate-900 mb-6">
              Commercial Management Packages
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">
              Scalable solutions designed for different asset classes and
              portfolio sizes. All packages include comprehensive reporting and
              dedicated account management.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {commercialPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                class={`relative rounded-3xl p-8 border-2 transition-all duration-500 ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700 text-white border-purple-500 transform scale-105 shadow-2xl shadow-purple-500/25'
                    : 'bg-white border-slate-200 hover:border-purple-200 hover:shadow-xl'
                } ${index === 0 ? 'lg:-rotate-2' : index === 2 ? 'lg:rotate-2' : ''}`}
              >
                {pkg.popular && (
                  <div class="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span class="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                      Most Popular Choice
                    </span>
                  </div>
                )}

                <div class="mb-8">
                  <h3
                    class={`text-3xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}
                  >
                    {pkg.name}
                  </h3>
                  <div class="flex items-baseline mb-2">
                    <span
                      class={`text-6xl font-bold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}
                    >
                      {pkg.basePrice}%
                    </span>
                    <span
                      class={`ml-3 text-lg ${pkg.popular ? 'text-purple-100' : 'text-slate-600'}`}
                    >
                      of gross revenue
                    </span>
                  </div>
                  <p
                    class={`text-sm ${pkg.popular ? 'text-purple-100' : 'text-slate-500'}`}
                  >
                    Minimum {formatPrice(pkg.minFee)}/month
                  </p>
                  <p
                    class={`mt-4 text-lg ${pkg.popular ? 'text-purple-100' : 'text-slate-600'}`}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div class="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <div key={feature} class="flex items-start">
                      <svg
                        class={`w-6 h-6 mt-0.5 mr-4 flex-shrink-0 ${
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

                <div class="mb-8">
                  <div
                    class={`text-sm font-medium mb-3 ${pkg.popular ? 'text-purple-100' : 'text-slate-600'}`}
                  >
                    Best For:
                  </div>
                  <div class="flex flex-wrap gap-2">
                    {pkg.bestFor.map((type) => (
                      <span
                        key={type}
                        class={`px-3 py-1 text-xs font-medium rounded-full ${
                          pkg.popular
                            ? 'bg-white/20 text-white'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick$={() => openModal()}
                  class={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    pkg.popular
                      ? 'bg-white text-purple-700 hover:bg-slate-50 transform hover:-translate-y-1'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
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
      <section class="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-bold text-slate-900 mb-6">
              Client Success Stories
            </h2>
            <p class="text-xl text-slate-600">
              Real results from commercial property owners who trust us with
              their valuable assets.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {commercialTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                class={`bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  index === 1 ? 'transform lg:scale-105' : ''
                }`}
              >
                <div class="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      class="w-5 h-5 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <blockquote class="text-slate-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.comment}"
                </blockquote>

                <div class="border-t border-slate-100 pt-6">
                  <div class="flex items-start">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.contactName}
                      class="w-14 h-14 rounded-full mr-4 border-2 border-slate-100"
                    />
                    <div class="flex-1">
                      <div class="font-bold text-slate-900 text-lg">
                        {testimonial.contactName}
                      </div>
                      <div class="text-purple-600 font-medium">
                        {testimonial.position}
                      </div>
                      <div class="text-sm text-slate-600">
                        {testimonial.companyName}
                      </div>
                      <div class="text-xs text-slate-500 mt-1">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  <div class="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <div class="text-sm font-semibold text-purple-700 mb-1">
                      Results Achieved:
                    </div>
                    <div class="text-sm text-slate-700">
                      {testimonial.results}
                    </div>
                    <div class="text-xs text-purple-600 mt-2 font-medium">
                      {testimonial.propertyType}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-slate-600">
              Common questions about our commercial property management services
              and processes.
            </p>
          </div>

          <div class="mb-12">
            <div class="flex flex-wrap justify-center gap-3">
              {[
                'leasing',
                'financial',
                'maintenance',
                'strategic',
                'legal',
              ].map((category) => (
                <button
                  key={category}
                  onClick$={() => (activeTab.value = category)}
                  class={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab.value === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div class="space-y-6">
            {commercialFAQs
              .filter((faq) => faq.category === activeTab.value)
              .map((faq, index) => (
                <div
                  key={faq.id}
                  class="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 class="text-xl font-bold text-slate-900 mb-4">
                    {faq.question}
                  </h3>
                  <p class="text-slate-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-full h-full">
            <div class="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div class="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-5xl lg:text-6xl font-bold mb-8">
            Ready to Optimize Your
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Commercial Assets?
            </span>
          </h2>
          <p class="text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join successful commercial property owners who have increased their
            NOI by an average of 28% while reducing operational complexity
            through our institutional-grade management platform.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick$={() => openModal()}
              class="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2 transition-all duration-300"
            >
              Get Free Portfolio Assessment
            </button>
            <button class="px-12 py-5 border-2 border-purple-400/30 text-purple-200 hover:bg-purple-400/10 font-bold text-xl rounded-2xl backdrop-blur-sm transition-all duration-300">
              Schedule Strategy Call
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
            <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-3xl font-bold text-purple-400 mb-2">Free</div>
              <div class="text-purple-200">Portfolio Analysis</div>
            </div>
            <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div class="text-purple-200">Emergency Response</div>
            </div>
            <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-3xl font-bold text-blue-400 mb-2">28%</div>
              <div class="text-purple-200">Average NOI Increase</div>
            </div>
            <div class="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div class="text-3xl font-bold text-green-400 mb-2">No</div>
              <div class="text-purple-200">Setup Fees</div>
            </div>
          </div>
        </div>
      </section>

      <CommercialInquiryModal isOpen={isModalOpen.value} onClose={closeModal} />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    'Commercial Property Management Services in Eldoret | Office Buildings, Retail Centers & Warehouses | EldoretCommercial',
  meta: [
    {
      name: 'description',
      content:
        'Professional commercial property management in Eldoret for office buildings, retail spaces, and warehouses. Maximize NOI with our comprehensive tenant leasing, facility management, financial reporting, and asset optimization services. Trusted by 150+ commercial property owners.',
    },
    {
      name: 'keywords',
      content:
        'commercial property management Eldoret, office building management, retail property management, warehouse management, commercial real estate Eldoret, tenant leasing services, facility management, CAM administration, commercial property Kenya, NOI optimization',
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
        'Professional Commercial Property Management in Eldoret - Office Buildings, Retail & Warehouses',
    },
    {
      property: 'og:description',
      content:
        'Institutional-grade commercial property management services for office buildings, retail centers, and warehouses in Eldoret. Advanced tenant leasing, facility management, and asset optimization to maximize your commercial real estate returns.',
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
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop',
    },
    {
      property: 'og:image:alt',
      content:
        'Modern commercial office buildings and retail centers managed by professional property management company in Eldoret',
    },
    {
      property: 'og:site_name',
      content: 'EldoretCommercial - Commercial Property Management',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Commercial Property Management Services in Eldoret',
    },
    {
      name: 'twitter:description',
      content:
        'Professional management for office buildings, retail centers & warehouses. Maximize NOI with expert tenant leasing, facility management & financial reporting services.',
    },
    {
      name: 'twitter:image',
      content:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop',
    },
    {
      name: 'theme-color',
      content: '#7c3aed',
    },
    // Local Business Schema
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
    // Business Information
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
      href: 'https://eldoretcommercial.co.ke/commercial-property-management',
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
