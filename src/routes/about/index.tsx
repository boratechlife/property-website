import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Header } from '~/components/common/header';
import { Footer } from '~/components/common/footer';
import { HeroSection } from '~/components/sections/hero-section';
import { AboutSection } from '~/components/sections/about-section';
import { StatsSection } from '~/components/sections/stats-section';
import { ServicesSection } from '~/components/sections/services-section';
import { WhyChooseUsSection } from '~/components/sections/why-choose-us-section';
import { TeamSection } from '~/components/sections/team-section';
import { TestimonialSection } from '~/components/sections/testimonial-section';
import { CtaSection } from '~/components/sections/cta-section';

export default component$(() => {
  return (
    <div class="min-h-screen bg-white">
      <main>
        {/* <HeroSection /> */}
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TeamSection />
        <TestimonialSection />
        <CtaSection />
      </main>
    </div>
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
