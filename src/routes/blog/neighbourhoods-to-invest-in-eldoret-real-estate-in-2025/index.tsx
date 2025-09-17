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
            Neighbourhoods to Invest in Eldoret Real Estate in 2025
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A Novice's Guide to Smart Property Investments in the City of
            Champions.
          </p>
        </div>
      </section>
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🚀</span> Your Investment Journey Starts Here
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Welcome, future property investor! Eldoret is rapidly growing, and
            with a growing population, an expanding university hub, and
            improving infrastructure, the real estate market is buzzing with
            opportunity. But where do you start? This guide is designed to be
            your roadmap, helping you navigate the city's diverse neighborhoods
            to find the perfect investment that aligns with your goals. We'll
            break down the key factors, from location and property type to
            potential returns, in a clear, no-nonsense format.
          </p>
        </div>
      </section>
      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#why-eldoret" class="hover:underline">
              1. Why Eldoret? The Big Picture
            </a>
          </li>
          <li>
            <a href="#section-langas" class="hover:underline">
              2. Langas: The High-Yield Hub
            </a>
          </li>
          <li>
            <a href="#section-pioneer" class="hover:underline">
              3. Pioneer Estate: The Student Magnet
            </a>
          </li>
          <li>
            <a href="#section-kapsoya" class="hover:underline">
              4. Kapsoya: The Family-Friendly Find
            </a>
          </li>
          <li>
            <a href="#section-elgonview" class="hover:underline">
              5. Elgon View: The Long-Term Play
            </a>
          </li>
          <li>
            <a href="#section-conclusion" class="hover:underline">
              6. Making Your Investment Decision
            </a>
          </li>
        </ul>
      </section>
      ---
      <section
        id="why-eldoret"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          1. Why Eldoret? The Big Picture
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Before we dive into specific areas, let's understand why Eldoret is
            a top choice for real estate investment in 2025. This isn't just a
            run-of-the-mill town; it's a strategic economic and educational hub.
            Here are the key drivers:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>Economic Growth:</strong> As the commercial center of the
              North Rift, Eldoret benefits from a strong agricultural sector and
              a growing industrial base. This creates jobs and, most
              importantly, a constant demand for housing.
            </li>
            <li>
              <strong>Education Hub:</strong> With major institutions like Moi
              University and the University of Eldoret nearby, there's a
              massive, steady influx of students and staff. This translates
              directly into a high demand for rental properties.
            </li>
            <li>
              <strong>Infrastructure Development:</strong> Ongoing road
              construction and expansion of the Eldoret International Airport
              are making the city more accessible and valuable.
            </li>
          </ul>
          <blockquote class="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border-l-4 border-primary-600 dark:border-primary-400 italic text-gray-800 dark:text-gray-200">
            "Investing in Eldoret in 2025 is less about speculation and more
            about capitalizing on predictable, long-term growth. The
            fundamentals — population, education, and infrastructure — are all
            pointing in the right direction." - NexaRealty Investment Team.
          </blockquote>
        </div>
      </section>
      ---
      <section
        id="section-langas"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Langas: The High-Yield Hub
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1510972527921-aa01d9c8b5e9"
              data-src="https://images.unsplash.com/photo-1510972527921-aa01d9c8b5e9"
              alt="Residential properties in Eldoret's Langas neighborhood"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Located near the Eldoret-Kisumu highway, Langas is known for its
              affordability and high rental demand. It's a goldmine for
              investors seeking quick returns and accessible entry points into
              the market.
            </p>
            <h3 class="text-2xl font-semibold">Investment Profile:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Property Type:</strong> Rental units, particularly
                single rooms, bedsitters, and one-bedroom apartments.
              </li>
              <li>
                <strong>Target Tenants:</strong> Students and young
                professionals.
              </li>
              <li>
                <strong>ROI Potential:</strong> High rental yields (often 8-12%
                annually) due to strong demand and relatively low property
                prices.
              </li>
            </ul>
            <p>
              <strong>O'Reilly Insight:</strong> Think of Langas as your "Hello,
              World!" of Eldoret real estate. It's the perfect place to start
              with smaller, high-demand rental units before scaling up. The key
              is efficient property management to handle the high tenant
              turnover.
            </p>
          </div>
        </div>
      </section>
      ---
      <section
        id="section-pioneer"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          3. Pioneer Estate: The Student Magnet
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Situated closer to the town center and major colleges, Pioneer
              Estate is a prime location for student housing. The proximity to
              educational facilities guarantees a continuous stream of tenants.
            </p>
            <h3 class="text-2xl font-semibold">Investment Profile:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Property Type:</strong> Purpose-built student housing,
                hostels, and shared apartments.
              </li>
              <li>
                <strong>Target Tenants:</strong> University students.
              </li>
              <li>
                <strong>ROI Potential:</strong> Stable rental income and
                potential for appreciation as the education sector expands.
              </li>
            </ul>
            <p>
              <strong>O'Reilly Insight:</strong> In Pioneer Estate, your
              investment is directly tied to the academic calendar. Optimize for
              student needs—Wi-Fi, security, and proximity to campus—to maximize
              occupancy and rental rates.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1560518883-ff0511317131"
              data-src="https://images.unsplash.com/photo-1560518883-ff0511317131"
              alt="Modern apartment buildings in Eldoret's Pioneer Estate"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      ---
      <section
        id="section-kapsoya"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Kapsoya: The Family-Friendly Find
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1558036117-15d822786394"
              data-src="https://images.unsplash.com/photo-1558036117-15d822786394"
              alt="Spacious family home in a suburban neighborhood"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Kapsoya is an established, peaceful residential area ideal for
              families and long-term tenants. It offers a more stable, less
              volatile investment compared to student-centric areas.
            </p>
            <h3 class="text-2xl font-semibold">Investment Profile:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Property Type:</strong> Standalone houses, maisonettes,
                and two/three-bedroom apartments.
              </li>
              <li>
                <strong>Target Tenants:</strong> Families and established
                professionals.
              </li>
              <li>
                <strong>ROI Potential:</strong> Consistent, long-term rental
                income with less turnover. Great for passive investors.
              </li>
            </ul>
            <p>
              <strong>O'Reilly Insight:</strong> Investing in Kapsoya is like
              choosing a stable, mature programming language. While the initial
              yield may be lower than in student hubs, the stability and lower
              management overhead make it an excellent choice for a long-term
              portfolio.
            </p>
          </div>
        </div>
      </section>
      ---
      <section
        id="section-elgonview"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          5. Elgon View: The Long-Term Play
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Eldoret's most affluent neighborhood, Elgon View, is where you
              invest for significant capital appreciation. This area is
              characterized by large, luxurious homes and plots, attracting
              high-net-worth individuals.
            </p>
            <h3 class="text-2xl font-semibold">Investment Profile:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Property Type:</strong> High-end residential plots and
                executive homes.
              </li>
              <li>
                <strong>Target Tenants:</strong> Executives, diplomats, and
                wealthy families.
              </li>
              <li>
                <strong>ROI Potential:</strong> Slower rental yield but high
                capital appreciation over the medium to long term.
              </li>
            </ul>
            <p>
              <strong>O'Reilly Insight:</strong> Consider Elgon View your
              "advanced" investment. It requires a higher entry capital, but the
              rewards are in the long game of land value appreciation. This is
              where you build serious wealth over a decade.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1582268611958-f279f2cd303f"
              data-src="https://images.unsplash.com/photo-1582268611958-f279f2cd303f"
              alt="Lush green lawn of a high-end property"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      ---
      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Making Your Investment Decision
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Now that you have a map of Eldoret's prime investment spots, the
            next step is to align these opportunities with your personal
            investment strategy. Do you want high short-term cash flow
            (Langas/Pioneer), or are you focused on long-term wealth
            accumulation (Kapsoya/Elgon View)?
          </p>
          <p>
            Just like coding, real estate has its pitfalls. Without a reliable
            partner, you could end up with a project full of bugs. That's where
            NexaRealty comes in. We are licensed property management experts
            (under Cap 533) with deep local knowledge to help you debug your
            investment strategy and ensure a smooth, profitable operation.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Ready to Invest?
            </h3>
            <p class="text-lg mb-6">
              Stop guessing and start building your real estate portfolio with
              confidence. Contact us for a personalized consultation.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Schedule a Consultation Today
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
