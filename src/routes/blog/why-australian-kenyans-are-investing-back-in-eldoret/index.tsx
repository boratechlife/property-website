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
            From Down Under to Uasin Gishu: Why Australian-Kenyans Are Investing
            Back Home
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Exploring the compelling reasons behind the surge in real estate
            investments from the Uasin Gishu diaspora in Australia, and what
            makes Eldoret a prime destination for their capital.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">🏡</span> A Bridge Between Two Worlds
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            The Uasin Gishu diaspora in Australia represents a growing community
            of individuals who have built successful lives abroad but remain
            deeply connected to their roots. This dual identity—thriving in a
            developed economy while holding a strong cultural tie to
            home—creates a unique investment dynamic. For many, investing in
            land in Eldoret is not just a financial decision; it's a way to
            secure a future, build a legacy, and maintain a tangible link to
            family and community. This article explores the key drivers behind
            this rush to buy land back home and why Eldoret has become a focal
            point.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. The Financial Advantage of Foreign Earnings
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. Eldoret's Growth: A Future-Proof Investment
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. The Emotional & Cultural Anchor
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Overcoming Distance: The Role of Trust & Technology
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Ultimate Asset: Why Land is the Target
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
          1. The Financial Advantage of Foreign Earnings
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="Kenyan Shillings and Australian Dollars on a table"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The strength of the Australian Dollar against the Kenyan Shilling
              provides a significant advantage for diaspora investors. Every
              dollar saved and sent home is amplified, allowing them to purchase
              larger plots of land or more premium properties than their local
              counterparts. This financial leverage, combined with the stable
              income streams from their careers in Australia, makes real estate
              in Eldoret an incredibly attractive, high-return investment
              vehicle.
            </p>
            <h3 class="text-2xl font-semibold">Key Features:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Exchange Rate:</strong> Favorable conversion rates
                magnify purchasing power.
              </li>
              <li>
                <strong>Economic Stability:</strong> Stable earnings in
                Australia provide a secure base for investment.
              </li>
              <li>
                <strong>High ROI:</strong> Real estate in Eldoret offers a much
                higher potential for capital appreciation than in many parts of
                Australia.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "For our clients in
              Australia, every investment is a strategic move. The numbers
              simply make sense, and we help them maximize that financial
              advantage for a strong return."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. Eldoret's Growth: A Future-Proof Investment
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Eldoret is no longer just a stopover town; it's a rapidly
              expanding economic and educational hub. The county's growing
              population, fueled by institutions like Moi University and the
              Eldoret International Airport, creates a high demand for housing
              and commercial spaces. For the diaspora, this represents a unique
              opportunity to invest in a growing economy, securing not just land
              but a stake in the future development of their home county.
            </p>
            <h3 class="text-2xl font-semibold">Strategic Appeal:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Devolution Dividend:</strong> Increased government
                investment in local infrastructure.
              </li>
              <li>
                <strong>Strategic Location:</strong> A logistics hub for the
                North Rift and Great Lakes region.
              </li>
              <li>
                <strong>Educational Hub:</strong> A large student population
                drives demand for rental properties.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Eldoret's growth trajectory is
              undeniable. The diaspora sees this and is strategically
              positioning themselves to benefit from the long-term appreciation
              and rental income opportunities."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b868"
              alt="A modern commercial building in Eldoret"
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
          3. The Emotional & Cultural Anchor
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1621213459972-749e7552542a"
              alt="A family standing in front of a new house"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Beyond the spreadsheets and market analysis, there is a powerful
              emotional driver. Owning a piece of land in Uasin Gishu is about
              building a connection to home. It's an act of securing a place for
              one's family, a potential future home for retirement, or a legacy
              to pass on to the next generation. It's a way to feel involved in
              the community and contribute to the local economy, even from
              thousands of miles away.
            </p>
            <h3 class="text-2xl font-semibold">The Value Proposition:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Family Security:</strong> Creating a safe and secure
                future for family members back home.
              </li>
              <li>
                <strong>Retirement Planning:</strong> Investing in a place to
                call home when they return.
              </li>
              <li>
                <strong>Legacy Building:</strong> Establishing a lasting asset
                for future generations.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Many of our clients in
              Australia tell us that buying land is about more than money—it's
              about peace of mind. We provide the security that their investment
              is safe and their dreams are being protected."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Overcoming Distance: The Role of Trust & Technology
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              The biggest barrier for a diaspora investor is the fear of being
              scammed. With modern technology and a trusted local partner, this
              fear is being mitigated. Professionals on the ground can use
              digital platforms to share documents, conduct virtual site visits,
              and provide real-time updates. This transparency, backed by a
              licensed and reputable real estate firm, builds the trust needed
              to bridge the physical gap between Australia and Eldoret.
            </p>
            <h3 class="text-2xl font-semibold">How the Gap is Closed:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Virtual Tours:</strong> High-quality video and photo
                updates.
              </li>
              <li>
                <strong>Digital Documentation:</strong> Secure sharing of legal
                documents and receipts.
              </li>
              <li>
                <strong>Real-time Communication:</strong> Regular updates via
                WhatsApp, email, and video calls.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Our clients trust us because we
              provide full transparency. Every step, from land search to title
              transfer, is fully documented and shared, giving them complete
              confidence in their investment."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1543286392-f049d5870b20"
              alt="Two business people in a video conference call"
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
          5. The Ultimate Asset: Why Land is the Target
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1549646849-01127027582c"
              alt="An investor reviewing a land map and documents"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While other investment opportunities exist, land remains the most
              sought-after asset for the Uasin Gishu diaspora. Unlike other
              investments, land is a tangible asset that cannot be destroyed or
              easily devalued. It provides a sense of permanent ownership and
              offers multiple future possibilities, from residential development
              to commercial ventures or agricultural use. It's a foundational
              investment that opens doors to many other opportunities.
            </p>
            <h3 class="text-2xl font-semibold">The Investment Checklist:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Tangibility:</strong> A physical asset that provides a
                sense of security.
              </li>
              <li>
                <strong>Versatility:</strong> Can be used for residential,
                commercial, or agricultural purposes.
              </li>
              <li>
                <strong>Growth Potential:</strong> Land in Eldoret has a proven
                history of appreciation.
              </li>
              <li>
                <strong>Multi-Generational Asset:</strong> A legacy that can be
                passed down.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Land is the ultimate safe
              haven for capital. Our role is to ensure that the land they buy is
              not only safe but also has the highest potential for growth."
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
              The key to a successful diaspora investment is having a trusted,
              licensed partner on the ground. NexaRealty specializes in serving
              the unique needs of clients abroad, providing a seamless and
              secure end-to-end service. From conducting due diligence and
              vetting properties to managing legal paperwork and transfers, we
              ensure your investment journey from Australia to Eldoret is not
              only profitable but also completely risk-free.
            </p>
            <h3 class="text-2xl font-semibold">How We Help:</h3>
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
              <strong>Expert Insight:</strong> "For our Australian clients, we
              are more than just an agent; we are their eyes and ears on the
              ground, protecting their interests and turning their dreams into
              reality."
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
          Conclusion: The Time is Now
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            The Uasin Gishu diaspora in Australia is realizing that there's no
            better time to invest in Eldoret's real estate market. With
            favorable economics, a booming local economy, and the powerful pull
            of home, their investments are a testament to the city's bright
            future. By partnering with a trusted professional like NexaRealty,
            you can make a secure investment that not only grows your wealth but
            also strengthens your connection to the community you call home.
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
