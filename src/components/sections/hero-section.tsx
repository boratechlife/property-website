import { component$ } from '@builder.io/qwik';

export const HeroSection = component$(() => {
  return (
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
      {/* Advanced Background Effects */}
      <div class="absolute inset-0">
        {/* Primary gradient overlay */}
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/15"></div>

        {/* Animated mesh gradient */}
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Subtle dot pattern */}
        <div
          class="absolute inset-0 opacity-30"
          style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 40px 40px;"
        ></div>

        {/* Floating orbs */}
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 2s;"
        ></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div class="text-center mb-16 lg:mb-24">
          {/* Badge */}
          <div class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-200 text-sm font-medium mb-8 hover:bg-white/15 transition-all duration-300">
            <div class="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            Licensed Property Management • Eldoret, Kenya
          </div>

          {/* Main Headline */}
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
            Transform Your <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-pulse">
              Property Investment
            </span>
            <br class="hidden sm:block" />
            Into Wealth
          </h1>

          {/* Subtitle */}
          <p class="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Professional property management solutions that maximize returns,
            minimize hassles, and deliver exceptional tenant experiences across
            Eldoret and beyond.
          </p>

          {/* Primary CTAs */}
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500"
            >
              Get Free Property Assessment
              <svg
                class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
            <a
              href="#services"
              class="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6.5-3.5A2.5 2.5 0 019 4h6a2.5 2.5 0 012.5 2.5v.5M9.5 20a2.5 2.5 0 01-2.5-2.5v-1"
                ></path>
              </svg>
              View Our Services
            </a>
          </div>

          {/* Trust Indicators */}
          <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate-400">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg
                  class="w-4 h-4 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="font-medium">500+ Properties</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="font-medium">98% Satisfaction</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg
                  class="w-4 h-4 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span class="font-medium">Licensed & Insured</span>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Premium Apartments */}
          <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-[4/5] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Apartment"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div class="w-14 h-14 bg-blue-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 001.414 1.414L2 12.414V17a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h3a1 1 0 001-1v-4.586l.293.293a1 1 0 001.414-1.414l-9-9z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Modern Apartments
                </h3>
                <p class="text-slate-300 text-sm">
                  Premium urban living spaces with top-tier amenities
                </p>
              </div>
            </div>
          </div>

          {/* Luxury Interiors */}
          <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-[4/5] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Interior"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div class="w-14 h-14 bg-amber-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  Luxury Finishes
                </h3>
                <p class="text-slate-300 text-sm">
                  Premium materials and designer touches throughout
                </p>
              </div>
            </div>
          </div>

          {/* Expert Team */}
          <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-[4/5] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert Team"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div class="w-14 h-14 bg-emerald-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Expert Team
                </h3>
                <p class="text-slate-300 text-sm">
                  Professional property management specialists
                </p>
              </div>
            </div>
          </div>

          {/* Smart Technology */}
          <div class="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-[4/5] relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Smart Technology"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div class="w-14 h-14 bg-purple-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  Smart Technology
                </h3>
                <p class="text-slate-300 text-sm">
                  Advanced systems for optimal property management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div class="mt-16 pt-16 border-t border-white/10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div class="group">
              <div class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div class="text-slate-400 font-medium">Properties Managed</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div class="text-slate-400 font-medium">Client Satisfaction</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div class="text-slate-400 font-medium">Support Available</div>
            </div>
            <div class="group">
              <div class="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div class="text-slate-400 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
});
