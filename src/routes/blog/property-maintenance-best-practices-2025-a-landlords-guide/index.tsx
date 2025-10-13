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
            How to Verify a Land Title Deed in Eldoret Before You Buy
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A step-by-step guide to conducting a thorough land search and using
            the new Ardhisasa platform to protect your investment.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">📝</span> The Crucial First Step: Due Diligence
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Buying land is a significant financial commitment, and nowhere is
            this more true than in the rapidly developing real estate market of
            Eldoret. The first and most critical step to securing your
            investment is verifying the authenticity and ownership of the land's
            title deed. A fake or encumbered title can lead to legal battles,
            financial loss, and the loss of your dream property. This guide will
            walk you through the modern process, highlighting how you can
            leverage the Ardhisasa platform to make a secure and confident
            purchase.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Getting the Right Documents from the Seller
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The Online Land Search: Ardhisasa Platform
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. What to Look for in the Search Results
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Physical Verification: The Surveyor's Role
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Lawyer's Vetting & Sale Agreement
            </a>
          </li>
          <li>
            <a href="#section-6" class="hover:underline">
              6. Why NexaRealty is Your Partner in Due Diligence
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Getting the Right Documents from the Seller
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
              Your journey begins with the seller. A legitimate seller should be
              transparent and willing to provide you with the necessary
              documents to conduct a thorough search. If they are hesitant,
              consider it a major red flag. You will need a copy of the **title
              deed**, the seller’s **National ID**, and their **KRA PIN**. These
              are the keys to unlocking the official ownership and legal status
              of the land.
            </p>
            <h3 class="text-2xl font-semibold">Key Takeaway:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Title Deed:</strong> Insist on a clear, legible copy of
                the title deed.
              </li>
              <li>
                <strong>Personal IDs:</strong> The seller's ID and KRA PIN are
                essential for identity verification.
              </li>
              <li>
                <strong>No Compromise:</strong> Do not proceed without these
                documents.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Many fraudulent transactions
              start because the buyer is too trusting. Always get the documents
              first, verify them, and then proceed. It's the only way to be
              safe."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The Online Land Search: The Ardhisasa Platform
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Ardhisasa is the government's official online platform for land
              services in Kenya, including the Uasin Gishu County Land Registry
              (which covers Eldoret). This digital system has made the land
              search process faster and more transparent. Instead of visiting
              the physical office, you can now conduct a search from the comfort
              of your home or office.
            </p>
            <h3 class="text-2xl font-semibold">Steps on Ardhisasa:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Register an Account:</strong> Create a personal account
                on Ardhisasa with your ID and KRA PIN.
              </li>
              <li>
                <strong>Request a Search:</strong> Go to "Land Registration,"
                select "Search," and input the **Title Number** provided by the
                seller.
              </li>
              <li>
                <strong>Receive the Report:</strong> After paying a small fee,
                the system generates an official search report instantly,
                revealing the current ownership and any encumbrances.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "The Ardhisasa platform is a
              game-changer. It eliminates the need for middlemen and provides an
              official, verifiable digital record. Every Eldoret land buyer must
              know how to use it."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1621213459972-749e7552542a"
              alt="A person typing on a laptop with legal documents scattered on the desk"
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
          3. What to Look for in the Search Results
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1510936371876-0275a2d603e9"
              alt="A person highlighting a document with a yellow marker, focusing on important details"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The search report is a goldmine of information. It will confirm
              the name of the registered owner, the land's size, and any legal
              issues. Scrutinize this document carefully. This is where you will
              find the truth behind the title deed and the land's status.
            </p>
            <h3 class="text-2xl font-semibold">Critical Details to Verify:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Registered Owner:</strong> Does the name on the report
                match the seller's ID?
              </li>
              <li>
                <strong>Encumbrances:</strong> Is there a charge (loan), a
                caveat (a claim), or a court order listed against the land?
              </li>
              <li>
                <strong>Land Size & Location:</strong> Does the size and
                location on the report match what you were shown?
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "A clean search report is
              what you're looking for. Any caveat, charge, or discrepancy in
              ownership is a definite deal-breaker. It means the land is not
              free for sale."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Physical Verification: The Surveyor's Role
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              A land search only confirms the legal status. You must also
              physically confirm the property's boundaries on the ground. A
              professional, licensed surveyor will help you identify the land's
              beacons and verify that the physical plot matches the measurements
              in the title deed and search report.
            </p>
            <h3 class="text-2xl font-semibold">Why You Need a Surveyor:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Boundary Disputes:</strong> A surveyor helps prevent
                future arguments with neighbors over land boundaries.
              </li>
              <li>
                <strong>Size Confirmation:</strong> They ensure the plot is the
                exact size stated in the documents.
              </li>
              <li>
                <strong>Beacon Establishment:</strong> They can re-establish
                lost or tampered-with beacons.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Don't skip the survey. A title
              deed is useless if you can't identify the land it refers to. The
              cost of a surveyor is a small price to pay for peace of mind."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1554904576-9d62d3a0882e"
              alt="A surveyor's instrument on a tripod in a field with land beacons in the background"
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
          5. The Lawyer's Vetting & Sale Agreement
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1543286392-f049d5870b20"
              alt="A lawyer and a client reviewing a contract with a pen and a calculator"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Once you've done the initial verification, a lawyer must take
              over. They will perform their own due diligence, verify all
              documents, and draft a legally binding Sale Agreement. This
              document protects both you and the seller and outlines the terms
              of the transaction, including payment schedules and
              responsibilities.
            </p>
            <h3 class="text-2xl font-semibold">The Lawyer's Checklist:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Document Review:</strong> A final verification of the
                title deed, search report, and survey report.
              </li>
              <li>
                <strong>Sale Agreement:</strong> Drafting a comprehensive
                contract that protects your interests.
              </li>
              <li>
                <strong>Title Transfer:</strong> Overseeing the transfer of the
                title deed into your name at the Land Registry.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "A lawyer isn't just an
              expense; they're an insurance policy for your investment. Their
              expertise is invaluable in avoiding legal and financial pitfalls."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-6"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          6. Why NexaRealty is Your Partner in Due Diligence
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The process of verifying a land title deed can be overwhelming for
              a first-time buyer. NexaRealty's licensed team specializes in
              navigating Eldoret's land registry, Ardhisasa, and all legal and
              logistical procedures. We offer a full-service package that
              includes document verification, land searches, and liaison with
              surveyors and legal professionals, ensuring your transaction is
              secure and seamless.
            </p>
            <h3 class="text-2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>End-to-End Management:</strong> We manage the entire due
                diligence process for you.
              </li>
              <li>
                <strong>Local Expertise:</strong> Our team has an in-depth
                understanding of Eldoret's land market and regulations.
              </li>
              <li>
                <strong>Risk Mitigation:</strong> We identify and address
                potential red flags before they become problems.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Your peace of mind is our
              priority. With NexaRealty, you're not just buying land; you're
              buying a secure future. Our professional services guarantee the
              authenticity of your investment."
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
          Conclusion: Your Safety is in the Details
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Verifying a land title deed in Eldoret is a non-negotiable step for
            any serious buyer. By following these steps—from obtaining the right
            documents to using Ardhisasa and involving professionals—you can
            make a truly informed decision. Don't leave your life savings to
            chance. The time and effort invested in due diligence will protect
            you from fraud and ensure your land ownership is secure.
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
