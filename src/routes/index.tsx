import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import AboutNexa from '~/components/common/AboutNexa';
import ContactSection from '~/components/common/ContactSection';
import Services from '~/components/common/services';
import Testimonials from '~/components/common/testimonials';
import Whyus from '~/components/common/whyus';
import Hero from '~/components/starter/hero/hero';

export default component$(() => {
  return (
    <div class="relative">
      {/* <!-- Hero Section --> */}
      <Hero />

      {/* <!-- About Section --> */}
      <AboutNexa />
      {/* <!-- Services Section --> */}
      <Services />

      {/* <!-- Why Choose Us Section --> */}
      <Whyus />

      {/* <!-- Testimonials Section --> */}
      <Testimonials />

      {/* <!-- Contact Section --> */}
      <ContactSection />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'NexaRealty - Professional Property Management You Can Rely On',
  meta: [
    {
      name: 'description',
      content:
        'Professional property management services with transparent reporting, 24/7 support, and local market expertise. Licensed under Cap 533.',
    },
  ],
};
