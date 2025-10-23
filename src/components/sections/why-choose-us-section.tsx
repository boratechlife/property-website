import { component$ } from '@builder.io/qwik';

export const WhyChooseUsSection = component$(() => {
  // Define the main brand color for re-use
  const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

  return (
    <section class="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      {/* CHANGE 1: Radial gradient from blue to brand orange */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/30 via-transparent to-transparent"></div>
      {/* CHANGE 2: Top-right blur gradient from blue/purple to orange/red */}
      <div
        class={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-100/20 to-orange-100/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32`}
      ></div>
      {/* Bottom-left blur gradient (Green/Orange retained) */}
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100/20 to-orange-100/20 rounded-full blur-3xl transform -translate-x-32 translate-y-32"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div class="text-center mb-24">
          {/* CHANGE 3: Header badge background, border, and text color from blue to red/orange */}
          <div
            class={`inline-flex items-center px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-600 text-sm font-medium mb-6`}
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Why Choose Nexa Realty
          </div>
          <h2 class="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
            Experience the{' '}
            <span
              // CHANGE 4: Title text gradient from blue/purple to brand orange/red
              class={`bg-gradient-to-r from-[${BRAND_COLOR}] to-red-600 bg-clip-text text-transparent`}
            >
              Difference
            </span>
          </h2>
          <p class="text-gray-600 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Join Kenya's most innovative property management professionals and
            discover what makes us the preferred choice for discerning property
            owners.
          </p>
        </div>

        {/* Features Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {/* Feature 1 - Licensed & Trustworthy */}
          <div class="group relative">
            {/* CHANGE 5: Hover blur gradient from blue/purple to brand orange/red */}
            <div
              class={`absolute inset-0 bg-gradient-to-r from-[${BRAND_COLOR}]/10 to-red-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}
            ></div>
            {/* CHANGE 6: Card hover background/border/shadow from blue to brand orange/red */}
            <div
              class={`relative bg-white hover:bg-gradient-to-br hover:from-red-50/50 hover:to-white transition-all duration-500 p-8 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10 h-full transform group-hover:-translate-y-2`}
            >
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-8">
                  {/* CHANGE 7: Icon background gradient from blue to brand orange/red */}
                  <div
                    class={`w-16 h-16 bg-gradient-to-br from-[${BRAND_COLOR}] to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-red-500/25`}
                  >
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div class="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      class="w-3 h-3 text-white"
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
                </div>
                {/* CHANGE 8: Hover text color from blue to red-600 */}
                <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-red-600 transition-colors duration-300">
                  Licensed & Trustworthy
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Fully compliant under Cap 533, offering complete peace of mind
                  and legal certainty for your valuable investments.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Local, Yet Modern (Green/Orange accents remain for contrast) */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-green-50/50 hover:to-white transition-all duration-500 p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/10 h-full transform group-hover:-translate-y-2">
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-green-500/25">
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      class="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-green-600 transition-colors duration-300">
                  Local, Yet Modern
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Deep-rooted in Eldoret with unmatched market insight,
                  delivering world-class service standards and innovative
                  solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Responsive & Personal (Orange/Red theme) */}
          <div class="group relative">
            {/* CHANGE 9: Hover blur gradient from orange/red */}
            <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
            {/* CHANGE 10: Card hover background/border/shadow from orange/red */}
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-white transition-all duration-500 p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10 h-full transform group-hover:-translate-y-2">
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-8">
                  {/* Icon background gradient remains orange/red */}
                  <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-orange-500/25">
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  {/* CHANGE 11: Icon notification pulse from blue to red */}
                  <div class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <div class="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-orange-600 transition-colors duration-300">
                  Responsive & Personal
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  Lightning-fast response times with personalized attention to
                  every maintenance request, rent concern, and tenant inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 - Comprehensive & Efficient (Purple/Pink accents remain) */}
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
            <div class="relative bg-white hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-white transition-all duration-500 p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 h-full transform group-hover:-translate-y-2">
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-8">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/25">
                    <svg
                      class="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div class="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      class="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 class="font-bold text-gray-900 mb-4 text-xl group-hover:text-purple-600 transition-colors duration-300">
                  Comprehensive & Efficient
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  End-to-end property solutions covering rental management,
                  sales, and strategic value optimization—all under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden mb-24">
          {/* CHANGE 12: Background elements from blue/purple to orange/red */}
          <div
            class={`absolute inset-0 bg-gradient-to-r from-[${BRAND_COLOR}]/10 to-red-600/10`}
          ></div>
          <div
            class={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[${BRAND_COLOR}]/10 to-transparent rounded-full blur-2xl`}
          ></div>
          <div
            class={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full blur-2xl`}
          ></div>

          <div class="relative">
            <div class="text-center mb-12">
              <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Track Record of Excellence
              </h3>
              <p class="text-gray-300 text-lg">
                Numbers that speak to our commitment and expertise
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div class="group">
                <div
                  // CHANGE 13: Stat number gradient from blue/purple to orange/red
                  class={`text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  500+
                </div>
                <div class="text-white font-semibold text-lg mb-2">
                  Properties Managed
                </div>
                <div class="text-gray-400 text-sm">
                  Across prime locations in Kenya
                </div>
              </div>
              <div class="group">
                {/* Stat number gradient remains green/emerald */}
                <div class="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div class="text-white font-semibold text-lg mb-2">
                  Client Satisfaction
                </div>
                <div class="text-gray-400 text-sm">
                  Based on verified reviews
                </div>
              </div>
              <div class="group">
                {/* Stat number gradient remains orange/red */}
                <div class="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div class="text-white font-semibold text-lg mb-2">
                  Years Experience
                </div>
                <div class="text-gray-400 text-sm">
                  In Kenya's property market
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div class="text-center">
          {/* CHANGE 14: Trust indicator badge background, border, and text from blue/purple to red/orange */}
          <div
            class={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-full mb-8`}
          >
            <svg
              // CHANGE 15: Trust indicator icon color from blue to red
              class={`w-5 h-5 text-red-600 mr-3`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class={`text-red-800 font-medium`}>
              Trusted by leading property owners across Kenya
            </span>
          </div>

          <div class="flex items-center justify-center space-x-12 opacity-50 hover:opacity-70 transition-opacity duration-300">
            {/* CHANGE 16: Partner icon background and text from blue to red/orange */}
            <div class="flex items-center space-x-2">
              <div
                class={`w-10 h-10 bg-gradient-to-br from-red-100 to-orange-200 rounded-lg flex items-center justify-center`}
              >
                <svg
                  // CHANGE 17: Partner icon color from blue to red
                  class={`w-6 h-6 text-red-600`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-600 font-medium">Enterprise Partners</span>
            </div>
            {/* Certified Partners (Green remains) */}
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-600 font-medium">Certified Partners</span>
            </div>
            {/* Industry Leaders (Purple remains) */}
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-600 font-medium">Industry Leaders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
