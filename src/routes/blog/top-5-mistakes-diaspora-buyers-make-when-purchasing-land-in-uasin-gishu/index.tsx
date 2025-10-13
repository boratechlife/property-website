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
            Top 5 Mistakes Diaspora Buyers Make When Purchasing Land in Uasin
            Gishu
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            An essential guide for the Kenyan diaspora on common pitfalls to
            avoid when investing in real estate in Eldoret and Uasin Gishu
            County.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🌍</span> Investing from Afar
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Investing in land back home is a powerful step towards building a
            legacy and securing a future. However, for the Kenyan diaspora, the
            physical distance can create unique challenges. Without a trusted
            presence on the ground, buyers can easily fall victim to
            misinformation, fraudulent deals, or simply make a poor investment
            choice. This article will highlight the top five common mistakes
            made by diaspora buyers and provide practical advice on how to avoid
            them, ensuring your investment in Uasin Gishu is both safe and
            profitable.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Skipping Due Diligence
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Relying on Unofficial Intermediaries
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Ignoring Zoning & Land Use Policies
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Underestimating Hidden Costs
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. Rushing the Process
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
          1. Skipping Due Diligence
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1554460773-a6a926343516"
              alt="A person examining land documents and a map"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The single biggest mistake is failing to perform thorough due
              diligence. This includes verifying the title deed, checking for
              any encumbrances or disputes, and confirming the seller's
              identity. Many diaspora buyers rely solely on family or friends,
              who may not have the expertise to spot red flags. This can lead to
              purchasing a property that has multiple owners, is subject to a
              court case, or is not even legally registered.
            </p>
            <h3 class="text-2xl font-semibold">Key Checks:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Title Deed Search:</strong> Always conduct an official
                search at the land registry.
              </li>
              <li>
                <strong>Physical Site Visit:</strong> Confirm the property's
                boundaries and condition.
              </li>
              <li>
                <strong>Seller Verification:</strong> Ensure the person selling
                is the legitimate owner.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Due diligence is
              non-negotiable. It's the foundation of a secure investment. We
              handle this entire process for our clients, providing verified
              reports and full transparency before any money changes hands."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Relying on Unofficial Intermediaries
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              It's tempting to use a relative or a friend of a friend to "save
              on agency fees." While this may seem like a good idea, it often
              leads to a lack of accountability and expertise. Unlicensed
              brokers or unofficial intermediaries may not be familiar with the
              legal processes, leading to delays, missing paperwork, or
              worse—losing your money. A professional real estate agent is bound
              by a code of ethics and has the legal backing to ensure a smooth
              transaction.
            </p>
            <h3 class="text-2xl font-semibold">The Professional Advantage:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Legal Expertise:</strong> Licensed agents understand the
                full legal process.
              </li>
              <li>
                <strong>Accountability:</strong> A professional firm is
                accountable for the transaction.
              </li>
              <li>
                <strong>Security:</strong> They offer protection against fraud
                and legal pitfalls.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Your investment is too important
              to be left to chance. A few thousand shillings saved on fees could
              cost you millions in lost capital. Always work with a licensed and
              reputable firm."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542744173-820d93a6125c"
              alt="Two people shaking hands over a contract"
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
          3. Ignoring Zoning & Land Use Policies
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1557997994-4d89b3f3b97b"
              alt="A town planning map showing different land zones"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              A beautiful piece of land might not be suitable for your intended
              use. Eldoret and Uasin Gishu County have specific zoning and land
              use policies. Buying a plot intended for agriculture and trying to
              build a residential home on it can lead to legal issues, fines,
              and even demolition. Many buyers fail to check these policies,
              only to realize later that their dreams of building a specific
              type of property are not possible.
            </p>
            <h3 class="text-2xl font-semibold">What to Verify:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Zoning Classification:</strong> Is the land zoned for
                residential, commercial, or agricultural use?
              </li>
              <li>
                <strong>Future Infrastructure Plans:</strong> Are there any
                plans for roads or public works that may affect the property?
              </li>
              <li>
                <strong>Environmental Regulations:</strong> Are there any
                protected areas or restrictions on the land?
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We don't just sell land; we
              sell possibilities. Our experts are well-versed in local zoning
              laws and will ensure your chosen property aligns perfectly with
              your long-term vision."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Underestimating Hidden Costs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The advertised price of a property is rarely the final cost.
              Diaspora buyers often overlook additional expenses such as legal
              fees, stamp duty, transfer fees, and professional fees for
              surveyors. These costs can add up to a significant amount,
              catching buyers off guard and straining their budgets. A
              transparent, itemized cost breakdown is essential for effective
              financial planning from the start.
            </p>
            <h3 class="text-2xl font-semibold">Common Hidden Costs:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Legal & Transfer Fees:</strong> Costs associated with
                lawyers and land transfer.
              </li>
              <li>
                <strong>Surveyor Fees:</strong> For verifying boundaries and
                creating a deed plan.
              </li>
              <li>
                <strong>Taxes & Stamp Duty:</strong> Government fees that must
                be paid.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We provide our clients with a
              full, transparent breakdown of all costs from day one. There are
              no surprises, just a clear path to ownership."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="A calculator on top of a spreadsheet with financial figures"
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
          5. Rushing the Process
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1599395255479-ecce2e55ce77"
              alt="A person looking at a clock while holding a property deed"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The excitement of buying a property can lead to rushing the
              process, especially when a "deal" seems too good to be true. A
              hurried transaction often means skipping crucial steps like site
              verification, legal checks, or reviewing the contract thoroughly.
              This haste is a primary reason why many diaspora investors end up
              in legal battles or with a property that doesn't meet their
              expectations. Patience and a systematic approach are key to a
              successful investment.
            </p>
            <h3 class="2xl font-semibold">The Right Way to Buy:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Take Your Time:</strong> Do not be pressured into making
                a quick decision.
              </li>
              <li>
                <strong>Consult Experts:</strong> Seek advice from licensed real
                estate agents and lawyers.
              </li>
              <li>
                <strong>Follow the Process:</strong> A step-by-step approach
                ensures all legal and practical requirements are met.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "A good deal is not a rushed
              deal. We guide our clients through every step of the journey,
              ensuring they feel confident and secure with their decision, no
              matter how long it takes."
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
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Avoiding the mistakes listed above is simple when you have the
              right partner. NexaRealty provides a comprehensive, end-to-end
              service designed specifically for diaspora investors. From a
              dedicated agent on the ground to handle all due diligence, to
              secure digital platforms for communication and document sharing,
              we ensure your investment is safe, transparent, and hassle-free.
              Your dream of owning a piece of Uasin Gishu is our mission.
            </p>
            <h3 class="2xl font-semibold">How We Protect You:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Expert Guidance:</strong> Licensed professionals guiding
                you at every step.
              </li>
              <li>
                <strong>Transparent Process:</strong> Real-time updates and
                clear documentation.
              </li>
              <li>
                <strong>Risk Mitigation:</strong> We spot red flags so you don't
                have to.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We are more than just an agent;
              we are your trusted eyes and ears on the ground, protecting your
              interests and turning your dreams into a reality. Don't take a
              risk; take our hand."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="A secure and confident handshake between business partners"
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
          Conclusion: Invest Smart, Not Hard
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Investing in your homeland is a significant and rewarding endeavor.
            By being aware of the common pitfalls and partnering with a
            reputable and licensed real estate firm, you can navigate the
            process with confidence. Don't let distance stand in the way of your
            dreams; let a trusted professional bridge the gap and secure your
            future in Uasin Gishu.
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
