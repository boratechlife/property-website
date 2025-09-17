import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const isMobileMenuOpen = useSignal(false);
  const isScrolled = useSignal(false);

  useVisibleTask$(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10;
    };

    const closeMobileMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        isMobileMenuOpen.value = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", closeMobileMenuOnResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", closeMobileMenuOnResize);
    };
  });

  const toggleMobileMenu = $(() => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  });

  const closeMobileMenu = $(() => {
    isMobileMenuOpen.value = false;
  });

  return (
    <>
      <nav
        id="navbar"
        class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled.value
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-4">
            {/* Logo */}
            <div class="flex items-center space-x-2 z-10">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                NexaRealty
              </span>
            </div>

            {/* Desktop Navigation */}
            <div class="hidden md:flex items-center space-x-8">
              <a
                href="/about"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/services"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/why-choose-us"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Why Choose Us
              </a>
              <a
                href="/contact"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="/listing"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Houses
              </a>
              <a
                href="/plot-listing"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Plots
              </a>
              <a
                href="/blog"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="#contact"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick$={toggleMobileMenu}
              class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 z-10 relative"
              aria-label="Toggle mobile menu"
            >
              {/* Hamburger Icon */}
              <div class="w-6 h-6 relative">
                <span
                  class={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen.value ? "rotate-45 top-2.5" : "top-1"
                  }`}
                />
                <span
                  class={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out top-2.5 ${
                    isMobileMenuOpen.value ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  class={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen.value ? "-rotate-45 top-2.5" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen.value && (
        <div class="fixed inset-0 z-40 md:hidden" onClick$={closeMobileMenu}>
          <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        class={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen.value ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div class="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <span class="text-lg font-bold text-gray-900 dark:text-white">
                NexaRealty
              </span>
            </div>
            <button
              onClick$={closeMobileMenu}
              class="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div class="flex-1 px-6 py-8 space-y-6">
            <a
              href="/about"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              About
            </a>
            <a
              href="/services"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Services
            </a>
            <a
              href="/why-choose-us"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Why Choose Us
            </a>
            <a
              href="/contact"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Contact
            </a>
            <a
              href="/listing"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Houses
            </a>

            <a
              href="/plot-listing"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Plots
            </a>

            <a
              href="/blog"
              onClick$={closeMobileMenu}
              class="block text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
            >
              Blog
            </a>
          </div>

          {/* Mobile Menu Footer */}
          <div class="p-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#contact"
              onClick$={closeMobileMenu}
              class="block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
});
