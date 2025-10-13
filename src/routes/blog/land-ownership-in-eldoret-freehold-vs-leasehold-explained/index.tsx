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
            Short-Term vs Long-Term Rentals in Eldoret: Which Pays Off?
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A practical, numbers-aware guide for Eldoret landlords — earnings,
            occupancy patterns, rules (Cap 533), and a NexaRealty framework to
            choose the right strategy in 2025.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🚀</span> Why This Decision Matters for Eldoret
            Landlords
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Choosing between short-term (vacation/airbnb-style) and long-term
            (12+ month leases) rental models changes your revenue profile,
            workload, risk and compliance obligations. In Eldoret — an emerging
            city with universities, growing commerce and improving
            infrastructure — the right model can raise net returns and reduce
            vacancy. This guide compares both models across six practical
            dimensions and finishes with NexaRealty's recommended decision
            framework and a localised call to action.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Market Snapshot: Eldoret in 2025
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Financials: Yield, Pricing & Costs
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Occupancy, Seasonality & Demand
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Legal & Compliance (Cap 533 & Local Permits)
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. Operations, Maintenance & Guest Management
            </a>
          </li>
          <li>
            <a href="#section-6" class="hover:underline">
              6. Recommendation: Which Model Wins for You
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Market Snapshot: Eldoret in 2025
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a4b6c5b6a2"
              alt="Eldoret skyline and residential neighbourhood"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Eldoret is transitioning into a higher-demand market thanks to
              urban expansion, improved infrastructure and increased investment
              interest. Local data and market reports in 2024–2025 show rising
              rental activity in university-adjacent areas and near new
              commercial nodes.
            </p>
            <h3 class="text-2xl font-semibold">Quick Facts:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Demand drivers:</strong> Moi University students &
                staff, county government services, SMEs and transport links.
              </li>
              <li>
                <strong>Popular asset types:</strong> 2–3 bedroom maisonettes
                and townhouses outperform small studios for rental yield.
              </li>
              <li>
                <strong>Local trend:</strong> Eastern & central suburbs show
                stronger long-term demand; town-centre units perform well for
                short-term visitors.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> Treat Eldoret as a hybrid
              market — neighbourhood matters more than city averages. A property
              near Moi University or a new commercial corridor will see
              different demand and pricing dynamics than one on the urban
              fringe.
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          2. Financials: Yield, Pricing & Costs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Short-term rentals often command higher nightly rates but also
              have higher turnover costs and variable occupancy. Long-term
              rentals deliver steadier monthly income with lower day-to-day
              management overhead.
            </p>
            <h3 class="text-2xl font-semibold">
              Key Numbers & Considerations:
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Gross yields:</strong> Market reports for Kenya show
                residential yields that typically range between ~6–8% in many
                growth towns (varies by asset and location). Short-term can push
                higher effective yield in high-occupancy pockets but comes with
                more expenses.
              </li>
              <li>
                <strong>Costs to include:</strong> cleaning, platform fees,
                furnishing, frequent repairs, utilities (often owner-paid for
                short-term), and marketing.
              </li>
              <li>
                <strong>Tax & admin:</strong> account for higher admin time for
                short-term listings and ensure income reporting for tax
                compliance.
              </li>
            </ul>
            <p>
              <strong>Expert Analogy:</strong> Short-term is like a boutique
              coffee shop — higher margins per customer but more day-to-day
              work; long-term is like a grocery store — lower margin per
              transaction but steady cashflow and predictable stocking.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1560184897-e45f6b7fcf1a"
              alt="Modern townhouse interior for rental"
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
          3. Occupancy, Seasonality & Demand
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1505692794400-73e8d6b6e1c4"
              alt="Happy guests checking into a short-term rental"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Short-term rentals in Eldoret follow event and academic calendars
              — graduations, conferences, sports events and holiday travel can
              temporarily spike occupancy. Long-term demand ties to employment,
              student terms and migration to the city.
            </p>
            <h3 class="text-2xl font-semibold">Practical Points:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Seasonal spikes:</strong> Align pricing with university
                terms and public holidays.
              </li>
              <li>
                <strong>Vacancy buffer:</strong> For short-term, plan a 10–30%
                buffer for low-season vacancy; for long-term, prepare for
                occasional periods between tenants (1–2 months).
              </li>
              <li>
                <strong>Market segmentation:</strong> Student lets, corporate
                lets, and short-stay travellers each require different
                furnishing and marketing approaches.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Tip:</strong> Use hybrid calendars — keep 1–2
              units optimised for short stays near high-demand pockets while
              converting other units to stable long-term leases to balance
              cashflow and workload.
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          4. Legal & Compliance: Cap 533 and Local Rules
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Operating rentals in Kenya means you must be aware of the Estate
              Agents Act (Cap 533), registration and licensing obligations, and
              local county regulations for short-stay accommodation. Estate
              Agents Registration Board (EARB) regulates estate agents and
              certain letting activities under Cap 533.
            </p>
            <h3 class="text-2xl font-semibold">Compliance Checklist:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Registration:</strong> If you act as an agent or manage
                multiple properties on behalf of owners, ensure EARB
                registration where required under Cap 533.
              </li>
              <li>
                <strong>Local permits:</strong> Check Uasin Gishu county rules
                for any business permits related to short-stay hospitality.
              </li>
              <li>
                <strong>Lease terms & deposits:</strong> Use clear written
                contracts for long-term leases; short-term platforms require
                clear house rules and insurance consideration.
              </li>
            </ul>
            <p>
              <strong>Professional Note:</strong> Non-compliance risks fines and
              reputational damage; NexaRealty helps clients navigate licensing
              and contract drafting to stay aligned with Cap 533 and local
              requirements.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Signing lease documents and legal compliance"
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
          5. Operations, Maintenance & Guest Experience
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156"
              alt="Property maintenance and cleaning in progress"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Operational intensity is the single biggest hidden cost.
              Short-term means frequent cleaning, check-ins and guest
              communication; long-term shifts focus to preventative maintenance,
              relationship management and reliable schedules.
            </p>
            <h3 class="text-2xl font-semibold">Operational Playbook:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Standard operating procedure:</strong> Build clear SOPs
                for cleaning, check-in/out and emergency repairs.
              </li>
              <li>
                <strong>Local vendor network:</strong> Maintain vetted cleaners,
                plumbers and electricians with fixed-rate agreements.
              </li>
              <li>
                <strong>Technology stack:</strong> Use channel managers for
                short-term listings and property management software for
                long-term tenancies to automate invoicing and reminders.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Analogy:</strong> Think of operations as the
              engine — the same car will need different fuel depending on
              whether you’re driving short sprints (short-term) or long-distance
              cruises (long-term). The engine must be tuned to the use-case.
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-6"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          6. Recommendation: Which Model Wins for You
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              There is no one-size-fits-all. NexaRealty recommends a decision
              framework that balances yield goals, risk appetite, location, and
              available time/management capability.
            </p>
            <h3 class="text-2xl font-semibold">
              Decision Framework (Actionable):
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Location-first:</strong> If within 2km of Moi University
                or central business nodes — consider short-term for selected
                units; otherwise favour long-term.
              </li>
              <li>
                <strong>Portfolio mix:</strong> Keep 60/40 or 70/30
                long-term/short-term split for steady cashflow with upside
                potential.
              </li>
              <li>
                <strong>Run a 12-month P&L:</strong> Model conservative
                occupancy (short-term 55–65% annual occupancy), or a locked-in
                rent for long-term, and include all operating costs.
              </li>
            </ul>
            <p>
              <strong>Expert Closing Insight:</strong> Use short-term rentals as
              a revenue booster on a subset of properties where demand and
              location justify the operational lift. For most Eldoret landlords
              seeking stable growth and easier compliance, long-term tenancies
              deliver predictable returns and lower management overhead.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1557083303-4f6a3b7d6b8b"
              alt="Landlord reviewing portfolio performance"
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
          Make it Work: NexaRealty's Local Playbook
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The right rental strategy for Eldoret depends on precise local
            factors — neighbourhood, asset type, and how much operational
            complexity you want. NexaRealty's on-the-ground experience shows
            that a mixed approach preserves upside while protecting cashflow.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Ready to optimise your Eldoret property?
            </h3>
            <p class="text-lg mb-6">
              Book a free portfolio review with NexaRealty — we model your
              property, estimate realistic yields, and recommend a deployment
              strategy tailored to Eldoret and Cap 533 compliance.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Get a Free Review
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
