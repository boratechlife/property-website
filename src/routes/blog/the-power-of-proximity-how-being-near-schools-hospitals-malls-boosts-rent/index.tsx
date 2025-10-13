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
            The Power of Proximity: How Being Near Schools, Hospitals & Malls
            Boosts Rent
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive look at why a property’s location relative to key
            amenities is the most powerful determinant of its rental income in
            Eldoret.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">📍</span> The Real Estate Golden Rule
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            You've heard the golden rule of real estate: "location, location,
            location." While it's a cliché, its truth is undeniable, especially
            in a growing town like Eldoret. The value of a rental property isn't
            just about the number of bedrooms or the quality of its finishes;
            it's about the convenience and lifestyle it offers tenants.
            Proximity to essential services like schools, hospitals, and
            shopping centers can drastically increase a property's appeal and,
            consequently, its rental income. Let's explore how this powerful
            factor plays out in the Eldoret market.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Commute Factor: Saving Time and Money
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The School Advantage: A Magnet for Families
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. The Health and Wellness Premium
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. The Appeal of Convenience: Malls and Markets
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. NexaRealty's Location-Based Valuation
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Commute Factor: Saving Time and Money
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549721733-f72b212f86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8Y2l0eSUyMG1hcHxlbnwwfHx8fDE3MTcwMDYwMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="An abstract, stylized map of a city showing different neighborhoods and roads"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              In a bustling town like Eldoret, traffic and commuting time are
              major considerations for prospective tenants. A property that
              reduces a tenant's daily commute to work, school, or errands
              provides a tangible benefit that they are willing to pay for.
              Tenants calculate the cost of fuel, public transport fares, and,
              most importantly, their time. A rental unit strategically located
              near major business districts or transport hubs is inherently more
              valuable because it offers a better quality of life.
            </p>
            <h3 class="text-2xl font-semibold">Key Takeaways:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Reduced Expenses:</strong> Lower fuel or transport costs
                are a significant draw for budget-conscious tenants.
              </li>
              <li>
                <strong>Time is Money:</strong> Shorter commutes free up time
                for family, hobbies, or work, a major selling point.
              </li>
              <li>
                <strong>Higher Demand:</strong> Properties with excellent
                accessibility will always attract a wider pool of potential
                tenants.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "When we evaluate a property,
              we don't just look at its four walls. We look at its position on
              the map and its connection to the city. That's where true value
              lies."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The School Advantage: A Magnet for Families
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              For families with children, access to quality education is often
              the number one priority when searching for a home. A property
              located within walking distance or a short drive of reputable
              schools, colleges, or universities in Eldoret becomes instantly
              more desirable. This proximity not only simplifies the morning
              routine but also saves on transportation costs and gives parents
              peace of mind. As a landlord, this means you can confidently ask
              for a higher rent and will likely experience lower tenant
              turnover, as families tend to stay longer.
            </p>
            <h3 class="text-2xl font-semibold">What to Consider:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Reputation Matters:</strong> Proximity to well-regarded
                institutions like Moi University or Hill School is a huge plus.
              </li>
              <li>
                <strong>Reduced Turnover:</strong> Families who find a great
                school in their neighborhood are less likely to move.
              </li>
              <li>
                <strong>Safety and Convenience:</strong> Walking to school is a
                major convenience and a safety benefit for children.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "For family-friendly units, the
              school district is the single biggest factor influencing rent.
              It's a non-negotiable for many of our tenants."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95ae44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxraWQlMjBzY2hvb2x8ZW58MHx8fHwxNzE3MDA2MDQxfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A group of smiling students walking to a school building"
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
          3. The Health and Wellness Premium
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1579684385153-f728c0fe1415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNXx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHx8fDE3MTcwMDYxMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="The modern, glass exterior of a hospital building"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Healthcare is a universal need, and living near a hospital or
              clinic is a major convenience and reassurance for tenants. Eldoret
              is a major healthcare hub in the Rift Valley, with institutions
              like Moi Teaching and Referral Hospital and various private
              clinics. A property located close to these facilities, especially
              for medical professionals or families with specific health needs,
              holds a premium. It guarantees quick access to medical care, which
              is a powerful psychological comfort that translates into a higher
              perceived value for the property.
            </p>
            <h3 class="text-2xl font-semibold">Key Selling Points:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Peace of Mind:</strong> Tenants feel more secure knowing
                help is close in an emergency.
              </li>
              <li>
                <strong>Targeted Market:</strong> Attracts professionals who
                work in the healthcare sector.
              </li>
              <li>
                <strong>High Demand:</strong> Properties near hospitals are
                always in demand due to the constant influx of staff and
                patients' families.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Properties in neighborhoods
              like Kapsoya or Milimani, with their strategic proximity to key
              hospitals, consistently command top-tier rental prices."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. The Appeal of Convenience: Malls and Markets
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              A modern lifestyle demands convenience, and that means easy access
              to shopping, dining, and entertainment. Properties near major
              retail centers like Zion Mall or Rupa's Mall offer tenants a
              ready-made social and commercial hub. The ability to grab
              groceries, meet friends for a meal, or watch a movie without a
              long drive is a huge draw. This convenience is a powerful amenity
              in itself, justifying higher rent and making your property a top
              choice for young professionals and families alike.
            </p>
            <h3 class="text-2xl font-semibold">The Impact of Amenities:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Lifestyle Appeal:</strong> Malls and markets are central
                to a modern, social lifestyle.
              </li>
              <li>
                <strong>Foot Traffic:</strong> High traffic areas mean more eyes
                on your "For Rent" sign.
              </li>
              <li>
                <strong>Enhanced Value:</strong> The surrounding commercial
                development adds to the overall perceived value of your
                property.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We often see properties near
              commercial centers renting out faster and at higher rates. It's a
              simple case of supply and demand for convenience."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1560946261-a53d30a08e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNHx8c2hvcHBpbmclMjBtYWxsc3xlbnwwfHx8fDE3MTcwMDY1Mjd8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="The bright, modern interior of a large shopping mall with escalators"
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
          5. NexaRealty's Location-Based Valuation
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce092288fda1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxMHx8cmVhbCUyMGVzdGF0ZSUyMGRlYWx8ZW58MHx8fHwxNzE4ODMyMzU1fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A team of professionals collaborating and pointing at a physical city map"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              At NexaRealty, we take a data-driven approach to property
              valuation, with a keen focus on location and proximity. Our expert
              team doesn't just give you a number; we provide a detailed
              analysis of how your property's surroundings—from schools and
              hospitals to malls and transport links—directly influence its
              market value and potential rental income. We help you understand
              and leverage these factors to maximize your return on investment
              and attract the best possible tenants.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Detailed Proximity Reports:</strong> We provide an
                analysis of your property’s access to local amenities.
              </li>
              <li>
                <strong>Optimized Pricing:</strong> We use location data to set
                a competitive price that maximizes your income.
              </li>
              <li>
                <strong>Strategic Marketing:</strong> We highlight the unique
                advantages of your property's location to attract ideal tenants.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We turn location into
              leverage. Our expertise ensures you get the full value of your
              investment by understanding and marketing its unique advantages."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Location is Your Greatest Asset
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The saying holds true: a property's location is its most valuable
            asset. By understanding and capitalizing on your property’s
            proximity to essential services and amenities, you can significantly
            increase its appeal, reduce vacancy times, and boost your rental
            income. For landlords in Eldoret, this is the key to a profitable
            and sustainable investment. Let NexaRealty help you unlock the full
            potential of your property's location.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Get a Professional Proximity Analysis
            </h3>
            <p class="text-lg mb-6">
              Ready to find out how your property's location can boost its
              value? Contact NexaRealty today for a detailed valuation and
              analysis.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Schedule a Free Consultation
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
