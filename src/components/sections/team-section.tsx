import { component$ } from '@builder.io/qwik';

export const TeamSection = component$(() => {
  return (
    <section class="py-20 bg-gray-50" style="background-color: #f9fafb;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering exceptional
            results
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 - Primary Brand Color (Red/Orange) */}
          <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div class="p-8 text-center">
              <div class="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format"
                  alt="Michael Rodriguez"
                  class={`w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-red-200 transition-colors duration-300`}
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">
                Michael Rodriguez
              </h3>
              <p
                // CHANGE 1: Role text color to brand red-600
                class="text-red-600 font-medium mb-3"
              >
                Chief Executive Officer
              </p>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Strategic leader with 15+ years driving growth and innovation in
                property management.
              </p>
              <div class="flex justify-center space-x-4">
                <a
                  href="#"
                  // CHANGE 2: Social icon hover color to brand red-600
                  class="text-gray-400 hover:text-red-600 transition-colors duration-200"
                  aria-label="LinkedIn profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  // CHANGE 3: Social icon hover color to brand orange-500
                  class="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Twitter profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Secondary Brand Color (Green) */}
          <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div class="p-8 text-center">
              <div class="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&auto=format"
                  alt="Sarah Chen"
                  class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-green-200 transition-colors duration-300"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">
                Sarah Chen
              </h3>
              <p class="text-green-600 font-medium mb-3">
                Director of Operations
              </p>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Operations expert ensuring seamless processes and exceptional
                client experiences.
              </p>
              <div class="flex justify-center space-x-4">
                <a
                  href="#"
                  // CHANGE 4: Social icon hover color to brand red-600
                  class="text-gray-400 hover:text-red-600 transition-colors duration-200"
                  aria-label="LinkedIn profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  // CHANGE 5: Social icon hover color to brand orange-500
                  class="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Twitter profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Tertiary Brand Color (Purple) */}
          <div class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
            <div class="p-8 text-center">
              <div class="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
                  alt="David Thompson"
                  class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-100 group-hover:border-purple-200 transition-colors duration-300"
                />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-1">
                David Thompson
              </h3>
              <p class="text-purple-600 font-medium mb-3">
                Senior Property Advisor
              </p>
              <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                Market specialist providing strategic insights and personalized
                property solutions.
              </p>
              <div class="flex justify-center space-x-4">
                <a
                  href="#"
                  // CHANGE 6: Social icon hover color to brand red-600
                  class="text-gray-400 hover:text-red-600 transition-colors duration-200"
                  aria-label="LinkedIn profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  // CHANGE 7: Social icon hover color to brand orange-500
                  class="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Twitter profile"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
