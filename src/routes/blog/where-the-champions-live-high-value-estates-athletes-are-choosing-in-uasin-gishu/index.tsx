import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(`   @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .glass-effect {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .dark .glass-effect {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .hero-pattern {
        background-image: radial-gradient(
          circle at 50% 50%,
          rgba(59, 130, 246, 0.1) 0%,
          transparent 50%
        );
      }

      .testimonial-card {
        transition: all 0.3s ease;
      }

      .testimonial-card:hover {
        transform: scale(1.02);
      }

      .nav-blur {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.8);
      }

      .dark .nav-blur {
        background: rgba(17, 24, 39, 0.8);
      }

      /* Dark mode styles */
      .dark {
        color-scheme: dark;
      }`);
  return (
    <main class="pt-24 pb-16">
      <section
        id="hero"
        class="relative overflow-hidden pt-16 pb-24 md:pt-24 lg:pt-32"
      >
        <div class="hero-pattern absolute inset-0 -z-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            id="heroTitle"
            class="text-4xl md:text-6xl font-extrabold text-primary-600 dark:text-primary-400 leading-tight"
          >
            Where the Champions Live: High-Value Estates for Athletes
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A look into the exclusive communities and prime investment
            properties attracting Eldoret's elite running legends.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🏆</span> From the Track to the Property Ladder
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Eldoret is globally known as the "Home of Champions," a title earned
            through the tireless dedication of its world-class athletes. But
            beyond their triumphs on the track, many of these champions are
            making strategic, long-term investments in the very region that
            forged their success. They're not just buying homes; they're
            building legacies. This post explores the high-value real estate
            trends and prime locations that are becoming the new havens for
            Uasin Gishu's sporting elite.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Allure of Elgon View
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The Rise of Gated Communities
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Custom Builds: The Perfect Training Sanctuary
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Investment Beyond Residence
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The NexaRealty Advantage
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Allure of Elgon View
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1570129477041-3a0c02914561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBob3VzZSUyMGluJTIwYWZyaWNhfGVufDB8fHx8MTcwMTg4MTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A modern house with a large compound in Africa"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              When it comes to prime real estate in Eldoret, Elgon View is often
              the first name that comes to mind. Its spacious plots, tranquil
              environment, and proximity to key amenities make it a highly
              desirable location for athletes seeking privacy and a serene
              atmosphere to recover and train. This area has long been a
              favorite, and properties here hold their value exceptionally well,
              making them both a home and a robust financial asset.
            </p>
            <h3 class="text-2xl font-semibold">Key Features:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Spacious Plots:</strong> Ample room for personalized
                landscaping, gardens, or extensions.
              </li>
              <li>
                <strong>Exclusivity:</strong> Known for its quiet, high-profile
                residents.
              </li>
              <li>
                <strong>Investment Value:</strong> Consistent appreciation due
                to high demand.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Elgon View is more than just
              a location; it's a statement. We've seen significant interest from
              top athletes looking for properties that match their level of
              success and provide a secure, private retreat."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The Rise of Gated Communities
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While Elgon View is a classic, newer gated communities like those
              along the Eldoret-Iten Road are gaining traction. These estates
              offer a complete lifestyle package, combining modern housing with
              top-tier security and a strong sense of community. The controlled
              access provides an unparalleled level of privacy and peace of
              mind, essential for athletes who are often in the public eye.
              Amenities like well-maintained roads, common areas, and green
              spaces further enhance their appeal.
            </p>
            <h3 class="text-2xl font-semibold">What attracts them:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Unmatched Security:</strong> 24/7 manned gates, CCTV
                surveillance, and secure perimeters.
              </li>
              <li>
                <strong>Community Lifestyle:</strong> A chance to live among
                peers and other like-minded professionals.
              </li>
              <li>
                <strong>Convenience:</strong> Proximity to major training
                grounds and Eldoret town.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We are seeing a growing trend
              towards luxury gated communities. They offer a hands-off, secure
              living experience that is perfect for a professional athlete's
              busy and demanding schedule."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1582268427953-b097e8b6d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw0fHxsb3V4dXJ5JTIwYXBhcnRtZW50JTIwYnVpbGRpbmclMjBhZnJpY2F8ZW58MHx8fHwxNzAxODgyNTkyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A modern luxury apartment building in a secure compound"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="section-3"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          3. Custom Builds: The Perfect Training Sanctuary
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1560731454-9457f58f5068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNXx8bW9kZXJuJTIwaG9tZSUyMGludGVyaW9yfGVufDB8fHx8MTcwMTg4MjkyNXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A spacious, modern room with minimalist design"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              For many athletes, a standard home simply won't do. Their specific
              lifestyle, which revolves around training, recovery, and
              nutrition, demands a personalized space. We are seeing a trend
              towards custom-built homes that include state-of-the-art home
              gyms, physiotherapy rooms, and kitchens designed for
              high-performance diets. These custom projects allow them to create
              a perfect sanctuary that supports their career and well-being,
              turning a house into a finely-tuned training headquarters.
            </p>
            <h3 class="text-2xl font-semibold">Key Considerations:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Home Gym Integration:</strong> Spaces for treadmills,
                weights, and recovery equipment.
              </li>
              <li>
                <strong>Nutritional Kitchens:</strong> Large, modern kitchens
                designed for meal prep and healthy cooking.
              </li>
              <li>
                <strong>Discreet Layouts:</strong> Designs that prioritize
                privacy and minimize external disturbance.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our project management team
              specializes in helping clients bring their custom home visions to
              life, from sourcing the right plot to overseeing construction with
              the best local architects and builders."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Investment Beyond Residence
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The foresight of Eldoret's champions extends beyond their own
              homes. Many are savvy investors who are building real estate
              portfolios to secure their future. They are acquiring rental
              properties—both residential and commercial—in these high-value
              areas to generate consistent, passive income. This diversification
              strategy is crucial for a career with a limited lifespan, ensuring
              financial stability long after they retire from competition.
            </p>
            <h3 class="text-2xl font-semibold">The Strategy:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Rental Properties:</strong> Investing in apartments or
                townhouses for steady rental income.
              </li>
              <li>
                <strong>Commercial Spaces:</strong> Acquiring property for
                businesses in strategic locations.
              </li>
              <li>
                <strong>Land Banking:</strong> Buying and holding plots in
                promising areas for future appreciation.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We partner with athletes to
              develop a clear investment strategy. Our property management
              service ensures their rental properties are well-maintained and
              profitable, providing a truly hands-off investment experience."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1582313659223-28956e18f2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxhZnJpY2FuJTIwYXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzAxODgyNzY1fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A modern apartment building in a residential area"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="section-5"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          5. The NexaRealty Advantage
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxMHx8cmVhbCUyMGVzdGF0ZSUyMGRlYWx8ZW58MHx8fHwxNzAxODg0NzY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Two business partners shaking hands to close a deal"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Navigating the high-value real estate market requires local
              knowledge, discretion, and a deep understanding of market trends.
              NexaRealty provides a full suite of services tailored to the needs
              of discerning clients like our athletes. From scouting the most
              promising plots in Elgon View to managing the complex logistics of
              a custom home build or a rental portfolio, we are the trusted
              partner that ensures your investment is as successful as your
              career.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Discreet Consultation:</strong> We prioritize your
                privacy and confidentiality.
              </li>
              <li>
                <strong>End-to-End Solutions:</strong> From acquisition to
                management, we handle every step.
              </li>
              <li>
                <strong>Expert Guidance:</strong> We provide data-driven
                insights to maximize your returns.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We understand the unique
              lifestyle and goals of our champions. Our role is to be a reliable
              partner, ensuring their hard-earned success is translated into a
              secure and thriving property portfolio."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Invest in Your Legacy
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The success of Uasin Gishu's athletes is a source of pride, and
            their smart investments are a testament to their long-term vision.
            Whether it's a family home in Elgon View or a strategic rental
            portfolio, the right real estate decisions are key to building a
            lasting legacy. With NexaRealty, you gain a partner who understands
            this market and is dedicated to your success.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Find Your Next Investment Property
            </h3>
            <p class="text-lg mb-6">
              Ready to invest in your future in Eldoret? Let NexaRealty's
              experts guide you to the perfect high-value property or plot.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Schedule a Discreet Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Nexa Realty | Property Management You Can Trust',
  meta: [
    {
      name: 'description',
      content:
        'Learn about Nexa Realty - certified estate agency in Eldoret, Kenya. Licensed under Cap 533, specializing in comprehensive property management services.',
    },
    {
      name: 'keywords',
      content:
        'property management, real estate, Eldoret Kenya, rental management, tenant relations, Cap 533 licensed',
    },
  ],
};
