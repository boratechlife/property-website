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
            The Dark Side of Land Buying in Eldoret: Scams & How to Protect
            Yourself
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A candid look at the common pitfalls and fraudulent schemes in the
            Eldoret real estate market, and the critical steps you must take to
            secure your investment.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🚨</span> Navigating the Risks of Real Estate
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            The Eldoret real estate market is booming, presenting incredible
            opportunities for investors. However, with this growth comes an
            unfortunate rise in fraudulent activities. From fake title deeds to
            complex family disputes, the "dark side" of land buying can turn a
            dream investment into a costly nightmare. Understanding these risks
            is the first step to protecting yourself. This guide will expose the
            most common scams and equip you with a checklist of protective
            measures to ensure your property journey is safe and secure.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Fake Title Deed & Impersonation Scams
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The "Multiple Sellers" and Family Disputes
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Dealing with Land with Legal Encumbrances
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Essential Red Flags to Watch Out For
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Role of a Professional Partner
            </a>
          </li>
          <li>
            <a href="#section-6" class="hover:underline">
              6. Why NexaRealty is Your Safe Harbor
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Fake Title Deed & Impersonation Scams
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="An image of legal documents and a title deed with a red stamp"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              This is arguably the most common and devastating scam. A fraudster
              creates a counterfeit title deed that looks authentic. They might
              even impersonate the real landowner using fake identification.
              They will push for a quick transaction, often offering the land at
              a "bargain" price to rush you into a decision. The buyer pays,
              receives the fake document, and later discovers they have no legal
              claim to the property.
            </p>
            <h3 class="text-2xl font-semibold">Key Takeaway:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Unreal Bargains:</strong> Be suspicious of prices that
                are significantly lower than the market rate.
              </li>
              <li>
                <strong>Pressure Tactics:</strong> High-pressure sales tactics
                are a major red flag.
              </li>
              <li>
                <strong>Insist on Verification:</strong> A legitimate seller
                will never object to you verifying their documents.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our first step is always to
              conduct a thorough search on Ardhisasa. We never take a title deed
              at face value. This is the only way to confirm its authenticity."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The "Multiple Sellers" and Family Disputes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Some fraudulent sellers will sell the same piece of land to
              multiple unsuspecting buyers. This often happens with land that is
              under family ownership, where one member sells the property
              without the consent of the others. These cases often result in
              prolonged and expensive court battles, with the original buyer's
              money trapped in legal limbo.
            </p>
            <h3 class="text-2xl font-semibold">How to Spot This:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Multiple Claims:</strong> If other people claim
                ownership of the land.
              </li>
              <li>
                <strong>Lack of Consensus:</strong> If family members show any
                disagreement over the sale.
              </li>
              <li>
                <strong>Check all owners:</strong> A land search will reveal all
                registered owners, not just one.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Always meet all the listed
              owners of the land. A lack of consensus or a clear chain of
              ownership is a definite sign to walk away. It's not worth the
              legal headache."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1621213459972-749e7552542a"
              alt="A heated discussion between people, representing a dispute"
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
          3. Dealing with Land with Legal Encumbrances
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1510936371876-0275a2d603e9"
              alt="A person highlighting a legal document with a red marker"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Land can be subject to various legal claims, or "encumbrances."
              This could be a bank loan (a charge), a court order, or a caveat.
              A land search will reveal these issues. Some sellers might try to
              convince you to buy land with a charge, promising to clear the
              loan with your money. This is a high-risk gamble that can lead to
              you losing both the land and your money if the seller defaults.
            </p>
            <h3 class="text-2xl font-semibold">Critical Details to Verify:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Check for "Charges":</strong> This indicates the land is
                collateral for a loan.
              </li>
              <li>
                <strong>Caveats:</strong> This means a third party has made a
                claim on the property.
              </li>
              <li>
                <strong>Court Orders:</strong> Land disputes under litigation.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Never, ever buy land with a
              caveat or charge on it. A clean title is the only title worth
              buying. It's our golden rule for a reason."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Essential Red Flags to Watch Out For
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Beyond the specific scams, there are general warning signs that
              should trigger your alarm bells. A seller who insists on a
              cash-only transaction, refuses to use an official legal
              professional, or has a history of questionable dealings is someone
              to avoid. Trust your gut—if something feels off, it probably is.
              The goal is to be a vigilant buyer, not a paranoid one.
            </p>
            <h3 class="text-2xl font-semibold">Red Flags Checklist:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Cash-Only Deals:</strong> Avoid any seller who demands
                cash without an official bank transfer or lawyer's escrow.
              </li>
              <li>
                <strong>No Official Professionals:</strong> Refusal to involve
                lawyers or a licensed surveyor.
              </li>
              <li>
                <strong>No Physical Verification:</strong> Hesitancy to show you
                the physical property and its beacons.
              </li>
              <li>
                <strong>No Paper Trail:</strong> Lack of proper records,
                receipts, and communication.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "A transparent transaction leaves
              a clear paper trail. If a seller is avoiding this, they have
              something to hide. Always insist on proper documentation and
              professional oversight."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1554904576-9d62d3a0882e"
              alt="An alarm bell ringing, symbolizing a warning"
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
          5. The Role of a Professional Partner
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1543286392-f049d5870b20"
              alt="A team of professionals collaborating with a client"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Your best defense against fraud is to involve professionals from
              the very beginning. A licensed real estate agent, a reputable
              lawyer, and a professional surveyor are not just expenses—they are
              your insurance policy. They have the expertise and the tools to
              navigate the complexities of the Eldoret land registry, conduct a
              thorough search, and ensure every step of the transaction is
              legally sound and transparent.
            </p>
            <h3 class="text-2xl font-semibold">Who to Trust:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Licensed Agent:</strong> A professional who understands
                the market and the due diligence process.
              </li>
              <li>
                <strong>Real Estate Lawyer:</strong> A legal expert to draft
                contracts and handle all transfers.
              </li>
              <li>
                <strong>Registered Surveyor:</strong> To physically verify the
                land's beacons and boundaries.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Don't go it alone. The
              minimal cost of professional fees is nothing compared to the
              potential loss of your entire investment to a scammer."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-6"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          6. Why NexaRealty is Your Safe Harbor
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              At NexaRealty, we believe in a transparent and secure real estate
              process. Our licensed team conducts an in-depth due diligence on
              every property we list, including multiple land searches, physical
              verification, and legal vetting. By partnering with us, you are
              not just buying a property; you are gaining a team dedicated to
              protecting your investment from every conceivable risk. We handle
              the complexities so you can focus on your future.
            </p>
            <h3 class="text-2xl font-semibold">
              Our Commitment to Your Safety:
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Due Diligence:</strong> We do the hard work of
                verification for you.
              </li>
              <li>
                <strong>Transparency:</strong> We keep you informed at every
                step of the process.
              </li>
              <li>
                <strong>Expert Network:</strong> We work with trusted lawyers
                and surveyors.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "The best way to avoid the dark
              side of real estate is to have an expert guide you through it. Our
              reputation is built on the trust and security of our clients'
              investments."
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
          Conclusion: Vigilance is Your Greatest Asset
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The dark side of land buying in Eldoret is a real and present
            danger, but it is not a reason to shy away from investment. By
            arming yourself with knowledge, understanding the common scams, and
            partnering with a professional and trustworthy real estate agent
            like NexaRealty, you can navigate the market with confidence and
            ensure your investment is secure and prosperous.
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
