import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

// Define the main brand color for re-use
const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

const testimonials = [
  {
    quote:
      'NexaRealty has been managing my rental properties for over 3 years now. Their monthly reports are incredibly detailed, and I love how responsive they are to both tenant and owner needs.',
    name: 'Sarah Johnson',
    role: 'Property Owner, 4 Units',
    avatar:
      'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'The peace of mind NexaRealty provides is invaluable. I travel frequently for work, and knowing my properties are in professional hands allows me to focus on my career.',
    name: 'Michael Chen',
    role: 'Property Owner, 2 Units',
    avatar:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      "Their tenant screening process is thorough, and the quality of tenants they find is outstanding. We've had minimal turnover and consistent rental income.",
    name: 'Rebecca Martinez',
    role: 'Property Owner, 6 Units',
    avatar:
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
  {
    quote:
      'Working with NexaRealty has completely changed my approach to property investment. They handle all the complexities, leaving me to enjoy hassle-free income.',
    name: 'David Lee',
    role: 'Property Owner, 3 Units',
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
    rating: 5,
  },
];

export default component$(() => {
  const currentSlide = useSignal(0);
  const isAutoPlaying = useSignal(true);
  const touchStartX = useSignal(0);
  const touchEndX = useSignal(0);

  const nextSlide = $(() => {
    currentSlide.value = (currentSlide.value + 1) % testimonials.length;
  });

  const prevSlide = $(() => {
    currentSlide.value =
      currentSlide.value === 0
        ? testimonials.length - 1
        : currentSlide.value - 1;
  });

  const goToSlide = $((index: number) => {
    currentSlide.value = index;
  });

  const handleTouchStart = $((e: TouchEvent) => {
    touchStartX.value = e.touches[0].clientX;
  });

  const handleTouchEnd = $((e: TouchEvent) => {
    touchEndX.value = e.changedTouches[0].clientX;
    const swipeThreshold = 75;
    const diff = touchStartX.value - touchEndX.value;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  const pauseAutoPlay = $(() => {
    isAutoPlaying.value = false;
  });

  const resumeAutoPlay = $(() => {
    isAutoPlaying.value = true;
  });

  // Auto-play functionality
  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      if (isAutoPlaying.value) {
        currentSlide.value = (currentSlide.value + 1) % testimonials.length;
      }
    }, 5000);

    cleanup(() => clearInterval(interval));
  });

  return (
    <section
      id="testimonials"
      class="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div class="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Property Owners Say
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Trusted by property owners who value professional management and
            peace of mind.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          class="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl"
          onMouseEnter$={pauseAutoPlay}
          onMouseLeave$={resumeAutoPlay}
          onTouchStart$={handleTouchStart}
          onTouchEnd$={handleTouchEnd}
        >
          {/* Slides */}
          <div
            class="flex transition-transform duration-700 ease-out"
            style={`transform: translateX(-${currentSlide.value * 100}%)`}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} class="w-full flex-shrink-0 p-12 md:p-16">
                <div class="text-center max-w-3xl mx-auto">
                  {/* Quote */}
                  <div class="mb-8">
                    <svg
                      // CHANGE 1: Quote icon color to brand-aligned orange
                      class={`w-10 h-10 mx-auto mb-6 text-orange-500 dark:text-orange-400 opacity-50`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                    <blockquote class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Rating (Amber is a good complementary color for stars) */}
                  <div class="flex justify-center text-amber-400 mb-6 gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <svg
                        key={i}
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                      </svg>
                    ))}
                  </div>

                  {/* Author */}
                  <div class="flex items-center justify-center">
                    <img
                      // CHANGE 2: Avatar ring color to brand-aligned orange
                      class={`w-14 h-14 rounded-full object-cover mr-4 ring-4 ring-orange-100 dark:ring-red-900`}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                    />
                    <div class="text-left">
                      <div class="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick$={prevSlide}
            // CHANGE 3: Arrow focus ring, hover text, and hover ring to brand orange
            class={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50`}
            aria-label="Previous testimonial"
          >
            <svg
              // CHANGE 4: Arrow hover color to brand orange
              class={`w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick$={nextSlide}
            // CHANGE 5: Arrow focus ring, hover text, and hover ring to brand orange
            class={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50`}
            aria-label="Next testimonial"
          >
            <svg
              // CHANGE 6: Arrow hover color to brand orange
              class={`w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors`}
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
          </button>
        </div>

        {/* Dots Navigation */}
        <div class="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick$={() => goToSlide(index)}
              // CHANGE 7: Active dot color and focus ring to brand color
              class={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 ${
                index === currentSlide.value
                  ? `bg-[${BRAND_COLOR}] dark:bg-orange-400 scale-125`
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div class="mt-4 max-w-xs mx-auto">
          <div class="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              // CHANGE 8: Progress bar gradient to brand orange/red
              class={`h-full bg-gradient-to-r from-[${BRAND_COLOR}] to-red-600 transition-all duration-300 ease-out`}
              style={`width: ${((currentSlide.value + 1) / testimonials.length) * 100}%`}
            />
          </div>
          <div class="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            {currentSlide.value + 1} of {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
});
