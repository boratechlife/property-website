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
            Spotting Red Flags When Buying Land in Eldoret
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A definitive guide to avoiding common pitfalls and making a secure,
            informed investment in Kenya's fastest-growing city.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🚀</span> The Crucial First Step to a Successful
            Investment
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Eldoret is a hub of economic activity and a prime location for real
            estate investment. However, as with any booming market, it attracts
            a fair share of risks. For aspiring landowners, the dream of owning
            a piece of this vibrant city can quickly turn into a nightmare
            without proper due diligence. Knowing the red flags to watch for is
            the most critical skill you can develop. This guide will walk you
            through the tell-tale signs of a bad deal, from legal complications
            to misleading sellers, empowering you to make a secure and
            profitable investment.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Paperwork Trap: Title Deeds & Records
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The Boundary Battle: Surveyors & Beacons
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Zoning & Planning: What's the Land For?
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. The "Too Good to Be True" Price
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Unseen Costs: Hidden Fees & Taxes
            </a>
          </li>
          <li>
            <a href="#section-6" class="hover:underline">
              6. The NexaRealty Advantage: Your Due Diligence Partner
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Paperwork Trap: Title Deeds & Records
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="An open file folder with various legal documents and a title deed"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The single most important document in a land transaction is the
              title deed. A red flag should be raised if the seller is hesitant
              to provide a copy for a search, if the deed has suspicious
              alterations, or if the name on the title doesn’t match the person
              selling the land. Always conduct a thorough search at the Eldoret
              Land Registry office.
            </p>
            <h3 class="text-2xl font-semibold">Key Checks:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Title Deed Verification:</strong> Check for a valid,
                unencumbered title. A land search will reveal any caveats,
                charges, or court orders.
              </li>
              <li>
                <strong>ID & Pin Matching:</strong> Ensure the seller's National
                ID and KRA PIN match the details on the land documents.
              </li>
              <li>
                <strong>Succession Cases:</strong> Be wary of land being sold
                from an estate without proper grant of letters of
                administration.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "In Eldoret, fraudulent title
              deeds are a major risk. A professional due diligence process with
              a licensed agent is non-negotiable to confirm the legitimacy and
              ownership of the land."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The Boundary Battle: Surveyors & Beacons
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The physical boundaries of a property are just as important as the
              legal ones. A red flag to watch for is a seller who discourages
              you from commissioning an independent surveyor to verify the
              beacons. This could indicate a history of boundary disputes with
              neighbors or a discrepancy in the advertised size of the plot.
            </p>
            <h3 class="text-2xl font-semibold">Verification Steps:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Insist on a Surveyor:</strong> A certified surveyor
                should re-establish the beacons and confirm the plot size.
              </li>
              <li>
                <strong>Check with Neighbors:</strong> Speak to adjacent
                landowners to see if there are any ongoing disputes.
              </li>
              <li>
                <strong>Look for Signs of Encroachment:</strong> Are there
                fences, structures, or farming activities crossing the
                established boundaries?
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "A land transaction without a
              physical survey is like buying a car without a test drive. You
              need to be sure the physical asset matches the legal description.
              Don't compromise on this step."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1621213459972-749e7552542a"
              alt="A surveyor's instrument on a tripod with blurred land beacons in the background"
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
          3. Zoning & Planning: What's the Land For?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1510936371876-0275a2d603e9"
              alt="A construction zone with buildings in the background showing development"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Buying land is often tied to a specific purpose, whether it's for
              residential, commercial, or agricultural use. A major red flag is
              when a seller can't or won't provide details on the land's
              official zoning status. This is especially true for prime plots
              near the Eldoret CBD or bypass, where zoning laws are strictly
              enforced.
            </p>
            <h3 class="text-2xl font-semibold">Zoning Pitfalls to Avoid:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Prohibited Use:</strong> The land is zoned for
                agriculture, but the seller claims you can build apartments on
                it.
              </li>
              <li>
                <strong>Public Land:</strong> The plot is part of a road
                reserve, a public utility area, or a government project.
              </li>
              <li>
                <strong>Environmental Hazards:</strong> The land is a swampy
                area, a riverbed, or a flood zone not suitable for construction.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Always consult with the
              Eldoret County planning office. We have seen countless buyers lose
              their investment because they built a commercial property on land
              zoned for residential use."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. The "Too Good to Be True" Price
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Every investor loves a good deal, but an unrealistically low price
              is often the biggest red flag of all. Scammers use low prices to
              pressure buyers into quick, emotional decisions, often skipping
              due diligence. The goal is to get your money before you have time
              to uncover the truth.
            </p>
            <h3 class="text-2xl font-semibold">Common Tactics:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Pressure Selling:</strong> The seller insists the deal
                must close "today" because "another buyer is interested."
              </li>
              <li>
                <strong>No Valuation:</strong> The seller refuses to have a
                professional valuation done to justify their asking price.
              </li>
              <li>
                <strong>Cash Only:</strong> The seller insists on a cash-only
                transaction, avoiding banks and legal scrutiny.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "If a deal feels too good to be
              true, it almost always is. A legitimate seller welcomes
              transparency and an independent valuation. Don't let emotion
              override your logic."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1554904576-9d62d3a0882e"
              alt="A real estate agent showing a potential buyer a property on a tablet"
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
          5. The Unseen Costs: Hidden Fees & Taxes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1543286392-f049d5870b20"
              alt="Hands counting money with a calculator and legal documents"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The sticker price of a plot of land is rarely the final cost. A
              seller who is vague about additional costs or tells you "not to
              worry about it" is a major red flag. These hidden fees can include
              unpaid land rates, survey fees, legal fees, and utility connection
              charges, which can add up to a significant amount.
            </p>
            <h3 class="text-2xl font-semibold">Fees to Anticipate:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Unpaid Land Rates:</strong> The seller may have
                outstanding rates with the County Government of Uasin Gishu.
              </li>
              <li>
                <strong>Legal Fees:</strong> Both buyer and seller lawyers must
                be paid. A 1.5% - 2.5% fee is standard.
              </li>
              <li>
                <strong>Stamp Duty:</strong> A tax levied by the government for
                the transfer of land, typically 4% of the land's value in urban
                areas.
              </li>
              <li>
                <strong>Valuation Fee:</strong> For a professional valuation
                report from a certified valuer.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our valuation and consulting
              services ensure you have a complete picture of all costs involved,
              from the purchase price to all fees and taxes, so there are no
              surprises."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-6"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          6. The NexaRealty Advantage: Your Due Diligence Partner
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Navigating the land buying process in Eldoret, with all its
              potential pitfalls, can be complex. As a licensed property
              management and real estate firm under Cap 533, NexaRealty acts as
              your expert guide. We conduct comprehensive due diligence on every
              property, handle all legal and financial verifications, and ensure
              a smooth, transparent transaction from start to finish.
            </p>
            <h3 class="text-2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Expert Legal Vetting:</strong> We perform a thorough
                land search and verify all title deed details.
              </li>
              <li>
                <strong>Professional Valuation:</strong> Our certified valuers
                provide an accurate and independent market value.
              </li>
              <li>
                <strong>End-to-End Support:</strong> We manage the entire
                process, from negotiation to transfer, ensuring compliance and
                peace of mind.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "The cost of skipping
              professional due diligence far outweighs the fee for a licensed
              professional. Partnering with a trusted firm like NexaRealty is
              the single best way to protect your investment."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="Two business people shaking hands over a stack of documents"
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
          Conclusion: Invest with Knowledge, Not with Hope
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The Eldoret real estate market offers incredible opportunities, but
            only for those who are prepared. By staying vigilant and knowing the
            red flags we've outlined—from questionable titles to hidden
            costs—you can avoid costly mistakes. Your investment deserves to be
            protected. For a seamless and secure land buying experience, the
            most prudent choice is to partner with a trusted expert who
            understands the local landscape.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Secure Your Investment with a Trusted Partner
            </h3>
            <p class="text-lg mb-6">
              Let NexaRealty's licensed team guide you through every step of
              your land purchase, ensuring a transparent and risk-free
              transaction.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Start Your Secure Search Today
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
