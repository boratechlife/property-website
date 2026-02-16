import { component$ } from '@builder.io/qwik';

export const StatsSection = component$(() => {
  // Define the main brand color for re-use
  const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div
              // CHANGE 1: Stat number color to brand color
              class={`text-4xl font-bold mb-2 text-[${BRAND_COLOR}]`}
            >
              98%
            </div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div
              // CHANGE 2: Stat number color to brand color
              class={`text-4xl font-bold mb-2 text-[${BRAND_COLOR}]`}
            >
              200+
            </div>
            <div class="text-gray-600">Properties Managed</div>
          </div>
          <div>
            <div
              // CHANGE 3: Stat number color to brand color
              class={`text-4xl font-bold mb-2 text-[${BRAND_COLOR}]`}
            >
              500+
            </div>
            <div class="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div
              // CHANGE 4: Stat number color to brand color
              class={`text-4xl font-bold mb-2 text-[${BRAND_COLOR}]`}
            >
              90%
            </div>
            <div class="text-gray-600">Tenant Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
});
