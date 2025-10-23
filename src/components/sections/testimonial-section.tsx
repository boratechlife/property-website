import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

export const TestimonialSection = component$(() => {
  const currentIndex = useSignal(0);
  const isVisible = useSignal(false);
  const BRAND_COLOR = '#F04A00'; // Bright Orange / Red-Orange

  const testimonials = [
    {
      id: 1,
      name: 'John Kiprotich',
      location: 'Property Owner, Eldoret',
      initials: 'JK',
      text: 'Nexa Realty transformed my rental income and gave me back time. Their professional approach to property management is exactly what I needed as a busy landlord.',
      rating: 5,
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    },
    {
      id: 2,
      name: 'Sarah Wanjiku',
      location: 'Investor, Nairobi',
      initials: 'SW',
      text: 'Outstanding service and incredible attention to detail. My properties are now fully occupied and generating 40% more revenue than before.',
      rating: 5,
      gradient: 'from-purple-600 via-purple-700 to-pink-700',
    },
    {
      id: 3,
      name: 'David Mwangi',
      location: 'Developer, Mombasa',
      initials: 'DM',
      text: "The team's expertise in market analysis helped me make informed investment decisions. Best property management company I've worked with.",
      rating: 5,
      gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
    },
  ];

  useVisibleTask$(() => {
    isVisible.value = true;
    const interval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % testimonials.length;
    }, 6000);

    return () => clearInterval(interval);
  });

  const nextTestimonial = $(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  });

  const prevTestimonial = $(() => {
    currentIndex.value =
      currentIndex.value === 0
        ? testimonials.length - 1
        : currentIndex.value - 1;
  });

  const goToTestimonial = $((index: number) => {
    currentIndex.value = index;
  });

  const currentTestimonial = testimonials[currentIndex.value];

  return (
    <section class="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style="animation-delay: 2s;"
        ></div>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          class={`text-center mb-16 transition-all duration-1000 ${isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div
            // CHANGE 7: Header badge gradient, border, and inner color to brand orange/red
            class={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-red-200/50 rounded-full px-6 py-2 mb-6`}
          >
            <div
              class={`w-2 h-2 bg-gradient-to-r from-[${BRAND_COLOR}] to-red-600 rounded-full animate-pulse`}
            ></div>
            <span class={`text-sm font-medium text-red-700`}>
              Client Testimonials
            </span>
          </div>

          <h2 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 bg-clip-text text-transparent mb-6 leading-tight">
            Real Stories from
            <br />
            <span
              // CHANGE 8: Title emphasis gradient from blue/indigo to brand orange/red
              class={`bg-gradient-to-r from-[${BRAND_COLOR}] to-red-600 bg-clip-text text-transparent`}
            >
              Satisfied Clients
            </span>
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how we've transformed property investments and delivered
            exceptional results
          </p>
        </div>

        {/* Testimonial Card */}
        <div class="relative max-w-4xl mx-auto">
          <div
            class={`bg-gradient-to-br ${currentTestimonial.gradient} rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-blue-900/20 transition-all duration-700 transform ${isVisible.value ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          >
            {/* Glassmorphism overlay */}
            <div class="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

            {/* Decorative elements */}
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

            <div class="relative z-10">
              {/* Quote icon */}
              <div class="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <svg
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" />
                </svg>
              </div>

              <div class="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                {/* Avatar */}
                <div class="relative group">
                  <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <span class="text-white text-2xl font-bold tracking-wide">
                      {currentTestimonial.initials}
                    </span>
                  </div>
                  <div class="absolute -inset-2 bg-white/20 rounded-3xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div class="flex-1 text-left">
                  {/* Stars */}
                  <div class="flex gap-1 mb-4">
                    {Array.from({ length: currentTestimonial.rating }).map(
                      (_, i) => (
                        <svg
                          key={i}
                          class="w-5 h-5 text-yellow-300 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      )
                    )}
                  </div>

                  {/* Testimonial text */}
                  <p class="text-xl md:text-2xl text-white/95 mb-6 leading-relaxed font-light">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author info */}
                  <div class="border-t border-white/20 pt-4">
                    <p class="font-bold text-white text-lg">
                      {currentTestimonial.name}
                    </p>
                    <p class="text-white/80 text-base">
                      {currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick$={prevTestimonial}
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
          >
            <svg
              class="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick$={nextTestimonial}
            class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
          >
            <svg
              class="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div class="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick$={() => goToTestimonial(index)}
              class={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex.value
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Stats section */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '50M+', label: 'Properties Managed' },
          ].map((stat, index) => (
            <div
              key={index}
              class={`text-center transition-all duration-1000 delay-${index * 200} ${isVisible.value ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div class="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
