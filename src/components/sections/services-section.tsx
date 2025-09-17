import { component$ } from '@builder.io/qwik';

export const ServicesSection = component$(() => {
  return (
    <section class="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
      <div class="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl transform -translate-x-36 -translate-y-36"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-green-100/30 to-orange-100/30 rounded-full blur-3xl transform translate-x-36 translate-y-36"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div class="text-center mb-24">
          <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Our Services
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Comprehensive Property
            <span class="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h2>
          <p class="text-gray-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            From tenant screening to financial reporting, we handle every aspect
            of your property investment so you can focus on what matters most to
            you.
          </p>
        </div>

        {/* Enhanced Hero Visual */}
        <div class="mb-24">
          <div class="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden h-96 lg:h-[32rem]">
            {/* Background Image with Overlay */}
            <div class="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Modern apartment building"
                class="w-full h-full object-cover opacity-30"
              />
              <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-blue-900/80"></div>
            </div>

            {/* Floating Analytics Dashboard */}
            <div class="absolute top-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 max-w-sm group hover:scale-105 transition-all duration-300">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <div>
                  <span class="font-bold text-gray-900 text-lg">
                    Live Dashboard
                  </span>
                  <p class="text-gray-500 text-sm">Real-time insights</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span class="text-gray-700 font-medium">
                      Monthly Revenue
                    </span>
                  </div>
                  <span class="font-bold text-green-600 text-lg">
                    KSh 1.24M
                  </span>
                </div>
                <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span class="text-gray-700 font-medium">
                      Occupancy Rate
                    </span>
                  </div>
                  <span class="font-bold text-blue-600 text-lg">96%</span>
                </div>
                <div class="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span class="text-gray-700 font-medium">
                      Active Requests
                    </span>
                  </div>
                  <span class="font-bold text-orange-600 text-lg">3</span>
                </div>
              </div>
            </div>

            {/* Central Feature Highlight */}
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center text-white max-w-2xl px-6">
                <div class="bg-white/10 backdrop-blur-md rounded-full p-8 mb-8 inline-block group-hover:scale-110 transition-all duration-300">
                  <svg
                    class="w-20 h-20 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 class="text-3xl lg:text-4xl font-bold mb-4">
                  360° Property Management
                </h3>
                <p class="text-lg text-gray-300 leading-relaxed">
                  Experience seamless property management with our integrated
                  platform that connects every aspect of your investment.
                </p>
              </div>
            </div>

            {/* Floating Process Indicators */}
            <div class="absolute bottom-8 left-8 flex space-x-4">
              <div class="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium">
                <span class="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Automated Systems
              </div>
              <div class="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium">
                <span class="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                24/7 Monitoring
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Service 1 - Rent Collection */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform group-hover:-translate-y-2 h-full">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/25">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <div class="w-10 h-10 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Financial planning"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-blue-600 transition-colors duration-300">
                Smart Rent Collection
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                Automated collection systems with multi-channel payment options,
                late fee management, and transparent financial reporting for
                maximum efficiency.
              </p>
              <div class="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                <span>Learn More</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Service 2 - Maintenance */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-green-50/50 hover:to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 transform group-hover:-translate-y-2 h-full">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-green-500/25">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div class="w-10 h-10 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Maintenance tools"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-green-600 transition-colors duration-300">
                Proactive Maintenance
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                24/7 emergency response with our network of verified local
                vendors, preventive maintenance scheduling, and quality
                assurance monitoring.
              </p>
              <div class="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors duration-300">
                <span>Learn More</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Service 3 - Tenant Relations */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 transform group-hover:-translate-y-2 h-full">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/25">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div class="w-10 h-10 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Tenant meeting"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-orange-600 transition-colors duration-300">
                Tenant Excellence
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                Comprehensive tenant screening, onboarding support, ongoing
                relationship management, and conflict resolution for lasting
                partnerships.
              </p>
              <div class="flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-700 transition-colors duration-300">
                <span>Learn More</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Service 4 - Analytics & Reporting */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform group-hover:-translate-y-2 h-full">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/25">
                  <svg
                    class="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div class="w-10 h-10 rounded-xl overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Financial reports"
                    class="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-purple-600 transition-colors duration-300">
                Smart Analytics
              </h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                Advanced performance analytics, market insights, investment
                optimization recommendations, and detailed monthly reporting
                dashboards.
              </p>
              <div class="flex items-center text-purple-600 text-sm font-medium group-hover:text-purple-700 transition-colors duration-300">
                <span>Learn More</span>
                <svg
                  class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Process Flow */}
        <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden mb-24">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-2xl"></div>

          <div class="relative text-center mb-12">
            <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
              How We Work
            </h3>
            <p class="text-gray-300 text-lg max-w-2xl mx-auto">
              Our streamlined process ensures your property is optimized from
              day one
            </p>
          </div>

          <div class="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <span class="text-white font-bold text-xl">1</span>
              </div>
              <h4 class="text-white font-semibold mb-2">Property Assessment</h4>
              <p class="text-gray-400 text-sm">
                Comprehensive evaluation and optimization strategy
              </p>
            </div>

            {/* Process Step 2 */}
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <span class="text-white font-bold text-xl">2</span>
              </div>
              <h4 class="text-white font-semibold mb-2">System Integration</h4>
              <p class="text-gray-400 text-sm">
                Seamless onboarding and technology setup
              </p>
            </div>

            {/* Process Step 3 */}
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                <span class="text-white font-bold text-xl">3</span>
              </div>
              <h4 class="text-white font-semibold mb-2">Active Management</h4>
              <p class="text-gray-400 text-sm">
                Daily operations and tenant relations
              </p>
            </div>

            {/* Process Step 4 */}
            <div class="text-center group">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <span class="text-white font-bold text-xl">4</span>
              </div>
              <h4 class="text-white font-semibold mb-2">Growth & Insights</h4>
              <p class="text-gray-400 text-sm">
                Continuous optimization and reporting
              </p>
            </div>

            {/* Connection Lines */}
            <div class="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-purple-500 opacity-30 hidden md:block"></div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div class="text-center">
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 lg:p-16 border border-blue-100">
            <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Property Investment?
            </h3>
            <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied property owners who trust us with their
              most valuable investments. Get a personalized consultation and
              discover your property's potential.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1">
                Get Free Consultation
              </button>
              <button class="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Download Service Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
