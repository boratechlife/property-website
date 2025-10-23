import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

// Define the main brand color for re-use
const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

// Stat Card Component
export const StatCard = component$<{
  value: string;
  label: string;
  unit?: string;
}>((props) => {
  const count = useSignal(0);
  const target = parseInt(props.value) || 0;

  useVisibleTask$(() => {
    if (target > 0) {
      const duration = 2000; // 2 seconds
      const frameRate = 60;
      const totalFrames = (duration / 1000) * frameRate;
      const increment = target / totalFrames;

      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        count.value = Math.ceil(increment * frame);

        if (frame >= totalFrames) {
          clearInterval(counter);
          count.value = target;
        }
      }, 1000 / frameRate);

      return () => clearInterval(counter);
    }
  });

  return (
    <div class="text-center group cursor-pointer stat-card">
      <div class="relative p-6 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 hover-glow">
        <div
          // CHANGE: Stat number color to orange
          class="text-4xl sm:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300"
        >
          {target > 0 ? count.value : props.value}
          {props.unit || ''}
        </div>
        <div class="text-gray-700 dark:text-gray-200 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
          {props.label}
        </div>
        {/* CHANGE: Subtle Glow Effect gradient to orange/red */}
        <div class="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-amber-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      </div>
    </div>
  );
});

interface FeatureCardProps {
  icon: any;
  title: string;
  description: string;
  colorClass: string;
}

const FeatureCard = component$<FeatureCardProps>(
  ({ icon, title, description, colorClass }) => {
    const cardRef = useSignal<Element>();
    const isVisible = useSignal(false);

    useVisibleTask$(({ track }) => {
      track(() => cardRef.value);
      if (cardRef.value) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            isVisible.value = entry.isIntersecting;
          },
          { threshold: 0.2 }
        );
        observer.observe(cardRef.value);
        return () => observer.disconnect();
      }
    });

    return (
      <div
        ref={cardRef}
        class={`group cursor-pointer transform transition-all duration-700 ${
          isVisible.value
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        }`}
      >
        <div
          // CHANGE: Hover border color to orange
          class="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-red-700 h-full"
        >
          {/* Gradient overlay is handled by the passed colorClass */}
          <div
            class={`absolute inset-0 bg-gradient-to-br from-${colorClass.split('-')[1]} to-${colorClass.split('-')[3]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Icon container with SVG */}
          <div
            class={`relative w-20 h-20 ${colorClass} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
          >
            <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            {icon}

            {/* Floating particles effect */}
            <div class="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {/* CHANGE: Particle colors to orange/red/amber */}
              <div class="absolute top-0 left-0 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <div
                class="absolute top-2 right-0 w-1 h-1 bg-orange-400 rounded-full animate-ping"
                style={{ animationDelay: '200ms' }}
              ></div>
              <div
                class="absolute bottom-0 left-2 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"
                style={{ animationDelay: '400ms' }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div class="relative z-10 mt-4">
            <h3
              // CHANGE: Hover text color to orange
              class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300"
            >
              {title}
            </h3>
            <p class="text-gray-700 dark:text-gray-200 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Hover indicator */}
          <div
            // CHANGE: Hover indicator gradient to orange/red
            class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          ></div>
        </div>
      </div>
    );
  }
);

// Main Component
export default component$(() => {
  // SVG icons (no change needed to the SVG structure, just the surrounding classes)
  const ShieldIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoininejoin="round"
        stroke-Width={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const ChartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoininejoin="round"
        stroke-widthidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  const HeadsetIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 text-white"
    >
      <path
        stroke-linecapinecap="round"
        stroke-linecapinejoin="round"
        stroke-widthidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const MapMarkerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-10 h-10 text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0L4.343 12.657a8 8 0 1111.314 0z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const features = [
    {
      icon: <ShieldIcon />,
      title: 'Licensed under Cap 533',
      description:
        'Fully licensed and regulated property management services ensuring compliance and professionalism.',
      // CHANGE: Feature card 1 color to brand red/orange
      colorClass: `bg-gradient-to-br from-red-600 to-orange-700`,
    },
    {
      icon: <ChartIcon />,
      title: 'Transparent Monthly Reporting',
      description:
        'Detailed monthly reports with complete income and expense statements for full transparency.',
      // CHANGE: Feature card 2 color to brand red/orange
      colorClass: `bg-gradient-to-br from-red-600 to-orange-700`,
    },
    {
      icon: <HeadsetIcon />,
      title: '24/7 Emergency Response',
      description:
        'Round-the-clock emergency support to protect your property and ensure tenant satisfaction.',
      // CHANGE: Feature card 3 color to a high-contrast teal/cyan (remains)
      colorClass: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    },
    {
      icon: <MapMarkerIcon />,
      title: 'Local Market Expertise',
      description:
        "Deep understanding of local rental markets to maximize your property's income potential.",
      // CHANGE: Feature card 4 color to a different high-contrast purple/pink (remains)
      colorClass: 'bg-gradient-to-br from-purple-500 to-pink-700',
    },
  ];

  const stats = [
    { value: '500', label: 'Properties Managed', unit: '+' },
    { value: '98', label: 'Client Satisfaction', unit: '%' },
    { value: '15', label: 'Years Experience', unit: '+' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <>
      {/* Styles */}
      <style>{`
        /* CHANGE: Main gradient text color to brand red/orange */
        .gradient-text {
          background: linear-gradient(90deg, ${BRAND_COLOR}, #cc3c00); 
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating-bg {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          z-index: 0;
        }
        
        /* CHANGE: Hover glow effect shadow color to brand red/orange */
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 25px rgba(240, 74, 0, 0.3); /* Uses BRAND_COLOR hex */
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        
        .float-up-down {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .feature-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .stat-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-card:hover {
          transform: translateY(-8px);
        }
      `}</style>
      <section class="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Background Decorative Elements */}
        <div class="absolute inset-0 overflow-hidden">
          {/* CHANGE: Floating background colors to orange/red/amber */}
          <div class="floating-bg floating-bg-1 bg-orange-200/30 dark:bg-orange-800/20 top-10 left-10 w-64 h-64 pulse-animation"></div>
          <div
            class="floating-bg floating-bg-2 bg-red-200/30 dark:bg-red-800/20 bottom-10 right-10 w-72 h-72 pulse-animation"
            style="animation-delay: 2s"
          ></div>
          <div
            class="floating-bg floating-bg-3 bg-amber-200/30 dark:bg-amber-800/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 pulse-animation"
            style="animation-delay: 4s"
          ></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div class="text-center mb-20">
            <div class="inline-block mb-6">
              <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Why Property Owners Choose{' '}
                <span class="gradient-text">NexaRealty</span>
              </h2>
            </div>
            <p class="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We combine local expertise with modern technology to deliver
              <span
                // CHANGE: Highlight text color to orange
                class="font-semibold text-orange-600 dark:text-orange-400"
              >
                {' '}
                exceptional{' '}
              </span>
              property management services.
            </p>
          </div>
          {/* Features Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-24">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.colorClass}
              />
            ))}
          </div>
          {/* Stats Grid */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                unit={stat.unit}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
