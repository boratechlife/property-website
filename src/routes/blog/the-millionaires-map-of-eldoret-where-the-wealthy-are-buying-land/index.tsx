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
            The Millionaires’ Map of Eldoret: Where the Wealthy are Buying Land
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A look into Eldoret's most affluent neighborhoods and the strategic
            factors driving high-value real estate investments.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🗺️</span> Eldoret's Evolving Real Estate
            Landscape
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Eldoret is no longer just a bustling agricultural town; it's a
            rapidly growing economic and educational hub. This growth has fueled
            a vibrant real estate market, with a clear trend emerging: a
            "millionaires’ map" of prime locations where land values are soaring
            and high-net-worth individuals are making their mark. Understanding
            this map is crucial for any investor looking to make a strategic
            purchase. This guide will take you through these exclusive
            neighborhoods and the key factors that make them so attractive to
            the affluent.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Elgon View - The Epitome of Luxury
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Milimani - The Serene Heart of the Town
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Kesses/Rongai Corridor - The New Frontier
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. The Outskirts - A Blend of Green and Gold
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. What Attracts the Wealthy?
            </a>
          </li>
          <li>
            <a href="#section-6" class="hover:underline">
              6. Partnering with NexaRealty
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Elgon View - The Epitome of Luxury
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b868"
              alt="A modern, luxurious mansion with a manicured lawn"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Elgon View is Eldoret’s most prestigious residential area, a name
              synonymous with luxury and exclusivity. It's characterized by
              palatial homes, well-maintained roads, and lush, expansive
              compounds. Land here is not just a commodity; it's a status
              symbol. The area’s tranquility and security, combined with its
              proximity to key amenities, make it the top choice for established
              professionals, business owners, and high-ranking officials.
            </p>
            <h3 class="text-2xl font-semibold">Key Features:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Exclusivity:</strong> Low-density housing ensures
                privacy.
              </li>
              <li>
                <strong>High Security:</strong> Gated communities and private
                security are common.
              </li>
              <li>
                <strong>Prime Location:</strong> Close to Eldoret Golf Club and
                the town center.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Elgon View represents a
              secure, long-term investment. Land values have consistently
              appreciated here, making it a safe haven for capital."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Milimani - The Serene Heart of the Town
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Tucked away from the town's hustle and bustle, Milimani is a
              serene, leafy suburb that offers a perfect blend of peaceful
              living and urban convenience. It’s a favorite among professionals
              and families seeking a quiet environment without sacrificing
              access to top schools, hospitals, and shopping centers. While the
              land parcels are generally smaller than in Elgon View, the demand
              and value remain exceptionally high.
            </p>
            <h3 class="text-2xl font-semibold">Strategic Appeal:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Central Location:</strong> Minutes away from Eldoret's
                CBD.
              </li>
              <li>
                <strong>Established Infrastructure:</strong> Excellent roads,
                water, and power supply.
              </li>
              <li>
                <strong>Family-Friendly:</strong> Proximity to reputable
                educational institutions.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Milimani's value is in its
              irreplaceable location. It's a mature, dependable market where
              property holds its worth and generates strong rental income."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1596489083321-4f9119d659c2"
              alt="A tree-lined street in a peaceful residential area"
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
          3. The Kesses/Rongai Corridor - The New Frontier
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1582213782172-ac249822a13b"
              alt="An expansive open field with a road and a new building in the distance"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While Elgon View and Milimani are established, the Kesses and
              Rongai corridor along the Eldoret-Kisumu highway is the new hotbed
              for investment. Driven by infrastructure projects and the presence
              of institutions like Moi University, this area is attracting
              developers and investors looking for large parcels of land with
              immense growth potential. The land here offers a much higher
              return on investment for those willing to wait for appreciation.
            </p>
            <h3 class="2xl font-semibold">Why Invest Here:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Future Growth:</strong> Rapidly developing with new
                roads and amenities.
              </li>
              <li>
                <strong>Affordability:</strong> Land is more accessible than in
                the established suburbs.
              </li>
              <li>
                <strong>Strategic Location:</strong> Ideal for commercial
                ventures and residential estates.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "This is where smart
              investors are putting their money. The Kesses/Rongai corridor is
              poised for a major boom, and getting in now offers a huge
              advantage."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. The Outskirts - A Blend of Green and Gold
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Beyond the immediate town, the wider Uasin Gishu County offers a
              unique appeal to the wealthy. These areas provide the perfect
              retreat for those who desire expansive space, privacy, and a
              connection to nature. Here, investors are building luxurious
              country homes, private estates, and even combining residential
              living with high-value agricultural ventures. It's a lifestyle
              choice that combines the best of rural tranquility with urban
              accessibility.
            </p>
            <h3 class="2xl font-semibold">The Value Proposition:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Expansive Land:</strong> Large plots for private
                estates.
              </li>
              <li>
                <strong>Privacy and Serenity:</strong> A quiet escape from city
                life.
              </li>
              <li>
                <strong>High ROI:</strong> Potential for both residential and
                commercial farming income.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "The Eldoret outskirts are a
              dream for those who want a legacy property. It's about building a
              multi-generational asset that provides both a home and a source of
              wealth."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1502920514313-5660e1858341"
              alt="A scenic view of a farm with green hills and a modern home in the background"
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
          5. What Attracts the Wealthy?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="An investor reviewing a city map and documents"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="2xl font-semibold">The Rundown:</h3>
            <p>
              The "millionaires' map" is not just about location; it's about the
              combination of factors that ensure a high quality of life and a
              strong return on investment. The key drivers are a strong
              infrastructure (good roads, reliable utilities), top-notch
              security, proximity to prestigious schools and healthcare
              facilities, and a long-term potential for capital appreciation.
            </p>
            <h3 class="2xl font-semibold">The Investment Checklist:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Security & Privacy:</strong> A non-negotiable for
                high-end properties.
              </li>
              <li>
                <strong>Amenities:</strong> Access to schools, hospitals, and
                shopping centers.
              </li>
              <li>
                <strong>Infrastructure:</strong> Well-developed roads and
                reliable services.
              </li>
              <li>
                <strong>Future Value:</strong> Potential for capital
                appreciation and development.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "For the discerning buyer,
              it's about buying into a lifestyle and a legacy. We help our
              clients find properties that meet all these criteria, not just one
              or two."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-6"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          6. Partnering with NexaRealty
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="2xl font-semibold">The Rundown:</h3>
            <p>
              Navigating the affluent real estate market of Eldoret requires
              local expertise and a deep understanding of market trends. At
              NexaRealty, we specialize in high-value properties in all the key
              areas on this "millionaires' map." Our licensed team provides
              discreet, professional service, helping you identify prime
              investment opportunities and secure your dream property with
              confidence.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Exclusive Listings:</strong> Access to off-market and
                premium properties.
              </li>
              <li>
                <strong>Market Insights:</strong> Professional advice on market
                trends and valuation.
              </li>
              <li>
                <strong>End-to-End Service:</strong> We handle all legal and
                logistical procedures for you.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Finding the right piece of land
              is only the first step. Our role is to ensure a seamless, secure,
              and profitable transaction from start to finish."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="Two business people shaking hands over a property plan"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Your Safety is in the Details
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Investing in Eldoret's prime real estate is a strategic move, but it
            requires local knowledge and a discerning eye. By understanding the
            city's "millionaires' map" and the factors driving its growth, you
            can make a purchase that not only secures your future but also
            aligns with the vision of the region's most successful investors.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Secure Your Eldoret Investment Today
            </h3>
            <p class="text-lg mb-6">
              Partner with NexaRealty's licensed experts for a risk-free and
              transparent land buying experience from start to finish.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Get Started with a Free Consultation
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
