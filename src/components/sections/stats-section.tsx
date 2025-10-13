import { component$ } from '@builder.io/qwik';

export const StatsSection = component$(() => {
  return (
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-gray-900 mb-2">200+</div>
            <div class="text-gray-600">Properties Managed</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div class="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-gray-900 mb-2">90%</div>
            <div class="text-gray-600">Tenant Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
});
