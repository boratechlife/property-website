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
            Rental Yields & Housing Demand Trends in Eldoret 📈
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A Deep Dive into the Eldoret Property Market for 2025.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🏠</span> Understanding the Eldoret Market
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Eldoret’s real estate market is driven by a unique blend of a
            growing population, a strategic location as a logistical and
            agricultural hub, and a booming education sector. These factors
            create a dynamic environment for rental properties. Understanding
            the demand trends and average rental yields in different
            neighborhoods is crucial for any investor looking to maximize their
            returns in 2025.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Analyzing Rental Yields by Neighborhood
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The profitability of your investment is heavily dependent on
            location. Here’s a look at key neighborhoods and their respective
            rental yield profiles:
          </p>
          <div class="space-y-6">
            <div class="border-l-4 border-primary-600 pl-4">
              <h3 class="text-2xl font-semibold mb-2">
                Langas: High-Yield Hub
              </h3>
              <p>
                Located near the Eldoret-Kisumu highway, **Langas** offers some
                of the highest rental yields in the city, often ranging from
                **8-12% annually**. The demand is primarily from students and
                young professionals seeking affordable single rooms, bedsitters,
                and one-bedroom apartments. The high tenant turnover requires
                proactive management.
              </p>
            </div>
            <div class="border-l-4 border-accent-600 pl-4">
              <h3 class="text-2xl font-semibold mb-2">
                Pioneer Estate: The Student Magnet
              </h3>
              <p>
                **Pioneer Estate** is a prime location for student housing due
                to its proximity to colleges. Investment in purpose-built
                student housing and hostels guarantees a continuous stream of
                tenants. The ROI here is characterized by stable rental income
                and potential for capital appreciation as the education sector
                expands. Providing amenities like **Wi-Fi** and **enhanced
                security** can significantly boost occupancy and yields.
              </p>
            </div>
            <div class="border-l-4 border-gray-500 pl-4">
              <h3 class="text-2xl font-semibold mb-2">
                Kapsoya: The Family-Friendly Find
              </h3>
              <p>
                For investors seeking a stable, long-term investment,
                **Kapsoya** is an excellent choice. This peaceful residential
                area attracts families and established professionals, leading to
                lower tenant turnover compared to student-centric areas.
                Recommended properties are standalone houses and two or
                three-bedroom apartments. While the initial rental yield might
                be lower, the stability and reduced management overhead make it
                a strong option.
              </p>
            </div>
          </div>
          <blockquote class="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border-l-4 border-primary-600 dark:border-primary-400 italic text-gray-800 dark:text-gray-200">
            "A successful investment in Eldoret is not just about the numbers;
            it's about understanding the specific needs of the local market and
            aligning your property to meet that demand."
          </blockquote>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          The Impact of Infrastructure on Demand
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1541094364414-0e428c5a2c26"
              data-src="https://images.unsplash.com/photo-1541094364414-0e428c5a2c26"
              alt="An eco-friendly home with solar panels"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Growth Factor:</h3>
            <p>
              Ongoing infrastructure projects play a crucial role in shaping
              Eldoret's housing demand and property values.
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>
                **Road Networks:** Major road construction projects have
                improved accessibility, opening up new areas for development and
                increasing property values in surrounding zones.
              </li>
              <li>
                **Eldoret International Airport:** The expansion of the airport
                is boosting the local economy and attracting more businesses and
                professionals, creating a higher demand for both residential and
                commercial properties.
              </li>
              <li>
                **Urban Development:** The city's continuous growth as a
                regional hub for commerce and education ensures a steady influx
                of people, which translates directly to a constant need for
                housing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
          <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
            Make Your Eldoret Investment a Success
          </h3>
          <p class="text-lg mb-6">
            Navigating the nuances of rental yields and demand trends requires
            expert insight. Don't risk your capital—get professional guidance
            tailored to your investment goals.
          </p>
          <a
            href="index.html#contact"
            class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
          >
            Schedule a Consultation Today
          </a>
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
