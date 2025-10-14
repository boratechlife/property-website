import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

// Note: In a real Qwik project, you'd install these via npm:
// npm install gsap lottie-web
// For this example, we'll load from CDN

declare global {
  interface Window {
    gsap: any;
    lottie: any;
  }
}

export default component$(() => {
  const heroRef = useSignal<HTMLElement>();
  const lottieContainer = useSignal<HTMLElement>();
  const buildingContainer = useSignal<HTMLElement>();
  const isAnimating = useSignal(false);

  const initializeAnimations = $(() => {
    if (!window.gsap || !heroRef.value) return;

    const { gsap } = window;
    const tl = gsap.timeline();

    // Create a master timeline for the hero section
    tl.set('.hero-element', { opacity: 0, y: 50 })
      .to('.hero-subtitle-line', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(
        '.hero-main-title',
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.1,
        },
        '-=0.4'
      )
      .to(
        '.hero-gradient-title',
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .to(
        '.hero-description',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.6'
      )
      .to(
        '.hero-cta',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      )
      .to(
        '.trust-indicator-item',
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
        },
        '-=0.2'
      );

    // Animate building elements
    if (buildingContainer.value) {
      gsap.set('.building-element', { opacity: 0, scale: 0.8 });
      gsap.to('.building-element', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        stagger: 0.2,
        delay: 1,
      });

      // Continuous building animations
      gsap.to('.building-1', {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to('.building-2', {
        y: -15,
        duration: 2.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.3,
      });

      gsap.to('.building-3', {
        y: -8,
        duration: 1.8,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });
    }

    // Load and play Lottie animation
    if (window.lottie && lottieContainer.value) {
      // This would be your actual Lottie JSON file
      // For demo purposes, we'll create a placeholder
      const lottieAnimation = window.lottie.loadAnimation({
        container: lottieContainer.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path: '/animations/property-management.json' // Your Lottie file
        animationData: createPropertyAnimationData(), // Demo data
      });

      // Control Lottie playback
      lottieAnimation.setSpeed(0.8);
    }

    isAnimating.value = true;
  });

  // Load external libraries and initialize animations
  useVisibleTask$(async () => {
    // Load GSAP and Lottie from CDN
    if (!window.gsap) {
      const gsapScript = document.createElement('script');
      gsapScript.src =
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(gsapScript);

      await new Promise((resolve) => {
        gsapScript.onload = resolve;
      });
    }

    if (!window.lottie) {
      const lottieScript = document.createElement('script');
      lottieScript.src =
        'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
      document.head.appendChild(lottieScript);

      await new Promise((resolve) => {
        lottieScript.onload = resolve;
      });
    }

    initializeAnimations();
  });

  // Demo Lottie animation data (in real app, load from JSON file)
  /*
   * Corrected createPropertyAnimationData function
   */
  const createPropertyAnimationData = $(() =>
    $({
      v: '5.7.4',
      fr: 30,
      ip: 0,
      op: 90,
      w: 400,
      h: 400,
      nm: 'Property Animation',
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: 'Building',
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [200, 200, 0] },
            a: { a: 0, k: [50, 50, 0] },
            s: { a: 0, k: [100, 100, 100] },
          },
          ao: 0,
          shapes: [
            {
              ty: 'rc',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 120] },
              r: { a: 0, k: 5 },
            },
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0,
        },
      ],
    })
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      class="relative bg-[url('/images/herosection.webp')] bg-center pt-16 lg:pt-32 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Animated Background Elements */}
      <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* GSAP Animated Buildings */}
        <div
          ref={buildingContainer}
          class="absolute inset-0 pointer-events-none"
        >
          <div class="building-element building-1 absolute bottom-0 left-[10%] w-16 h-32 bg-gradient-to-t from-blue-600 to-blue-400 opacity-20 rounded-t-lg">
            <div class="absolute top-2 left-2 right-2 grid grid-cols-2 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  class="w-2 h-2 bg-yellow-300 rounded-sm opacity-70 animate-pulse"
                  style={`animation-delay: ${i * 0.5}s`}
                ></div>
              ))}
            </div>
          </div>

          <div class="building-element building-2 absolute bottom-0 left-[25%] w-20 h-40 bg-gradient-to-t from-indigo-600 to-indigo-400 opacity-25 rounded-t-lg">
            <div class="absolute top-2 left-2 right-2 grid grid-cols-3 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  class="w-1.5 h-1.5 bg-yellow-300 rounded-sm opacity-60 animate-pulse"
                  style={`animation-delay: ${i * 0.3}s`}
                ></div>
              ))}
            </div>
          </div>

          <div class="building-element building-3 absolute bottom-0 right-[15%] w-14 h-36 bg-gradient-to-t from-purple-600 to-purple-400 opacity-20 rounded-t-lg">
            <div class="absolute top-2 left-1 right-1 grid grid-cols-2 gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  class="w-1.5 h-1.5 bg-yellow-300 rounded-sm opacity-70 animate-pulse"
                  style={`animation-delay: ${i * 0.4}s`}
                ></div>
              ))}
            </div>
          </div>

          <div class="building-element building-1 absolute bottom-0 right-[35%] w-12 h-28 bg-gradient-to-t from-teal-600 to-teal-400 opacity-15 rounded-t-lg">
            <div class="absolute top-2 left-1 right-1 grid grid-cols-2 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  class="w-1.5 h-1.5 bg-yellow-300 rounded-sm opacity-60 animate-pulse"
                  style={`animation-delay: ${i * 0.6}s`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div class="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              class="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div class="text-center lg:text-left">
            {/* Animated Subtitle */}
            <div class="hero-element hero-subtitle-line mb-4">
              <span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide uppercase">
                Premium Property Management
              </span>
            </div>

            {/* Main Title with GSAP Animation */}
            <h1 id="hero-title" class="mb-6">
              <span class="hero-element hero-main-title block text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Professional Property
              </span>
              <span class="hero-element hero-main-title block text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Management
              </span>
              <span class="hero-element hero-gradient-title block text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                You Can Rely On
              </span>
            </h1>

            {/* Description */}
            <p class="hero-element hero-description text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Maximize your rental income with our comprehensive property
              management services. Licensed, transparent, and trusted by
              property owners across the region.
            </p>

            {/* CTA Buttons */}
            <div class="hero-element hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                class="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Get Started Today
                <svg
                  class="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                class="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                View Our Services
              </a>
            </div>

            {/* Trust Indicators with Stagger Animation */}
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="hero-element trust-indicator-item text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  500+
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Properties Managed
                </div>
              </div>
              <div class="hero-element trust-indicator-item text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-green-600">98%</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div class="hero-element trust-indicator-item text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-purple-600">24/7</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Support
                </div>
              </div>
              <div class="hero-element trust-indicator-item text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <div class="text-2xl font-bold text-orange-600">Licensed</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Cap 533
                </div>
              </div>
            </div>
          </div>

          {/* Animation Column */}
          <div class="relative">
            {/* Lottie Animation Container */}
            <div
              ref={lottieContainer}
              class="w-full max-w-lg mx-auto relative z-10"
              style="height: 400px;"
            ></div>

            {/* Fallback/Additional Visual Elements */}
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="relative w-80 h-80">
                {/* Central Building Icon */}
                <div class="absolute inset-0 flex items-center justify-center">
                  <svg
                    class="w-32 h-32 text-blue-600 opacity-20 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3 3v2h4v14H5V7h4V5l3-3zm-1 5H9v2h2V7zm4 0h-2v2h2V7zm-4 4H9v2h2v-2zm4 0h-2v2h2v-2zm-4 4H9v2h2v-2zm4 0h-2v2h2v-2z" />
                  </svg>
                </div>

                {/* Orbiting Elements */}
                <div class="absolute inset-0 animate-spin-slow">
                  <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-8 h-8 bg-green-500 rounded-full opacity-60 flex items-center justify-center">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div class="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-60 flex items-center justify-center">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    </svg>
                  </div>

                  <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-8 h-8 bg-purple-500 rounded-full opacity-60 flex items-center justify-center">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>

                  <div class="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full opacity-60 flex items-center justify-center">
                    <svg
                      class="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.7;
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .hero-element {
          opacity: 0;
          transform: translateY(50px);
        }

        /* Ensure smooth transitions for dark mode */
        * {
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
      `}</style>
    </section>
  );
});
