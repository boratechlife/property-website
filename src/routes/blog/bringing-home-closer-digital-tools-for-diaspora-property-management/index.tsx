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
            Bringing Home Closer: Digital Tools for Diaspora Property Management
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A guide to the essential digital tools and strategies the Kenyan
            diaspora can use to manage their real estate investments in Eldoret
            and Uasin Gishu.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div
          class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <h2
            class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center"
          >
            <span class="mr-2">💻</span> The Digital Bridge to Uasin Gishu
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            The dream of building a home or a portfolio in Uasin Gishu is strong
            for many Kenyans abroad. Yet, managing a property from thousands of
            miles away can feel daunting. The good news is that technology has
            bridged this gap, making it easier and more secure than ever to
            oversee your investments. In this post, we'll explore the key
            digital tools and practices that empower you to stay in control,
            ensuring your property is not just an asset, but a source of peace
            of mind.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400"
        >
          <li>
            <a href="#section-1" class="hover:underline"
              >1. Cloud-Based Document Management</a
            >
          </li>
          <li>
            <a href="#section-2" class="hover:underline"
              >2. Mobile Banking and Online Payments</a
            >
          </li>
          <li>
            <a href="#section-3" class="hover:underline"
              >3. Remote Communication & Video Conferencing</a
            >
          </li>
          <li>
            <a href="#section-4" class="hover:underline"
              >4. Property Management Platforms</a
            >
          </li>
          <li>
            <a href="#section-5" class="hover:underline"
              >5. The NexaRealty Advantage</a
            >
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400"
        >
          1. Cloud-Based Document Management
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
              alt="A person working on a laptop in a modern office"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div
            class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The single most crucial step is digitizing all your important
              property documents. From your title deed and sale agreements to
              survey maps and payment receipts, having secure, accessible
              digital copies is non-negotiable. Using cloud services like Google
              Drive, Dropbox, or OneDrive ensures your documents are safe from
              physical damage and accessible from anywhere, anytime.
            </p>
            <h3 class="text-2xl font-semibold">Key Checks:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Secure Storage:</strong> Use strong passwords and
                two-factor authentication.
              </li>
              <li>
                <strong>Organized Files:</strong> Create a clear folder
                structure e.g., "Property Name  Legal Docs," "Property Name >
                Receipts".
              </li>
              <li>
                <strong>Regular Backups:</strong> Ensure you have multiple
                backups of critical files.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We provide our clients with
              a dedicated, secure online portal where all contracts, reports,
              and financial statements are stored and accessible 24/7. It's the
              central hub for your entire investment."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400"
        >
          2. Mobile Banking & Online Payments
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Managing your property's finances is simplified with mobile
              banking apps and online payment platforms. You can easily pay for
              utilities, transfer funds to a trusted property manager, or pay
              county taxes without needing to be physically present. M-Pesa is a
              cornerstone of this, allowing instant, traceable payments, while
              modern banking apps provide comprehensive transaction histories.
            </p>
            <h3 class="text-2xl font-semibold">The Professional Advantage:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Traceable Transactions:</strong> All payments leave a
                digital trail, providing accountability.
              </li>
              <li>
                <strong>Convenience:</strong> Pay bills and manage funds at any
                time, from any location.
              </li>
              <li>
                <strong>Budgeting:</strong> Easily track all income and expenses
                for better financial oversight.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We handle all financial
              transactions for our managed properties through secure, traceable
              channels. Every cent is accounted for, and our clients receive
              detailed, regular financial reports."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1521743722238-d6e52e5008d5"
              alt="A person using a smartphone to make a payment"
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
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400"
        >
          3. Remote Communication & Video Conferencing
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1523961168434-738b556b6a22"
              alt="A team of professionals on a video conference call"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div
            class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Physical distance can make it difficult to visualize your
              property's progress or condition. Video calls on platforms like
              WhatsApp or Zoom have become powerful tools for virtual site
              visits. You can get real-time updates from a property manager,
              tour a potential investment, or review a contractor's work as it
              happens. This direct visual contact builds confidence and ensures
              nothing is left to imagination.
            </p>
            <h3 class="text-2xl font-semibold">What to Verify:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Virtual Tours:</strong> Request live video walkthroughs
                of the property.
              </li>
              <li>
                <strong>Project Updates:</strong> Use video to review
                construction progress with your team.
              </li>
              <li>
                <strong>Direct Contact:</strong> Hold regular video check-ins
                with your property manager.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We leverage video technology
              to give our diaspora clients a clear, real-time view of their
              assets. It's the next best thing to being there in person."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400"
        >
          4. Property Management Platforms
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div
            class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The most sophisticated way to manage your property is through a
              dedicated platform. These platforms offer a centralized hub for
              tracking rental income, managing tenant requests, scheduling
              maintenance, and generating financial reports. While some are
              global, many real estate companies, like NexaRealty, are
              developing their own local solutions tailored for the Kenyan
              market, integrating with local payment systems and regulations.
            </p>
            <h3 class="text-2xl font-semibold">The Ultimate Advantage:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Centralized Hub:</strong> A single platform for all
                property-related information.
              </li>
              <li>
                <strong>Automated Reports:</strong> Receive automatic, detailed
                financial and performance reports.
              </li>
              <li>
                <strong>Efficiency:</strong> Streamline communication with
                tenants and service providers.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Our clients have access to a
              bespoke management platform that integrates document storage,
              financial tracking, and real-time communication, providing a truly
              hands-off investment experience."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-d289b7e7c3b2"
              alt="A professional looking at a dashboard on a laptop"
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
        <h2
          class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400"
        >
          5. The NexaRealty Advantage
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="Two business partners shaking hands to close a deal"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div
            class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While these tools are powerful, they are most effective when used
              in partnership with a trusted local expert. NexaRealty's
              full-service property management and sales solutions are built to
              integrate with these digital tools, offering you a single point of
              contact on the ground. We become your eyes and ears, ensuring your
              property is cared for, your tenants are happy, and your investment
              is growing, all while you focus on your life abroad.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>On-the-Ground Presence:</strong> We handle all physical
                inspections and tenant interactions.
              </li>
              <li>
                <strong>Full Transparency:</strong> Regular reports and
                real-time updates via our digital portal.
              </li>
              <li>
                <strong>Peace of Mind:</strong> We take the burden of daily
                management off your shoulders.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We bridge the physical
              distance with trust and technology. Your investment is our
              priority, and we use every tool available to ensure its success."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Your Property, Your Control
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The days of managing an investment property from afar with anxiety
            are over. With the right digital tools and a trusted partner like
            NexaRealty, you can maintain full control and transparency over your
            assets in Uasin Gishu. Embrace technology, and bring your dream of a
            secure investment back home closer than ever before.
          </p>
          <div
            class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center"
          >
            <h3
              class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4"
            >
              Manage Your Uasin Gishu Property with Confidence
            </h3>
            <p class="text-lg mb-6">
              Let NexaRealty's experts be your trusted on-the-ground partners.
              We combine local expertise with digital tools for a seamless
              experience.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Start Your Hassle-Free Management Journey
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
