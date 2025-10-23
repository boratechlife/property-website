import { component$ } from '@builder.io/qwik';

export const CtaSection = component$(() => {
  // Define the main brand color for re-use
  // Bright Orange / Red-Orange

  return (
    <section class="py-24 bg-neutral-900">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="space-y-1 mb-12">
          <p class="text-neutral-400 text-sm tracking-wide uppercase">
            Ready to grow?
          </p>
          <h2 class="text-5xl font-light text-white leading-tight">
            Maximize your
            <span class="font-medium"> property returns</span>
          </h2>
        </div>

        <button
          // Retaining white button style for high contrast on black background
          class="group relative bg-white text-neutral-900 px-12 py-4 text-base font-medium transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span class="relative z-10">Get Started</span>
          {/* CHANGE 1: Button hover background gradient from blue/indigo to brand orange/red */}
          <div
            class={`absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          ></div>
        </button>
      </div>
    </section>
  );
});
