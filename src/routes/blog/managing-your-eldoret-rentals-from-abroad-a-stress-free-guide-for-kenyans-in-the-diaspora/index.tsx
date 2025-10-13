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
            Managing Your Eldoret Rentals from Abroad: A Stress-Free Guide for
            Kenyans in the Diaspora
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Discover how to effectively manage your Eldoret rental properties
            from anywhere in the world, ensuring a profitable and hassle-free
            investment.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🌍</span> The Challenge: Bridging the Distance
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Kenyans living abroad, often referred to as the diaspora, are a
            significant driving force behind the country's real estate market.
            Investing back home is a powerful way to build wealth and secure a
            legacy. However, managing these properties from thousands of miles
            away can be a daunting task. From finding reliable tenants to
            handling unexpected repairs, the distance can create significant
            stress. This guide will provide a roadmap for overcoming these
            challenges and ensuring your Eldoret rental properties are a source
            of pride, not worry.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Finding a Reliable Property Management Partner
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Leveraging Technology for Transparency
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Vetting Tenants and Contracts from Afar
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Maintaining Your Property from Afar
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The NexaRealty Diaspora Solution
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Finding a Reliable Property Management Partner
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1544465492-7476834d852a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwzfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBoYW5kc2hha2V8ZW58MHx8fHwxNzE4ODMyMzU1fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Two business partners shaking hands over a desk"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The single most important step for a diaspora investor is
              partnering with a trustworthy and professional property management
              company. This partner acts as your eyes, ears, and hands on the
              ground. They are responsible for everything from marketing your
              property and screening tenants to collecting rent and handling
              maintenance issues. A good manager ensures your investment is not
              just protected but also performing at its peak potential, giving
              you peace of mind.
            </p>
            <h3 class="text-2xl font-semibold">Key Features to Look For:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Proven Track Record:</strong> Check for a solid
                reputation and positive client testimonials.
              </li>
              <li>
                <strong>Legal Expertise:</strong> They should have a deep
                understanding of Kenyan landlord-tenant laws.
              </li>
              <li>
                <strong>Transparent Reporting:</strong> Look for a company that
                provides regular, detailed financial statements.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our clients in the diaspora
              trust us because we operate with complete transparency. We provide
              a dedicated point of contact and regular updates on every aspect
              of their property's performance."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Leveraging Technology for Transparency
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              In today's digital world, distance is no longer a barrier to
              staying informed. A modern property management partner will use
              technology to provide you with real-time updates and full
              visibility into your property. This can include online portals for
              viewing financial reports, shared documents, and communication
              logs. The use of digital communication tools also makes it easy to
              approve repairs, discuss tenant issues, and receive your rental
              income directly to your bank account, no matter where you are.
            </p>
            <h3 class="text-2xl font-semibold">What to Expect:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Digital Reports:</strong> Access to monthly income and
                expense statements.
              </li>
              <li>
                <strong>Online Communication:</strong> Easy, documented
                communication through email or a dedicated portal.
              </li>
              <li>
                <strong>Direct Deposits:</strong> Automated transfer of rental
                income, providing a predictable cash flow.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Technology is a game-changer for
              diaspora investors. It builds trust and ensures you are always in
              the loop, even with a ten-hour time difference."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1620241031731-d82084742a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxiaXNpbmVzcyUyMHdvbWFuJTIwdXNpbmclMjBsYXB0b3AlMjB3aXRoJTIwZ2xvYmFsJTIwbWFwfGVufDB8fHx8MTcxODgzMjQzN3ww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A professional woman working on a laptop with a global map overlay"
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
          3. Vetting Tenants and Contracts from Afar
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1590409569651-fd7d14207907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwzMHx8cGFwZXJ3b3JrfGVufDB8fHx8MTcxODgzMjM5M3ww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Documents on a desk with a pen and glasses"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              One of the biggest risks of owning a rental property is getting a
              bad tenant. A good property manager will have a rigorous vetting
              process that includes background checks, employment verification,
              and reference calls. They will also handle the creation and
              execution of legally sound rental agreements, protecting your
              interests. With a professional partner, you can be confident that
              the person moving into your property is reliable, reducing the
              chances of late payments or property damage.
            </p>
            <h3 class="text-2xl font-semibold">Key Vetting Steps:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Thorough Screening:</strong> Verifying a potential
                tenant’s identity and financial stability.
              </li>
              <li>
                <strong>Comprehensive Leases:</strong> Using a clear,
                legally-binding contract that protects both parties.
              </li>
              <li>
                <strong>Deposit Management:</strong> Safely managing security
                deposits and ensuring compliance with regulations.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our tenant screening process
              is meticulous. We believe that a good tenant is the foundation of
              a successful rental investment, and we don't take any shortcuts."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Maintaining Your Property from Afar
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Property maintenance is a critical part of being a landlord, and
              it can be a major source of stress from a different country. A
              professional property management company will have a network of
              trusted local contractors and handymen to handle everything from
              plumbing issues to electrical faults. They can quickly address
              tenant requests and perform regular inspections, ensuring your
              property is always in excellent condition. This not only keeps
              your tenants happy but also preserves and enhances the long-term
              value of your investment.
            </p>
            <h3 class="text-2xl font-semibold">The Strategy:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Scheduled Inspections:</strong> Routine checks to
                identify and fix potential issues before they become major
                problems.
              </li>
              <li>
                <strong>Quick Response:</strong> Handling urgent tenant requests
                for repairs promptly and efficiently.
              </li>
              <li>
                <strong>Transparent Costs:</strong> Providing clear, itemized
                invoices for all maintenance work.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Proactive maintenance is far
              more cost-effective than reactive repairs. We ensure properties
              are well-cared for, protecting our clients' assets and
              reputation."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1627916664977-1c6f37910c28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw1fHxwcm9wZXJ0eSUyMG1haW50ZW5hbmNlfGVufDB8fHx8MTcxODgzMjM4OXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A technician inspecting a furnace in a residential home"
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
          5. The NexaRealty Diaspora Solution
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxMHx8cmVhbCUyMGVzdGF0ZSUyMGRlYWx8ZW58MHx8fHwxNzAxODg0NzY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Two business partners shaking hands to close a deal"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              At NexaRealty, we specialize in providing tailored property
              management solutions for Kenyans in the diaspora. We understand
              the unique challenges you face and have built a service designed
              to give you complete confidence and peace of mind. Our dedicated
              team handles every aspect of your property, from meticulous tenant
              screening to swift maintenance and transparent financial
              reporting. We use modern technology to keep you informed and make
              sure your investment is a rewarding part of your financial
              portfolio.
            </p>
            <h3 class="2xl font-semibold">How We Help:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>End-to-End Management:</strong> We handle all tasks, so
                you don't have to.
              </li>
              <li>
                <strong>Regular, Detailed Reporting:</strong> Get clear updates
                and financial statements on a regular basis.
              </li>
              <li>
                <strong>Personalized Communication:</strong> We assign a
                dedicated manager to your account for seamless communication.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our goal is simple: to make
              your Eldoret property a source of passive income, not a second
              job. We are your trusted partner on the ground."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Invest in Your Peace of Mind
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Investing in Eldoret's real estate from abroad is a wise financial
            decision, but it's one that requires the right support. By choosing
            a professional and transparent property management partner, you can
            overcome the challenges of distance and ensure your investment is
            secure and profitable. With NexaRealty, you gain a team that is
            committed to making your experience stress-free, so you can focus on
            what matters most.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Get Started with Stress-Free Management
            </h3>
            <p class="text-lg mb-6">
              Ready to hand over the management of your Eldoret property with
              confidence? Contact us today to learn how we can help.
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
