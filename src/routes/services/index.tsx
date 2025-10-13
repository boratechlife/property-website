import {
  component$,
  useVisibleTask$,
  useStylesScoped$,
} from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default component$(() => {
  // Use useStylesScoped$ to keep styles local to this component.
  // This is a great way to handle CSS in Qwik.
  useStylesScoped$(`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');

    body {
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    h2 {
        font-family: 'Playfair Display', serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
    }

    .mesh-bg {
        background: linear-gradient(
            90deg,
            rgba(59, 130, 246, 0.02) 1px,
            transparent 1px
        ),
        linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: meshFloat 20s ease-in-out infinite;
    }

    @keyframes meshFloat {
        0%,
        100% {
            background-position: 0 0;
        }
        50% {
            background-position: 20px 20px;
        }
    }

    .service-card {
        position: relative;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .service-card::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        transition: 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 0;
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        border-radius: inherit;
    }

    .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }

    .service-card:nth-child(1)::before {
        clip-path: circle(calc(100px + 7.5vw) at 100% 100%);
    }

    .service-card:nth-child(2)::before {
        clip-path: circle(calc(100px + 7.5vw) at 0% 100%);
    }

    .service-card:nth-child(3)::before {
        clip-path: circle(calc(100px + 7.5vw) at 100% 0%);
    }

    .service-card:nth-child(4)::before {
        clip-path: circle(calc(100px + 7.5vw) at 0% 0%);
    }

    .service-card:hover::before {
        clip-path: circle(110vw at 50% 50%);
    }

    .service-card p {
        transition: color 0.8s ease;
    }

    .service-card:hover p {
        color: #ffffff;
    }

    .service-card:hover h3 {
        color: #ffffff;
    }

    .service-card:hover .tagline {
        color: #dbeafe;
    }

    .circle-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
        border-radius: inherit;
    }

    .service-card:nth-child(1) .circle-bg {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23dbeafe;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%233b82f6;stop-opacity:0.05" /></linearGradient></defs><rect width="400" height="300" fill="url(%23grad1)"/><circle cx="350" cy="250" r="80" fill="%233b82f6" opacity="0.1"/><circle cx="320" cy="220" r="40" fill="%231e40af" opacity="0.08"/></svg>') no-repeat center/cover;
        clip-path: circle(calc(100px + 7.5vw) at 100% 100%);
    }

    .service-card:nth-child(2) .circle-bg {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23dcfce7;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%2310b981;stop-opacity:0.05" /></linearGradient></defs><rect width="400" height="300" fill="url(%23grad2)"/><circle cx="50" cy="250" r="80" fill="%2310b981" opacity="0.1"/><circle cx="80" cy="220" r="40" fill="%23059669" opacity="0.08"/></svg>') no-repeat center/cover;
        clip-path: circle(calc(100px + 7.5vw) at 0% 100%);
    }

    .service-card:nth-child(3) .circle-bg {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f3e8ff;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%238b5cf6;stop-opacity:0.05" /></linearGradient></defs><rect width="400" height="300" fill="url(%23grad3)"/><circle cx="350" cy="50" r="80" fill="%238b5cf6" opacity="0.1"/><circle cx="320" cy="80" r="40" fill="%237c3aed" opacity="0.08"/></svg>') no-repeat center/cover;
        clip-path: circle(calc(100px + 7.5vw) at 100% 0%);
    }

    .service-card:nth-child(4) .circle-bg {
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23fef3c7;stop-opacity:0.1" /><stop offset="100%" style="stop-color:%23f59e0b;stop-opacity:0.05" /></linearGradient></defs><rect width="400" height="300" fill="url(%23grad4)"/><circle cx="50" cy="50" r="80" fill="%23f59e0b" opacity="0.1"/><circle cx="80" cy="80" r="40" fill="%23d97706" opacity="0.08"/></svg>') no-repeat center/cover;
        clip-path: circle(calc(100px + 7.5vw) at 0% 0%);
    }

    .floating-icon {
        animation: iconFloat 4s ease-in-out infinite;
    }

    @keyframes iconFloat {
        0%,
        100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-8px) rotate(2deg);
        }
    }

    .orbit-animation {
        animation: orbit 6s linear infinite;
    }

    @keyframes orbit {
        from {
            transform: rotate(0deg) translateX(35px) rotate(0deg);
        }
        to {
            transform: rotate(360deg) translateX(35px) rotate(-360deg);
        }
    }

    .pulse-glow {
        animation: pulseGlow 3s ease-in-out infinite;
    }

    @keyframes pulseGlow {
        0%,
        100% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
        }
        50% {
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.8);
        }
    }

    .gradient-text {
        background: linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        .service-card::before {
            clip-path: circle(calc(80px + 5vw) at 50% 100%) !important;
        }

        .service-card .circle-bg {
            clip-path: circle(calc(80px + 5vw) at 50% 100%) !important;
        }
    }
  `);

  // useVisibleTask$ is key here. It runs the client-side JavaScript (like GSAP)
  // ONLY when the component becomes visible in the viewport.
  useVisibleTask$(({ cleanup }) => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animations
    gsap.fromTo(
      '#subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '#main-title',
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.2,
        ease: 'power4.out',
      }
    );

    gsap.fromTo(
      '#description',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.service-card',
      { opacity: 0, y: 100, scale: 0.8, rotationY: -15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 1.4,
        stagger: {
          amount: 0.8,
          from: 'start',
          ease: 'power2.out',
        },
        ease: 'power4.out',
        delay: 0.6,
      }
    );

    gsap.to('.floating-icon', {
      y: -8,
      rotation: 2,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 1.5,
        from: 'random',
      },
    });

    gsap.fromTo(
      '#cta-button',
      { scale: 0, rotation: -270, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        delay: 2.5,
        ease: 'back.out(2)',
      }
    );

    ScrollTrigger.create({
      trigger: '#services',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to('.mesh-bg', {
          opacity: 0.3 + progress * 0.15,
          duration: 0.3,
        });
      },
    });

    // Hover interactions
    const serviceCards = document.querySelectorAll('.service-card');
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        duration: 0.4,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      gsap.to(card, {
        duration: 0.6,
        rotationX: 0,
        rotationY: 0,
        ease: 'power2.out',
      });
    };

    serviceCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Mobile optimizations
    if (window.innerWidth < 768) {
      gsap.set('.service-card', {
        transformPerspective: 800,
      });
    }

    // CTA button click handler
    const ctaButton = document.getElementById('cta-button');
    const handleCtaClick = () => {
      gsap.to(ctaButton, {
        scale: 0.92,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to(ctaButton, {
            boxShadow: '0 0 0 20px rgba(59, 130, 246, 0)',
            duration: 0.6,
            ease: 'power2.out',
          });
        },
      });
      console.log('Free Property Review requested - NexaRealty');
    };
    ctaButton?.addEventListener('click', handleCtaClick);

    // Cleanup function provided by useVisibleTask$
    cleanup(() => {
      ScrollTrigger.kill();
      serviceCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
      ctaButton?.removeEventListener('click', handleCtaClick);
    });
  });

  return (
    <section
      id="services"
      class="min-h-screen bg-gray-50/50 text-center py-20 px-8 xl:px-0 flex flex-col justify-center relative overflow-hidden"
    >
      <div class="absolute inset-0 mesh-bg opacity-30"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-white-100/10 via-white/10 to-white/90"></div>

      <div class="relative max-w-6xl mx-auto">
        <div class="mb-16">
          <span
            class="text-slate-800 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center"
            id="subtitle"
          >
            what we're offering
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="text-blue-500 ml-3 w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
          <h1
            class="text-blue-600 text-4xl md:text-5xl xl:text-6xl font-semibold max-w-4xl mx-auto mb-4 leading-snug"
            id="main-title"
          >
            Services Built Specifically for Kenyan Landlords
          </h1>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto" id="description">
            Licensed under Cap 533 — we manage properties so you don't have to.
          </p>
        </div>

        <div class="grid-offer text-left grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Service Card 1: Rent Collection */}
          <div class="service-card bg-slate-800 p-10 relative rounded-2xl">
            <div class="circle-bg rounded-2xl"></div>
            <div class="relative z-10 lg:pr-20">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 floating-icon">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <h3 class="capitalize text-white mb-4 text-2xl xl:text-3xl transition-colors duration-800">
                Rent Collection &<br />
                Accounting
              </h3>
              <p class="text-slate-400 mb-4 transition-colors duration-800">
                Automated rent collection with real-time tracking, late payment
                management, and comprehensive financial reporting for maximum
                efficiency.
              </p>
              <div class="tagline text-blue-400 font-semibold text-sm uppercase tracking-wide transition-colors duration-800">
                Rent on time, every time
              </div>
            </div>
          </div>

          {/* Service Card 2: Maintenance */}
          <div class="service-card bg-slate-800 p-10 relative rounded-2xl">
            <div class="circle-bg rounded-2xl"></div>
            <div class="relative z-10 lg:pl-20">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 floating-icon">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="capitalize text-white mb-4 text-2xl xl:text-3xl transition-colors duration-800">
                Property Maintenance &<br />
                Repair Coordination
              </h3>
              <p class="text-slate-400 mb-4 transition-colors duration-800">
                24/7 maintenance requests, vetted contractor network, and
                proactive property inspections to preserve and enhance your
                investment value.
              </p>
              <div class="tagline text-emerald-400 font-semibold text-sm uppercase tracking-wide transition-colors duration-800">
                Properties that last
              </div>
            </div>
          </div>

          {/* Service Card 3: Tenant Relations */}
          <div class="service-card bg-slate-800 p-10 relative rounded-2xl">
            <div class="circle-bg rounded-2xl"></div>
            <div class="relative z-10 lg:pr-20">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 floating-icon">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="capitalize text-white mb-4 text-2xl xl:text-3xl transition-colors duration-800">
                Tenant Relations &<br />
                Conflict Resolution
              </h3>
              <p class="text-slate-400 mb-4 transition-colors duration-800">
                Professional tenant screening, lease management, and diplomatic
                conflict resolution to maintain harmony and reduce vacancy
                rates.
              </p>
              <div class="tagline text-purple-400 font-semibold text-sm uppercase tracking-wide transition-colors duration-800">
                Happy tenants, happy landlords
              </div>
            </div>
          </div>

          {/* Service Card 4: Reporting */}
          <div class="service-card bg-slate-800 p-10 relative rounded-2xl">
            <div class="circle-bg rounded-2xl"></div>
            <div class="relative z-10 lg:pl-20">
              <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 floating-icon">
                <svg
                  class="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 class="capitalize text-white mb-4 text-2xl xl:text-3xl transition-colors duration-800">
                Advanced Reporting &<br />
                Business Intelligence
              </h3>
              <p class="text-slate-400 mb-4 transition-colors duration-800">
                Detailed monthly reports, occupancy analytics, ROI tracking, and
                market insights to help you make informed investment decisions.
              </p>
              <div class="tagline text-amber-400 font-semibold text-sm uppercase tracking-wide transition-colors duration-800">
                Data-driven decisions
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fixed bottom-8 right-8 z-50">
        <button
          id="cta-button"
          class="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl pulse-glow hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          Get Free Property Review
          <div class="absolute inset-0">
            <div class="orbit-animation absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2">
              <div class="w-3 h-3 bg-white rounded-full opacity-70"></div>
            </div>
            <div
              class="orbit-animation absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
              style="animation-delay: -2s"
            >
              <div class="w-2 h-2 bg-blue-200 rounded-full opacity-80"></div>
            </div>
            <div
              class="orbit-animation absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2"
              style="animation-delay: -4s"
            >
              <div class="w-2 h-2 bg-blue-100 rounded-full opacity-60"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'NexaRealty Services',
  meta: [
    {
      name: 'description',
      content:
        'NexaRealty provides comprehensive property management services for landlords in Kenya.',
    },
  ],
};
