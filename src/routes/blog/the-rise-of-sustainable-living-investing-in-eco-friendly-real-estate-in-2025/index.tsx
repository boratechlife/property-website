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
            The Rise of Sustainable Living: Investing in Eco-Friendly Real
            Estate in 2025
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A Novice's Guide to Smart Property Investments in the Green Economy.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🚀</span> The Green Investment Journey Starts
            Here
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Welcome, future property investor! As environmental awareness grows,
            so does the demand for sustainable living spaces. Eco-friendly real
            estate is no longer a niche market; it is a burgeoning sector
            offering long-term value, lower operating costs, and significant
            investment opportunities. This guide is for novice and experienced
            investors alike, helping you understand the key trends and
            opportunities in sustainable property investment for 2025. Investing
            in green buildings is a forward-thinking strategy that aligns with
            global sustainability goals and offers a competitive edge in a
            modern market.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Key Pillars of Sustainable Real Estate
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Sustainable real estate investment is built on three core pillars
            that drive both environmental benefit and financial return:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>Energy Efficiency:</strong> Properties designed to
              minimize energy consumption through features like solar panels,
              energy-efficient windows, and smart home systems. These features
              lead to lower utility bills for tenants, making the properties
              more attractive and justifying higher rents.
            </li>
            <li>
              <strong>Water Conservation:</strong> Buildings with rainwater
              harvesting systems, low-flow fixtures, and drought-resistant
              landscaping. Water scarcity is a growing concern, and properties
              that actively conserve water have a significant advantage.
            </li>
            <li>
              <strong>Sustainable Materials:</strong> The use of recycled,
              locally sourced, or non-toxic building materials that reduce the
              environmental impact of construction and improve the health of the
              occupants.
            </li>
          </ul>
          <blockquote class="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border-l-4 border-primary-600 dark:border-primary-400 italic text-gray-800 dark:text-gray-200">
            "The investment in a green building today is an investment in its
            long-term resilience and value. It's a fundamental shift from a
            short-term profit mindset to a sustainable, value-driven strategy."
          </blockquote>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          Top Eco-Friendly Investment Trends
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
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Here are some of the leading trends and property types to consider
              when investing in sustainable real estate:
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Eco-Villages:</strong> These are planned communities
                built around the principles of environmental sustainability and
                social cohesion. They often feature shared green spaces,
                community gardens, and advanced waste management systems.
              </li>
              <li>
                <strong>Green Apartments:</strong> Urban apartment buildings
                that incorporate a range of sustainable features, from green
                roofs and vertical gardens to high-efficiency appliances and EV
                charging stations.
              </li>
              <li>
                <strong>Renovations of Existing Properties:</strong>
                Retrofitting older buildings with new sustainable technologies
                can significantly increase their market value and appeal. This
                is often a more cost-effective entry point for investors.
              </li>
              <li>
                <strong>Certified Green Buildings:</strong> Look for properties
                with certifications like LEED (Leadership in Energy and
                Environmental Design) or EDGE (Excellence in Design for Greater
                Efficiencies). These certifications provide a recognized
                benchmark of a building's sustainability performance, giving you
                a clear advantage in the market.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Making Your Sustainable Investment Decision
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Investing in sustainable real estate is a strategic move that pays
            dividends in both financial returns and environmental impact. When
            evaluating a property, look beyond the initial cost and consider the
            long-term benefits of reduced operating expenses, higher tenant
            retention, and enhanced market value.
          </p>
          <p>
            Ready to explore your options and build a portfolio that's both
            profitable and purposeful? Our team of licensed experts is here to
            help you navigate this exciting and rapidly growing market.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Ready to Build a Sustainable Portfolio?
            </h3>
            <p class="text-lg mb-6">
              Don't miss out on the future of real estate. Contact us for a
              personalized consultation on eco-friendly property investments.
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
