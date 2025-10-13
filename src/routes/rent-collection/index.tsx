import {
  $,
  component$,
  useSignal,
  useStore,
  useTask$,
  type QRL,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Rent Collection interfaces
interface PaymentMethod {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly features: readonly string[];
  readonly processingTime: string;
}

interface CollectionStep {
  readonly id: string;
  readonly step: number;
  readonly title: string;
  readonly description: string;
  readonly timeframe: string;
  readonly icon: string;
}

interface RentCollectionInquiry {
  name: string;
  email: string;
  phone: string;
  propertyCount: number;
  currentChallenges: string[];
  collectionRate: string;
  message: string;
}

interface InquiryErrors {
  name?: string;
  email?: string;
  phone?: string;
  general?: string;
}

interface FAQ {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly category: "process" | "payments" | "reporting" | "legal";
}

// Payment methods data
const paymentMethods: readonly PaymentMethod[] = [
  {
    id: "mobile-money",
    name: "Mobile Money",
    description:
      "M-Pesa, Airtel Money, and other mobile payment platforms for convenient rent payments",
    icon: "📱",
    features: [
      "Instant payment confirmation",
      "24/7 availability",
      "SMS notifications",
      "No bank charges",
      "Works on any mobile phone",
    ],
    processingTime: "Instant",
  },
  {
    id: "bank-transfers",
    name: "Bank Transfers",
    description:
      "Direct bank-to-bank transfers and online banking payments for secure transactions",
    icon: "🏦",
    features: [
      "Secure encrypted transfers",
      "Online banking integration",
      "Automated reconciliation",
      "Transaction receipts",
      "Bulk payment options",
    ],
    processingTime: "Same day",
  },
  {
    id: "online-payments",
    name: "Online Payments",
    description:
      "Credit/debit card payments and digital wallets through our secure payment portal",
    icon: "💳",
    features: [
      "Secure SSL encryption",
      "Multiple card types accepted",
      "Automatic payment scheduling",
      "Digital receipts",
      "Payment history tracking",
    ],
    processingTime: "Instant",
  },
  {
    id: "cash-payments",
    name: "Cash Payments",
    description:
      "In-person cash collection with proper documentation and secure handling",
    icon: "💰",
    features: [
      "Official receipt issued",
      "Secure collection points",
      "Same-day banking",
      "Photo documentation",
      "Audit trail maintenance",
    ],
    processingTime: "Same day",
  },
] as const;

// Collection process steps
const collectionSteps: readonly CollectionStep[] = [
  {
    id: "setup",
    step: 1,
    title: "System Setup & Tenant Registration",
    description:
      "We register all tenants in our automated system with their preferred payment methods and contact information. Each tenant receives login credentials for our online portal.",
    timeframe: "Day 1",
    icon: "⚙️",
  },
  {
    id: "reminders",
    step: 2,
    title: "Automated Rent Reminders",
    description:
      "Our system sends automated reminders 7 days, 3 days, and 1 day before rent is due via SMS, email, and in-app notifications to ensure tenants never forget.",
    timeframe: "Weekly",
    icon: "🔔",
  },
  {
    id: "collection",
    step: 3,
    title: "Multi-Channel Rent Collection",
    description:
      "On the due date, tenants can pay through their preferred method - mobile money, bank transfer, online payment, or cash at our collection points.",
    timeframe: "Due Date",
    icon: "💸",
  },
  {
    id: "tracking",
    step: 4,
    title: "Real-Time Payment Tracking",
    description:
      "All payments are automatically recorded and verified in real-time. Both property owners and tenants receive instant confirmation of successful payments.",
    timeframe: "Immediate",
    icon: "📊",
  },
  {
    id: "followup",
    step: 5,
    title: "Late Payment Follow-Up",
    description:
      "For overdue payments, our system initiates a structured follow-up process including phone calls, site visits, and formal notices as required by Kenyan law.",
    timeframe: "Day 2+",
    icon: "📞",
  },
  {
    id: "reporting",
    step: 6,
    title: "Financial Reporting & Transfer",
    description:
      "Collected rents are transferred to property owners through their preferred payment method, along with detailed financial reports and transaction summaries.",
    timeframe: "Monthly",
    icon: "📈",
  },
] as const;

// FAQ data
const faqs: readonly FAQ[] = [
  {
    id: "1",
    question: "How does your automated rent collection system work?",
    answer:
      "Our system automatically sends payment reminders to tenants, accepts payments through multiple channels, verifies and records all transactions, and provides real-time reporting to property owners. The entire process is automated from reminder to payment confirmation.",
    category: "process",
  },
  {
    id: "2",
    question: "What payment methods do you accept for rent collection?",
    answer:
      "We accept mobile money (M-Pesa, Airtel Money), bank transfers, online card payments, and cash payments. This variety ensures every tenant can pay using their preferred method, improving collection rates.",
    category: "payments",
  },
  {
    id: "3",
    question: "How quickly do property owners receive their rent money?",
    answer:
      "We transfer collected rents to property owners through their preferred payment method - typically within 1-2 business days of collection. Emergency transfers can be arranged if needed.",
    category: "process",
  },
  {
    id: "4",
    question: "What happens when tenants don't pay rent on time?",
    answer:
      "We follow a structured legal process: immediate follow-up calls, formal written notices, site visits, and if necessary, legal proceedings in accordance with Kenyan rental laws. We handle all dispute resolution professionally.",
    category: "legal",
  },
  {
    id: "5",
    question: "Do you provide financial reports to property owners?",
    answer:
      "Yes, we provide detailed monthly financial reports showing all rent collections, outstanding amounts, tenant payment history, and transaction summaries. Reports are available through our online portal 24/7.",
    category: "reporting",
  },
  {
    id: "6",
    question: "Can you handle security deposits and other fees besides rent?",
    answer:
      "Absolutely. We manage all tenant payments including security deposits, utility bills, maintenance fees, and any other charges related to the property. All funds are tracked separately and reported clearly.",
    category: "process",
  },
  {
    id: "7",
    question: "What is your typical rent collection rate?",
    answer:
      "Our professional rent collection system achieves collection rates of 90-100%, significantly higher than self-managed properties. This is due to our automated reminders, multiple payment options, and professional follow-up processes.",
    category: "process",
  },
  {
    id: "8",
    question: "How do you ensure payment security and prevent fraud?",
    answer:
      "We use secure payment gateways, verify all transactions, maintain detailed audit trails, and follow banking security protocols. All cash payments are documented with receipts and banked the same day.",
    category: "payments",
  },
] as const;

// Utility functions
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+254|0)[7-9]\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateInquiry = (formData: RentCollectionInquiry): InquiryErrors => {
  const errors: InquiryErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
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

// Inquiry Modal Component
const RentCollectionInquiry = component$<{
  isOpen: boolean;
  onClose: QRL<() => void>;
}>((props) => {
  const formData = useStore<RentCollectionInquiry>({
    name: "",
    email: "",
    phone: "",
    propertyCount: 1,
    currentChallenges: [],
    collectionRate: "",
    message: "",
  });

  const errors = useStore<InquiryErrors>({});
  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);

  const resetForm = $(() => {
    Object.assign(formData, {
      name: "",
      email: "",
      phone: "",
      propertyCount: 1,
      currentChallenges: [],
      collectionRate: "",
      message: "",
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
      errors.general = "Failed to send inquiry. Please try again.";
    } finally {
      isSubmitting.value = false;
    }
  });

  const handleClose = $(() => {
    props.onClose();
    resetForm();
  });

  const toggleChallenge = $((challenge: string) => {
    const index = formData.currentChallenges.indexOf(challenge);
    if (index > -1) {
      formData.currentChallenges = formData.currentChallenges.filter(
        (c) => c !== challenge
      );
    } else {
      formData.currentChallenges = [...formData.currentChallenges, challenge];
    }
  });

  useTask$(({ track }) => {
    track(() => props.isOpen);
    if (props.isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
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
                Improve Your Rent Collection
              </h3>
              <p class="text-slate-600 mt-1">
                Let's discuss how we can help you collect rent more efficiently
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
                Our rent collection specialist will contact you within 24 hours
                to discuss how we can improve your collection rates and reduce
                your workload.
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
                      errors.name ? "border-red-300" : "border-slate-300"
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
                      errors.phone ? "border-red-300" : "border-slate-300"
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
                    errors.email ? "border-red-300" : "border-slate-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p class="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Current Collection Rate
                  </label>
                  <select
                    value={formData.collectionRate}
                    onChange$={(e) => {
                      formData.collectionRate = (
                        e.target as HTMLSelectElement
                      ).value;
                    }}
                    class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Rate</option>
                    <option value="under-70">Under 70%</option>
                    <option value="70-80">70% - 80%</option>
                    <option value="80-90">80% - 90%</option>
                    <option value="90-95">90% - 95%</option>
                    <option value="over-95">Over 95%</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-3">
                  Current Rent Collection Challenges
                </label>
                <div class="grid grid-cols-2 gap-3">
                  {[
                    "Late Payments",
                    "Payment Tracking",
                    "Manual Follow-ups",
                    "Multiple Payment Methods",
                    "Financial Reports",
                    "Legal Issues",
                  ].map((challenge) => (
                    <label key={challenge} class="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.currentChallenges.includes(challenge)}
                        onChange$={() => toggleChallenge(challenge)}
                        class="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span class="ml-2 text-sm text-slate-700">
                        {challenge}
                      </span>
                    </label>
                  ))}
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
                  rows={4}
                  class="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your current rent collection challenges or specific questions..."
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
                  class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
                >
                  {isSubmitting.value
                    ? "Sending..."
                    : "Get Rent Collection Analysis"}
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
  const activeTab = useSignal("process");

  const openModal = $(() => {
    isModalOpen.value = true;
  });

  const closeModal = $(() => {
    isModalOpen.value = false;
  });

  return (
    <div class="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section class="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div class="inline-flex items-center bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              90-100% Collection Rate Guaranteed
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Rent Collection Services
            </h1>

            <p class="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Automated, efficient, and legally compliant rent collection that
              maximizes your income while minimizing your stress. We handle
              everything from payment processing to late payment follow-ups.
            </p>

            <button
              onClick$={() => openModal()}
              class="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
            >
              Improve My Rent Collection
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-200 mb-2">90-100%</div>
              <div class="text-blue-100">Collection Rate</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-200 mb-2">4+</div>
              <div class="text-blue-100">Payment Methods</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-200 mb-2">24/7</div>
              <div class="text-blue-100">Automated System</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div class="text-3xl font-bold text-blue-200 mb-2">100%</div>
              <div class="text-blue-100">Legal Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section class="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How Our Rent Collection Process Works
            </h2>
            <p class="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive 6-step automated process ensures consistent,
              timely rent collection while maintaining positive tenant
              relationships and full legal compliance.
            </p>
          </div>

          <div class="relative">
            {/* Timeline Line */}
            <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 hidden lg:block"></div>

            <div class="space-y-16">
              {collectionSteps.map((step, index) => (
                <div key={step.id} class="relative">
                  {/* Timeline Dot */}
                  <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full border-4 border-white shadow-xl z-10 hidden lg:flex items-center justify-center">
                    <span class="text-2xl">{step.icon}</span>
                  </div>

                  <div
                    class={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "" : "lg:grid-flow-dense"}`}
                  >
                    {/* Content Card */}
                    <div
                      class={`${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"} relative`}
                    >
                      <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                        <div class="flex items-center mb-6">
                          <div class="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl text-2xl mr-4 lg:hidden">
                            {step.icon}
                          </div>
                          <div>
                            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-2">
                              {step.timeframe}
                            </div>
                            <h3 class="text-2xl font-bold text-slate-900">
                              Step {step.step}: {step.title}
                            </h3>
                          </div>
                        </div>
                        <p class="text-lg text-slate-600 leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Step-specific highlights */}
                        <div class="flex flex-wrap gap-2">
                          {step.id === "setup" && (
                            <>
                              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                Portal Access
                              </span>
                              <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                Multi-Channel
                              </span>
                            </>
                          )}
                          {step.id === "reminders" && (
                            <>
                              <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                                SMS & Email
                              </span>
                              <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                Automated
                              </span>
                            </>
                          )}
                          {step.id === "collection" && (
                            <>
                              <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                M-Pesa Ready
                              </span>
                              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                Multiple Options
                              </span>
                            </>
                          )}
                          {step.id === "tracking" && (
                            <>
                              <span class="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                                Real-Time
                              </span>
                              <span class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                                Instant Alerts
                              </span>
                            </>
                          )}
                          {step.id === "followup" && (
                            <>
                              <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Legal Process
                              </span>
                              <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                                Professional
                              </span>
                            </>
                          )}
                          {step.id === "reporting" && (
                            <>
                              <span class="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                                Detailed Reports
                              </span>
                              <span class="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                                Quick Transfer
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div
                      class={`${index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:col-start-1"} relative`}
                    >
                      <div class="relative group">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <div class="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 border border-slate-200 shadow-lg group-hover:shadow-xl transition-all duration-500">
                          <div class="text-center">
                            <div class="text-8xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500">
                              {step.icon}
                            </div>
                            <div class="space-y-4">
                              <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {step.step}
                              </div>
                              <div class="text-lg font-semibold text-slate-700">
                                {step.timeframe}
                              </div>

                              {/* Progress indicators */}
                              <div class="flex justify-center space-x-2 mt-6">
                                {Array.from({ length: 6 }, (_, i) => (
                                  <div
                                    key={i}
                                    class={`w-3 h-3 rounded-full transition-all duration-300 ${
                                      i < step.step
                                        ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-110"
                                        : i === step.step - 1
                                          ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125 ring-4 ring-blue-200"
                                          : "bg-slate-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div class="text-center mt-20">
            <div class="bg-white rounded-3xl p-12 shadow-xl border border-slate-200 max-w-4xl mx-auto">
              <h3 class="text-3xl font-bold text-slate-900 mb-4">
                Ready to Automate Your Rent Collection?
              </h3>
              <p class="text-xl text-slate-600 mb-8">
                Join property owners who have eliminated rent collection stress
                with our proven 6-step system.
              </p>
              <button
                onClick$={() => openModal()}
                class="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Free Analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Multiple Payment Methods for Maximum Convenience
            </h2>
            <p class="text-xl text-slate-600 max-w-3xl mx-auto">
              We accept all major payment methods to ensure your tenants can pay
              rent easily, improving collection rates and reducing late
              payments.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div class="text-4xl mb-4 text-center">{method.icon}</div>
                <h3 class="text-xl font-bold text-slate-900 mb-3 text-center">
                  {method.name}
                </h3>
                <p class="text-slate-600 mb-4 text-center">
                  {method.description}
                </p>

                <div class="space-y-2 mb-4">
                  {method.features.map((feature) => (
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

                <div class="text-center">
                  <span class="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    Processing: {method.processingTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Professional Rent Collection?
            </h2>
            <p class="text-xl text-slate-600">
              Compare the benefits of our professional service versus managing
              rent collection yourself.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12">
            <div class="bg-red-50 rounded-2xl p-8 border border-red-200">
              <h3 class="text-2xl font-bold text-red-800 mb-6 text-center">
                DIY Rent Collection Challenges
              </h3>
              <div class="space-y-4">
                {[
                  "Inconsistent collection rates (often 70-85%)",
                  "Time-consuming manual follow-ups",
                  "Limited payment options for tenants",
                  "Emotional stress from difficult conversations",
                  "Risk of legal non-compliance",
                  "Difficulty tracking payments and records",
                  "Personal safety concerns during collection",
                  "Inconsistent enforcement of late fees",
                ].map((challenge) => (
                  <div key={challenge} class="flex items-start">
                    <svg
                      class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"></path>
                    </svg>
                    <span class="text-red-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div class="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">
                Our Professional Solution
              </h3>
              <div class="space-y-4">
                {[
                  "Guaranteed 90-100% collection rates",
                  "Fully automated system with minimal owner involvement",
                  "Multiple convenient payment options",
                  "Professional, courteous tenant relations",
                  "Full legal compliance and proper documentation",
                  "Real-time payment tracking and reporting",
                  "Safe, secure collection processes",
                  "Consistent enforcement of lease terms",
                ].map((benefit) => (
                  <div key={benefit} class="flex items-start">
                    <svg
                      class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                    </svg>
                    <span class="text-green-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Details */}
      <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Rent Collection Features
            </h2>
            <p class="text-xl text-slate-600">
              Everything you need for efficient, professional rent collection in
              one complete service.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Reminders",
                description:
                  "SMS, email, and app notifications sent automatically 7, 3, and 1 day before rent is due",
                icon: "🔔",
                features: [
                  "Multi-channel notifications",
                  "Customizable timing",
                  "Tenant preferences respected",
                ],
              },
              {
                title: "Real-Time Tracking",
                description:
                  "Live payment status updates with instant confirmation for both owners and tenants",
                icon: "📊",
                features: [
                  "Live payment dashboard",
                  "Instant confirmations",
                  "Payment history",
                ],
              },
              {
                title: "Legal Compliance",
                description:
                  "All collection activities follow Kenyan rental laws with proper documentation",
                icon: "⚖️",
                features: [
                  "Legal notice procedures",
                  "Proper documentation",
                  "Court-ready records",
                ],
              },
              {
                title: "Financial Reporting",
                description:
                  "Detailed monthly reports showing collections, outstanding amounts, and trends",
                icon: "📈",
                features: [
                  "Monthly statements",
                  "Payment analytics",
                  "Trend reports",
                ],
              },
              {
                title: "Security Deposits",
                description:
                  "Professional management of security deposits and other tenant fees beyond rent",
                icon: "🔒",
                features: [
                  "Separate deposit tracking",
                  "Refund processing",
                  "Fee management",
                ],
              },
              {
                title: "Professional Follow-up",
                description:
                  "Structured approach to late payments with phone calls, visits, and formal notices",
                icon: "📞",
                features: [
                  "Escalation procedures",
                  "Professional communication",
                  "Dispute resolution",
                ],
              },
            ].map((feature) => (
              <div
                key={feature.title}
                class="bg-white rounded-xl p-6 shadow-lg"
              >
                <div class="text-4xl mb-4">{feature.icon}</div>
                <h3 class="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p class="text-slate-600 mb-4">{feature.description}</p>
                <div class="space-y-2">
                  {feature.features.map((item) => (
                    <div
                      key={item}
                      class="flex items-center text-sm text-slate-600"
                    >
                      <div class="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-xl text-slate-600">
              Common questions about our rent collection service and processes.
            </p>
          </div>

          <div class="mb-8">
            <div class="flex flex-wrap justify-center gap-2">
              {["process", "payments", "reporting", "legal"].map((category) => (
                <button
                  key={category}
                  onClick$={() => (activeTab.value = category)}
                  class={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                    activeTab.value === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div class="space-y-4">
            {faqs
              .filter((faq) => faq.category === activeTab.value)
              .map((faq) => (
                <div
                  key={faq.id}
                  class="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <h3 class="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p class="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Improve Your Rent Collection?
          </h2>
          <p class="text-xl text-blue-100 mb-8 leading-relaxed">
            Stop chasing tenants for rent payments. Our automated system handles
            everything while you focus on growing your property portfolio.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick$={() => openModal()}
              class="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Rent Collection Analysis
            </button>
            <button class="px-8 py-4 border-2 border-blue-300 text-blue-100 hover:bg-blue-500/20 font-semibold rounded-xl transition-all duration-200">
              View Our Other Services
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-2xl font-bold text-blue-200">Free</div>
              <div class="text-blue-100">Collection Analysis</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-200">No</div>
              <div class="text-blue-100">Setup Fees</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-200">Same Day</div>
              <div class="text-blue-100">Money Transfer</div>
            </div>
          </div>
        </div>
      </section>

      <RentCollectionInquiry isOpen={isModalOpen.value} onClose={closeModal} />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    "Professional Rent Collection Services in Eldoret | Automated Payment System | 90-100% Collection Rate",
  meta: [
    {
      name: "description",
      content:
        "Professional rent collection services in Eldoret with 90-100% collection rates. Automated payment system supporting mobile money, bank transfers, and online payments. Complete financial reporting and legal compliance for property owners.",
    },
    {
      name: "keywords",
      content:
        "rent collection services Eldoret, automated rent collection, mobile money rent payments, property management rent collection, tenant payment system, rent collection Kenya, M-Pesa rent payments, professional rent collection",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      property: "og:title",
      content:
        "Professional Rent Collection Services in Eldoret - 90-100% Collection Rate",
    },
    {
      property: "og:description",
      content:
        "Automated rent collection system with multiple payment methods including mobile money, bank transfers, and online payments. Professional follow-up and legal compliance guaranteed.",
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
      content: "#2563eb",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://eldoretmanage.co.ke/rent-collection-services",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
};
