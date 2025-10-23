import { component$ } from '@builder.io/qwik';

export default component$(() => {
  // Define the main brand color for re-use
  const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

  return (
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* */}
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About NexaRealty
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With over 15 years of experience in property management,
              NexaRealty has built a reputation for excellence, transparency,
              and unmatched customer service. We understand that your property
              is more than just an investment – it's your future.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team of licensed professionals combines local market expertise
              with cutting-edge technology to deliver comprehensive property
              management services that maximize your returns while minimizing
              your stress.
            </p>

            {/* */}
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <svg
                  // CHANGE: Checkmark color from green-500 to orange-600
                  class="w-6 h-6 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">
                  Licensed under Cap 533 regulations
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <svg
                  // CHANGE: Checkmark color from green-500 to orange-600
                  class="w-6 h-6 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">
                  Over 500 properties successfully managed
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <svg
                  // CHANGE: Checkmark color from green-500 to orange-600
                  class="w-6 h-6 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">
                  98% client retention rate
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <svg
                  // CHANGE: Checkmark color from green-500 to orange-600
                  class="w-6 h-6 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-gray-700 dark:text-gray-300">
                  Award-winning customer service
                </span>
              </div>
            </div>

            <div class="mt-8">
              <a
                href="#contact"
                // CHANGE: Button background and hover color to brand color
                class={`bg-[${BRAND_COLOR}] text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium inline-flex items-center`}
              >
                Schedule Free Consultation
                <svg
                  class="ml-2 w-5 h-5"
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
            </div>
          </div>

          {/* */}
          <div class="relative">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="NexaRealty Office"
              class="rounded-xl shadow-lg object-cover w-full h-96"
              loading="lazy"
            />
            {/* CHANGE: Image overlay color to brand color with opacity */}
            <div
              class={`absolute inset-0 bg-[${BRAND_COLOR}] bg-opacity-10 rounded-xl`}
            ></div>

            {/* */}
            <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-xs">
              <div class="flex items-center space-x-3">
                <div
                  // CHANGE: Floating card icon background to orange-100/900
                  class="w-12 h-12 bg-orange-100 dark:bg-red-900 rounded-full flex items-center justify-center"
                >
                  <svg
                    // CHANGE: Floating card icon color to brand color
                    class={`w-6 h-6 text-[${BRAND_COLOR}] dark:text-orange-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900 dark:text-white">
                    Average ROI
                  </div>
                  <div
                    // CHANGE: ROI percentage text color to brand color
                    class={`text-2xl font-bold text-[${BRAND_COLOR}] dark:text-orange-400`}
                  >
                    12.5%
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
