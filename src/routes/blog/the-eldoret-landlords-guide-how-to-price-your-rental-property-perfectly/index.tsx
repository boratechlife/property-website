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
            The Eldoret Landlord's Guide: How to Price Your Rental Property
            Perfectly
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Learn the art of setting a competitive rent price that attracts
            quality tenants and maximizes your returns in the Uasin Gishu
            market.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">📈</span> Finding the Rental Sweet Spot
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Pricing a rental property is a delicate balancing act. Set the rent
            too high, and you risk long vacancies, losing income and attracting
            fewer quality tenants. Price it too low, and you leave money on the
            table, undermining your investment's potential. In Eldoret's
            competitive market, finding the "sweet spot" is crucial for success.
            This guide will walk you through the key factors and strategies to
            help you set the perfect rental price.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Market Research: Your First Step
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The Location and Property Factor
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. The Tenant-Centric Approach
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. The Financials: Don't Forget the Details
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. NexaRealty's Pricing Advantage
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Market Research: Your First Step
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1554224155-1b21c43e493f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMGZpbmFuY2V8ZW58MHx8fHwxNzE2NDk2ODU5fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person analyzing a spreadsheet on a laptop"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Before you even think of a number, you must understand the local
              market. The best way to do this is by conducting a thorough market
              analysis, which involves researching what similar properties are
              renting for in your specific area. Look at online listings, local
              newspapers, and, most importantly, consult with a trusted real
              estate agent who has their finger on the pulse of the Eldoret
              market. This will give you a realistic benchmark.
            </p>
            <h3 class="text-2xl font-semibold">Key Research Tips:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Compare Similar Properties:</strong> Focus on properties
                with the same number of bedrooms and bathrooms.
              </li>
              <li>
                <strong>Analyze Amenities:</strong> Factor in features like
                parking, a dedicated water supply, security, and proximity to
                major roads.
              </li>
              <li>
                <strong>Assess Condition:</strong> A newly renovated property
                can command a higher price than an older one.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Data-driven decisions are
              key. Our market reports provide a clear picture of rental values,
              helping you avoid guesswork and price your property with
              confidence."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The Location and Property Factor
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              A property’s value is inextricably linked to its location and
              condition. A house in a secure, well-connected area like Milimani
              or Elgon View will naturally command a higher rent than one
              further away from the town center. The state of your property is
              just as important. Modern finishes, reliable utility access, and
              secure fencing are not just attractive features; they justify a
              higher price point and signal to tenants that you are a serious
              and professional landlord.
            </p>
            <h3 class="text-2xl font-semibold">What to Consider:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Accessibility:</strong> How easy is it for tenants to
                access public transport or major roads?
              </li>
              <li>
                <strong>Local Infrastructure:</strong> Proximity to schools,
                hospitals, supermarkets, and entertainment hubs adds value.
              </li>
              <li>
                <strong>Amenities:</strong> The presence of an ensuite, a
                private balcony, or ample parking can significantly boost your
                asking price.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "A landlord who invests in the
              security and maintenance of their property can confidently ask for
              a premium. Tenants are willing to pay for peace of mind."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1570129477041-3a0c02914561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBob3VzZSUyMGluJTIwYWZyaWNhfGVufDB8fHx8MTcwMTg4MTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A large, modern house with a green lawn in a good neighborhood"
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
          3. The Tenant-Centric Approach
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1556740714-a84594615a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNXx8cmVhbCUyMGVzdGF0ZSUyMGNvbnN1bHRhdGlvbnxlbnwwfHx8fDE3MTY0OTY3NDF8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Two people in a meeting, with one pointing to a document on a table"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Your pricing strategy should also be about attracting the right
              tenant. An overly ambitious price can scare away potential
              tenants, leading to a prolonged vacancy period. This loss of
              income can quickly negate any potential gain from a higher rent.
              By setting a fair, market-rate price, you attract a larger pool of
              qualified applicants, reduce your vacancy risk, and find a tenant
              who is more likely to be satisfied and stay long-term.
            </p>
            <h3 class="text-2xl font-semibold">Key Considerations:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Reduce Vacancy:</strong> A reasonably priced home is a
                rented home. Every month a property is vacant, you lose income.
              </li>
              <li>
                <strong>Attract Quality Tenants:</strong> Fair pricing attracts
                responsible tenants who are more likely to respect the property
                and pay rent on time.
              </li>
              <li>
                <strong>Tenant Retention:</strong> A satisfied tenant is a
                long-term tenant, saving you the costs and hassle of turnover.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We focus on tenant
              retention. A well-priced property is the foundation of a positive
              landlord-tenant relationship and a stable investment."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. The Financials: Don't Forget the Details
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Your rental price needs to cover your costs and provide a healthy
              return on investment. Don't forget to account for all your
              expenses, including your mortgage, property taxes, insurance, and
              maintenance costs. A common mistake is to only think about the
              mortgage payment. By creating a detailed budget, you can ensure
              your rental income is truly passive and your investment is sound.
            </p>
            <h3 class="text-2xl font-semibold">The Strategy:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Calculate All Costs:</strong> Include fixed costs
                (mortgage, tax) and variable costs (maintenance, repairs).
              </li>
              <li>
                <strong>Target Your ROI:</strong> Determine the return on
                investment you are looking for, and work backward to find a
                suitable rent price.
              </li>
              <li>
                <strong>Plan for the Future:</strong> Allocate a portion of the
                rental income for future upgrades or unexpected repairs.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Your rent price should not just
              cover your costs; it should build your wealth. We help our clients
              create a clear financial picture to ensure their investment is
              profitable."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1543288226-c2901968832c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxiaWxsJTIwcGF5bWVudHN8ZW58MHx8fHwxNzE2NDk3NzYzfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person using a calculator with stacks of bills and a laptop"
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
          5. NexaRealty's Pricing Advantage
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1582313659223-28956e18f2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw4fHxhZnJpY2FuJTIwYXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzE2NDk2ODUzfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A modern apartment building in a secure compound"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Navigating the rental market alone can be a challenge. NexaRealty
              offers a comprehensive property valuation and consultation service
              that takes the guesswork out of pricing. We provide a detailed
              analysis of your property, taking into account location,
              condition, and current market trends to recommend an optimal
              rental price. Our goal is to ensure your property is competitively
              priced, minimizes vacancy time, and maximizes your profitability.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Expert Valuation:</strong> Get a professional,
                data-backed opinion on your property's value.
              </li>
              <li>
                <strong>Market Insights:</strong> We provide in-depth analysis
                of Eldoret's rental market trends.
              </li>
              <li>
                <strong>Marketing & Management:</strong> We handle the entire
                process, from finding tenants to managing the property.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our partnership is about
              more than just finding a tenant; it's about building a profitable
              and sustainable real estate investment for you."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Price with Purpose
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Setting the right rental price is an art and a science. It requires
            a blend of solid market research, an honest assessment of your
            property, and a focus on attracting quality tenants. By following
            these steps, you can set a price that not only covers your costs but
            also secures your investment's long-term success. With NexaRealty,
            you have a partner who is here to guide you through every step of
            this process.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Get a Professional Rental Valuation
            </h3>
            <p class="text-lg mb-6">
              Ready to find the perfect rental price for your property in
              Eldoret? Let our experts give you a professional, data-driven
              valuation today.
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
