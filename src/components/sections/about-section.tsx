import { component$ } from '@builder.io/qwik';

export const AboutSection = component$(() => {
  return (
    <section class="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 overflow-hidden relative">
      {/* Background decoration */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 xl:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Content Block */}
          <div class="xl:col-span-3">
            {/* Badge */}
            <div class="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-100">
              <div class="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Licensed Estate Agency • Cap 533
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Your trusted{' '}
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                property management
              </span>{' '}
              experts
            </h2>

            <p class="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium">
              Nexa Realty is a certified estate agency in Eldoret, Kenya. We
              specialize in comprehensive property management solutions designed
              to help landlords and property owners maximize their returns while
              eliminating the daily hassles of property management.
            </p>

            {/* Services Grid */}
            <div class="mb-12">
              <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <div class="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-4"></div>
                Our Comprehensive Services
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service 1 */}
                <div class="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-500 hover:-translate-y-1">
                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                        Rent Collection & Accounting
                      </h4>
                      <p class="text-slate-600 leading-relaxed">
                        Automated rent collection with real-time financial
                        reporting and complete transparency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div class="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-500 hover:-translate-y-1">
                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                        Maintenance & Repairs
                      </h4>
                      <p class="text-slate-600 leading-relaxed">
                        24/7 maintenance coordination with trusted local vendors
                        to keep properties pristine.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div class="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-500 hover:-translate-y-1">
                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                        Tenant Relations
                      </h4>
                      <p class="text-slate-600 leading-relaxed">
                        Professional tenant screening, onboarding, and
                        relationship management for lasting partnerships.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div class="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/20 transition-all duration-500 hover:-translate-y-1">
                  <div class="flex items-start">
                    <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-7 w-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-bold text-lg text-slate-900 mb-2 group-hover:text-orange-700 transition-colors">
                        Performance Analytics
                      </h4>
                      <p class="text-slate-600 leading-relaxed">
                        Detailed insights and reporting to maximize your
                        property investment returns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                class="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-500 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-800"
              >
                Get Your Free Property Assessment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#portfolio"
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold border-2 border-slate-200 hover:border-blue-200 hover:text-blue-700 transition-all duration-300 hover:shadow-lg"
              >
                View Our Portfolio
              </a>
            </div>
          </div>

          {/* Visual Block */}
          <div class="xl:col-span-2">
            <div class="relative">
              {/* Main Card */}
              <div class="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-900/10 border border-white/20">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/50 to-slate-50/80 rounded-3xl"></div>

                {/* Floating elements */}
                <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-10 transform rotate-12"></div>
                <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-5"></div>

                <div class="relative z-10 text-center">
                  {/* Logo/Brand */}
                  <div class="w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-blue-600/30 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                    <div class="text-center">
                      <span class="text-white text-3xl md:text-4xl font-black tracking-wider">
                        NR
                      </span>
                      <div class="w-8 h-0.5 bg-white/60 mx-auto mt-1"></div>
                    </div>
                  </div>

                  <h3 class="text-slate-900 font-bold text-xl md:text-2xl mb-3">
                    Professional Excellence
                  </h3>
                  <p class="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto">
                    Delivering exceptional property management services across
                    Eldoret and beyond
                  </p>

                  {/* Stats */}
                  <div class="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-200/50">
                    <div class="text-center">
                      <div class="text-2xl font-black text-blue-600 mb-1">
                        500+
                      </div>
                      <div class="text-sm text-slate-600 font-medium">
                        Properties Managed
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-black text-emerald-600 mb-1">
                        98%
                      </div>
                      <div class="text-sm text-slate-600 font-medium">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
