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
            How to Evict a Tenant in Kenya Without Breaking the Law
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive guide for landlords on navigating the legal process
            of eviction in Eldoret, ensuring a fair and lawful outcome for all
            parties involved.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-red-50 dark:bg-red-950 p-8 rounded-xl shadow-lg border border-red-200 dark:border-red-900">
          <h2 class="text-2xl font-bold mb-4 text-red-800 dark:text-red-300 flex items-center">
            <span class="mr-2">⚠️</span> Important Disclaimer
          </h2>
          <p class="text-lg text-red-700 dark:text-red-200">
            This article is for informational purposes only and does not
            constitute legal advice. Landlord-tenant laws in Kenya are complex
            and can change. For specific advice regarding your situation, it is
            highly recommended to consult with a qualified legal professional or
            a property management firm like NexaRealty.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Legal Framework: Why It Matters
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Legally Valid Reasons for Eviction
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. The Notice Period and Formal Procedure
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. What to Do After the Notice Period
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Golden Rules: Eviction Do's and Don'ts
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. The Legal Framework: Why It Matters
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1579684385153-f728c0fe1415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8bGF3JTIwYWN0JTIwa2VueWF8ZW58MHx8fHwxNzE5NzIyMTU3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A judge's gavel on a stack of legal papers"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              In Kenya, the relationship between a landlord and tenant is
              governed by the Landlord and Tenant Act, as well as specific
              provisions in the Constitution. This legal framework is designed
              to protect the rights of both parties. For a landlord,
              understanding and strictly adhering to this law is not just a best
              practice—it is essential to avoid lengthy, costly legal battles
              and potential fines. An unlawful eviction can turn a simple
              problem into a major liability.
            </p>
            <p>
              <strong>Expert Insight:</strong> "Many landlords think they can
              bypass the law when a tenant defaults. In reality, following the
              correct legal process from the start is the fastest and safest
              path to regaining possession of your property."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Legally Valid Reasons for Eviction
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              You cannot evict a tenant without a valid reason. The law is very
              clear on what constitutes a legal ground for eviction. The most
              common and legally sound reason is **non-payment of rent**. Other
              valid reasons include a serious breach of the tenancy agreement,
              using the property for illegal activities, or causing significant
              damage to the property. It is crucial to have documented evidence
              for your reason before proceeding.
            </p>
            <h3 class="text-2xl font-semibold">Key Valid Reasons:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Rent Arrears:</strong> This is the most common reason,
                but it must be clearly documented.
              </li>
              <li>
                <strong>Breach of Contract:</strong> For example, unauthorized
                subletting or keeping pets when the agreement prohibits it.
              </li>
              <li>
                <strong>Illegal Activities:</strong> Using the premises for
                criminal purposes.
              </li>
              <li>
                <strong>Owner's Occupation:</strong> If the owner or their
                family requires the premises for personal use (with specific
                legal requirements).
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "For every landlord, the
              tenancy agreement is your most important document. Ensure it's
              watertight and that you have a paper trail for any issues. This is
              your foundation."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542435503-9d0426c483a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxNXx8Y29udHJhY3RzfGVufDB8fHx8MTcxOTcyMjU0MHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person pointing at a clause in a contract"
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
          3. The Notice Period and Formal Procedure
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1555943015-84061a7a24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxMHx8ZXZpY3Rpb24lMjBub3RpY2V8ZW58MHx8fHwxNzE5NzIyMTU3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A letter with an eviction notice stamp on a desk"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Once you have a valid reason, you must serve the tenant with a
              formal, written eviction notice. The type and length of the notice
              depend on the tenancy agreement. For a month-to-month tenancy, a
              30-day notice is standard. The notice must state the reason for
              eviction and give the tenant a clear timeframe to comply.
              Crucially, the notice should be delivered in a manner that can be
              proven, such as registered mail or with a witness present.
            </p>
            <p>
              <strong>NexaRealty Insight:</strong> "A properly drafted notice is
              the first and most critical step. Any procedural error here can be
              grounds for a tenant to challenge the eviction in court, delaying
              the process significantly."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. What to Do After the Notice Period
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              If the tenant has not vacated the property after the notice period
              has elapsed, you must not resort to self-help measures. The law
              explicitly prohibits landlords from physically removing tenants,
              locking them out, or disconnecting essential services like water
              and electricity. Your next step is to apply to the relevant court,
              such as the Rent Restriction Tribunal or the Environment and Land
              Court, for an eviction order. The court will then issue a formal
              order to the tenant to vacate the premises, which can be enforced
              by a court bailiff.
            </p>
            <p>
              <strong>Expert Insight:</strong> "Patience is key at this stage.
              It may be frustrating, but taking the matter to court is the only
              legal way to proceed. Any shortcuts will inevitably lead to more
              problems."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1549721733-f72b212f86e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8Y291cnRob3VzZSUyMGJ1aWxkaW5nfGVufDB8fHx8MTcxOTcyMjU4NHww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A courthouse building facade, symbolizing legal proceedings"
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
          5. The Golden Rules: Eviction Do's and Don'ts
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1517457211156-f61b369527e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxMHx8ZXZpY3Rpb24lMjBjaGVja2xpc3R8ZW58MHx8fHwxNzE5NzIyMTU3fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A checklist with a pen, emphasizing the importance of following a process"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              To summarize, the key to a legal eviction is to act professionally
              and responsibly. A minor misstep can put you in a vulnerable legal
              position. Always assume the matter will end up in court and act
              accordingly—document everything and follow the correct procedures
              at every turn.
            </p>
            <h3 class="text-2xl font-semibold">Do's and Don'ts:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>DO</strong> keep a paper trail of all communications and
                payments.
              </li>
              <li>
                <strong>DO</strong> issue a formal, written notice with the
                correct notice period.
              </li>
              <li>
                <strong>DO</strong> seek a court order if the tenant refuses to
                leave.
              </li>
              <li>
                <strong>DON'T</strong> attempt to remove the tenant by force.
              </li>
              <li>
                <strong>DON'T</strong> cut off water, electricity, or other
                essential services.
              </li>
              <li>
                <strong>DON'T</strong> take possession of the tenant's
                belongings.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Professionalism is your
              greatest asset. By acting within the law, you not only protect
              yourself but also uphold the reputation of your property and the
              integrity of your business."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Protect Your Investment, Follow the Law
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Dealing with a difficult tenant is challenging, but taking illegal
            shortcuts will only create more headaches. The legal process, while
            it may seem slow, is designed to provide a definitive and lawful
            resolution. For Eldoret landlords seeking a stress-free experience,
            professional property management is the answer. NexaRealty can
            handle all aspects of tenant management, including the proper
            handling of evictions, ensuring you are always on the right side of
            the law.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Ensure Your Property is Legally Managed
            </h3>
            <p class="text-lg mb-6">
              Don't risk legal trouble. Our expert team ensures all your
              landlord-tenant interactions are compliant and professional.
            </p>
            <a
              href="index.html#contact"
              class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Get Professional Property Management
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
