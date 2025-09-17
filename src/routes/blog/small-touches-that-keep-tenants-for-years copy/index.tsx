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
            Small Touches That Keep Tenants for Years
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            It's often the little things that make the biggest difference. Learn
            how simple gestures can build trust and loyalty, turning short-term
            renters into long-term occupants.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🤝</span> The True Cost of Tenant Turnover
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            Finding a new tenant is time-consuming and expensive. It involves
            cleaning, marketing, showing the property, and vetting new
            applicants. The financial and emotional toll can be significant.
            This is why landlord success in Eldoret is often measured not by how
            many tenants you find, but by how many you keep. Great tenant
            relationships are built on trust, respect, and a landlord's genuine
            care. You don't have to break the bank to show your appreciation;
            sometimes, it's the small, consistent gestures that matter most.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Power of Proactive Communication
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Thoughtful Welcome and Farewell Gestures
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Small Upgrades That Have a Big Impact
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Be Flexible and Reasonable
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The NexaRealty Advantage: Professional Tenant Management
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Power of Proactive Communication
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549721733-f72b212f86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8Y2l0eSUyMG1hcHxlbnwwfHx8fDE3MTcwMDYwMDJ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person using a laptop with a notification icon on the screen, symbolizing communication"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Good communication is the cornerstone of any healthy relationship,
              and the landlord-tenant dynamic is no exception. Instead of only
              hearing from you when there's an issue, tenants appreciate a
              landlord who keeps them informed. Send a quick message to let them
              know about planned maintenance, or check in to see if everything
              is going well a few months into their lease. This proactive
              approach shows you care about their living experience and helps
              prevent small problems from becoming big ones.
            </p>
            <h3 class="text-2xl font-semibold">Key Communication Tips:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Be Responsive:</strong> Reply to messages and calls
                promptly. Acknowledging a request is often as important as
                solving it.
              </li>
              <li>
                <strong>Stay Transparent:</strong> Communicate any changes to
                the property or tenancy agreement clearly and in writing.
              </li>
              <li>
                <strong>Use a Consistent Channel:</strong> Agree on a primary
                communication method (WhatsApp, email, or calls) to avoid
                confusion.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We've found that landlords
              who communicate proactively build a far stronger rapport with
              their tenants. It's a simple investment in the relationship that
              pays off immensely."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Thoughtful Welcome and Farewell Gestures
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The tenant relationship starts the moment they move in. A simple
              welcome basket with a few essentials like soap, cleaning supplies,
              and a small snack can make a huge first impression. It shows
              you've thought of their needs and are happy to have them.
              Similarly, a small gesture of appreciation upon their departure,
              like a "thank you" note, leaves them with a positive final
              impression, encouraging good word-of-mouth referrals.
            </p>
            <h3 class="text-2xl font-semibold">Ideas for Welcoming Tenants:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Welcome Basket:</strong> A small kit with coffee, tea,
                and local Eldoret snacks.
              </li>
              <li>
                <strong>A Guide to the Area:</strong> A short list of nearby
                amenities, transport options, and emergency contacts.
              </li>
              <li>
                <strong>Small Plant:</strong> A low-maintenance houseplant adds
                a touch of life and beauty.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "First impressions are
              everything. We help our landlords curate simple but impactful
              welcome packages that set a positive tone from day one."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1579684385153-f728c0fe1415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNXx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHx8fDE3MTcwMDYxMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A house key with a keychain, symbolizing a warm welcome to a new home"
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
          3. Small Upgrades That Have a Big Impact
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1555943015-84061a7a24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8cHJvZmVzc2lvbmFsJTIwc29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzE4OTAyNDk4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person painting a wall to show a home renovation or improvement"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              You don't need a full renovation to keep a property fresh. Small,
              low-cost upgrades can make a big difference. Think about replacing
              a worn-out showerhead, upgrading to energy-efficient light bulbs,
              or repainting a feature wall. These gestures show tenants that
              you're committed to maintaining a high-quality living space. A
              well-cared-for home is a reflection of a caring landlord, which
              encourages tenants to treat the property with respect and stay
              longer.
            </p>
            <h3 class="text-2xl font-semibold">Cost-Effective Upgrades:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Fix Leaks & Drips:</strong> Resolving these issues saves
                the tenant money and prevents damage.
              </li>
              <li>
                <strong>Upgrade Light Fixtures:</strong> Modern fixtures can
                drastically improve the look and feel of a room.
              </li>
              <li>
                <strong>Landscaping:</strong> Simple maintenance of the front
                garden or common areas makes the whole property more appealing.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "We advise our clients that a
              small investment in maintenance today can prevent a major vacancy
              cost tomorrow. A happy tenant is a profitable asset."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Be Flexible and Reasonable
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Life happens. Sometimes a tenant might need a few extra days to
              pay rent or want to discuss a small modification to the property.
              By being flexible and understanding in these situations, you build
              immense goodwill. A rigid, "by the book" approach can feel
              impersonal and drive tenants to seek a more accommodating
              landlord. Show that you view them as people, not just a source of
              income, and they will likely be more loyal to you in return.
            </p>
            <h3 class="text-2xl font-semibold">Ways to Show Flexibility:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Grace Period for Rent:</strong> Consider a short,
                agreed-upon grace period for late payments on a one-off basis.
              </li>
              <li>
                <strong>Allow Minor Modifications:</strong> Be open to small
                changes like painting a wall, as long as it is done
                professionally.
              </li>
              <li>
                <strong>Open to Dialogue:</strong> Show a willingness to listen
                and find solutions together.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Our best landlords in Eldoret
              are those who understand that being fair and flexible creates a
              relationship of mutual respect. This is the foundation of
              long-term tenancy."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542435503-9d0426c483a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw5fHxzb2NpYWwlMjBtZWRpYSUyMGZlZWQlMjBhbmQlMjBpbnRlcmFjdGlvbnN8ZW58MHx8fHwxNzE4OTAyNzY2fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Two people shaking hands over a contract, symbolizing trust and agreement"
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
          5. The NexaRealty Advantage: Professional Tenant Management
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1557426172-0cf9650a6566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw1fHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzE4OTAyNzkyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A team of professionals collaborating around a table, representing a property management team"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While you can certainly implement these small touches yourself,
              the reality of being a landlord is that it's often a full-time
              job. NexaRealty offers professional property management services
              that handle all of these details for you. From proactive
              maintenance and timely communication to lease management and
              tenant relations, we ensure your tenants feel valued and cared
              for, leading to higher retention rates and a stress-free
              experience for you. We take care of the small touches so you can
              focus on the big picture.
            </p>
            <h3 class="2xl font-semibold">How We Build Trust:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>24/7 Availability:</strong> Our team is always on call
                for maintenance requests and emergencies.
              </li>
              <li>
                <strong>Fair Practices:</strong> We ensure all tenant
                interactions are fair, transparent, and professional.
              </li>
              <li>
                <strong>Consistent Communication:</strong> We keep both you and
                your tenant in the loop at all times.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our goal is to make every
              tenant feel like they have a professional, responsive partner in
              their living space. That's the secret to keeping them for years."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Invest in Your Relationships
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Ultimately, a successful rental property is about more than just a
            building; it's about the people who live in it. By putting in a
            little extra effort and investing in the relationship with your
            tenants, you can create a positive and lasting partnership. These
            small touches reduce turnover, increase your bottom line, and make
            the entire landlord experience more rewarding. NexaRealty is here to
            help you every step of the way, providing the professional support
            you need to succeed.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Build a Better Tenant Experience with NexaRealty
            </h3>
            <p class="text-lg mb-6">
              Ready to improve your tenant retention and grow your investment?
              Contact us today to learn about our professional property
              management services.
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
