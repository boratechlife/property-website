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
            How to Market Your Rental on Social Media Without Looking Desperate
          </h1>
          <p
            id="heroSubtitle"
            class="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Learn to leverage social media like a professional to attract
            quality tenants for your Eldoret property, building a brand instead
            of just a listing.
          </p>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div class="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
            <span class="mr-2">📈</span> Beyond the 'For Rent' Sign
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            In today's digital age, a simple 'For Rent' sign isn't enough.
            Social media platforms like Facebook, Instagram, and even local
            WhatsApp groups are powerful tools for reaching a wide audience of
            potential tenants in Eldoret. However, the way you present your
            property online makes all the difference. An effective social media
            strategy is about more than just posting a picture; it’s about
            crafting a professional image that attracts the right kind of tenant
            and builds trust. The goal is to make your property stand out as a
            desirable home, not an empty space you’re struggling to fill.
          </p>
        </div>
      </section>

      <section id="toc" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <h2 class="text-2xl font-bold mb-6">Table of Contents</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-primary-600 dark:text-primary-400">
          <li>
            <a href="#section-1" class="hover:underline">
              1. Build a Professional Online Persona
            </a>
          </li>
          <li>
            <a href="#section-2" class="hover:underline">
              2. The Power of High-Quality Visuals
            </a>
          </li>
          <li>
            <a href="#section-3" class="hover:underline">
              3. Write Compelling and Informative Descriptions
            </a>
          </li>
          <li>
            <a href="#section-4" class="hover:underline">
              4. Engage Strategically and Professionally
            </a>
          </li>
          <li>
            <a href="#section-5" class="hover:underline">
              5. The Ultimate Professional Advantage with NexaRealty
            </a>
          </li>
        </ul>
      </section>

      <section
        id="section-1"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-primary-600 dark:text-primary-400">
          1. Build a Professional Online Persona
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1555943015-84061a7a24c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwyMHx8cHJvZmVzc2lvbmFsJTIwc29jaWFsJTIwbWVkaWElMjBtYXJrZXRpbmd8ZW58MHx8fHwxNzE4OTAyNDk4fDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A laptop screen displaying social media logos on a desk"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Before you post your first picture, decide how you will present
              yourself. It is far more professional to create a separate page or
              profile specifically for your properties rather than using your
              personal account. This keeps your private life separate and makes
              you look more like a serious business owner. Use a clear,
              professional profile photo and a bio that states you manage
              properties in Eldoret. Consistency is key across all platforms.
            </p>
            <h3 class="text-2xl font-semibold">Key Best Practices:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Dedicated Page:</strong> Create a business page on
                platforms like Facebook to list your rentals.
              </li>
              <li>
                <strong>Clear Bio:</strong> Specify the areas you serve, like
                "Eldoret's premier property rentals."
              </li>
              <li>
                <strong>Consistent Branding:</strong> Use a professional logo or
                a consistent profile picture and cover photo.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "A professional online
              presence is the first step in building a strong brand. It shows
              potential tenants you are a reliable and serious landlord, not a
              desperate one."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-2"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          2. The Power of High-Quality Visuals
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              This is arguably the most crucial step. Blurry, dark, or cluttered
              photos will instantly turn off potential tenants. Before you
              shoot, clean and stage the property. Take photos in good natural
              light, from different angles, showcasing the best features of each
              room. Consider a short, well-edited video tour to give a more
              immersive feel. Remember, your visuals are the first
              impression—make it count.
            </p>
            <h3 class="text-2xl font-semibold">What to Feature:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Bright & Clear Photos:</strong> Use high-resolution
                images taken during the day.
              </li>
              <li>
                <strong>Video Tours:</strong> A simple walkthrough video can
                generate significantly more interest.
              </li>
              <li>
                <strong>Highlight Key Spaces:</strong> Focus on the living area,
                kitchen, bedrooms, and any unique amenities.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "We invest in professional
              photography and virtual tours for every property we manage. It's
              not an expense; it's an investment that pays off with faster
              occupancy and higher rental rates."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f1127027c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHwxOXx8bW9kZXJuJTIwYXBhcnRtZW50JTIwaW50ZXJpb3IlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTg5MDI1ODV8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A well-lit, stylish living room in a modern apartment"
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
          3. Write Compelling and Informative Descriptions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1616401089294-d2e16d47454f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw3fHxkZXRhaWxlZCUyMHdyaXRpbmclMjBvbiUyMGElMjBub3RlYm9va3xlbnwwfHx8fDE3MTg5MDI2NjF8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A person meticulously writing a detailed list on a notebook"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Your caption should do more than just state the number of
              bedrooms. Use a clear and engaging tone. Start with a catchy
              headline, then list all the key features and amenities in a
              readable format (like bullet points). Highlight the benefits of
              the location—its proximity to key Eldoret spots like Moi
              University, Rupa's Mall, or the CBD. Be transparent about the
              rental price and deposit. A detailed, well-written post shows you
              respect the tenant's time and are serious about finding a good
              fit.
            </p>
            <h3 class="text-2xl font-semibold">
              Essential Details to Include:
            </h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Property Type & Size:</strong> e.g., "Spacious 2-bedroom
                apartment."
              </li>
              <li>
                <strong>Monthly Rent & Deposit:</strong> Be upfront about the
                costs.
              </li>
              <li>
                <strong>Key Amenities:</strong> Mention things like a secure
                compound, parking, water availability, and Wi-Fi access.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "A great description sells
              the lifestyle, not just the property. We paint a picture of what
              it's like to live there, which attracts a higher caliber of
              tenant."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-4"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-accent-600 dark:text-accent-400">
          4. Engage Strategically and Professionally
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              Once you post, be prepared to engage. Respond to comments and
              direct messages promptly and politely. Avoid posting in too many
              groups repeatedly, as this can be seen as spam and make you look
              desperate. Instead, choose a few high-quality, relevant
              Eldoret-focused groups and post once or twice a week. When someone
              asks a question, answer it clearly and invite them to continue the
              conversation in private messages to protect their privacy and
              manage inquiries efficiently.
            </p>
            <h3 class="text-2xl font-semibold">Engagement Tips:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Be Timely:</strong> Respond to inquiries within a few
                hours to show you are attentive.
              </li>
              <li>
                <strong>Polite & Professional:</strong> Maintain a respectful
                and helpful tone, even if the question is simple.
              </li>
              <li>
                <strong>Avoid Spam:</strong> Quality over quantity. Targeted
                posts are more effective than mass-posting.
              </li>
            </ul>
            <p>
              <strong>Expert Insight:</strong> "Effective social media marketing
              is about building a relationship with potential tenants. We manage
              inquiries professionally, saving our clients time and ensuring a
              smooth process from the first message to the lease signing."
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1542435503-9d0426c483a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw5fHxzb2NpYWwlMjBtZWRpYSUyMGZlZWQlMjBhbmQlMjBpbnRlcmFjdGlvbnxlbnwwfHx8fDE3MTg5MDI3NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="People scrolling through a social media feed on their phones"
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
          5. The Ultimate Professional Advantage with NexaRealty
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="order-1">
            <img
              src="https://images.unsplash.com/photo-1557426172-0cf9650a6566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTUwOTR8MHwxfHNlYXJjaHw1fHxyZWFsJTIwZXN0YXRlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzE4OTAyNzkyfDA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="A team of real estate agents collaborating around a table"
              class="rounded-lg shadow-xl loading"
              loading="lazy"
            />
          </div>
          <div class="order-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <h3 class="text-2xl font-semibold">The Rundown:</h3>
            <p>
              While DIY social media marketing can be effective, it is also
              time-consuming and requires a consistent effort. By partnering
              with NexaRealty, you hand over this responsibility to a team of
              professionals who are experts in the Eldoret market. We handle
              everything from professional photography and strategic ad
              campaigns to tenant screening and seamless communication. Our goal
              is to present your property in the best possible light, ensuring
              you attract the highest quality tenants with minimal effort on
              your part.
            </p>
            <h3 class="2xl font-semibold">Our Services Include:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>
                <strong>Professional Marketing:</strong> We create and manage
                digital campaigns across all relevant platforms.
              </li>
              <li>
                <strong>Meticulous Tenant Screening:</strong> Our process
                ensures you get reliable and trustworthy tenants.
              </li>
              <li>
                <strong>Stress-Free Management:</strong> We handle all
                inquiries, showings, and legal paperwork on your behalf.
              </li>
            </ul>
            <p>
              <strong>NexaRealty Insight:</strong> "Our professional marketing
              ensures your property gets seen by the right people, and our
              management services ensure you get the right people in your
              property. It's the best of both worlds."
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-conclusion"
        class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-8">
          Conclusion: Market Smart, Not Hard
        </h2>
        <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Social media is a powerful tool for finding tenants, but it's a tool
            that must be used professionally. By focusing on high-quality
            visuals, detailed descriptions, and strategic engagement, you can
            make your Eldoret rental property stand out in a crowded market. If
            the time and effort seem daunting, remember that a professional
            partner like NexaRealty can handle all of this for you, ensuring
            your property is marketed perfectly and managed seamlessly. Your
            investment deserves a professional touch.
          </p>
          <div class="bg-accent-50 dark:bg-accent-900 p-8 rounded-xl shadow-lg text-center">
            <h3 class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-4">
              Get a Professional Marketing Plan for Your Rental
            </h3>
            <p class="text-lg mb-6">
              Ready to attract the best tenants with a flawless social media
              presence? Contact us today to see how we can help.
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
