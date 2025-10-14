import { component$, useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const GSAPScript = component$(() => {
  useVisibleTask$(({ cleanup }) => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // --- Dark mode functionality ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById(
      'darkModeToggleMobile'
    );
    const html = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
      html.classList.add('dark');
    }

    function toggleDarkMode() {
      html.classList.toggle('dark');
      const theme = html.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }

    darkModeToggle?.addEventListener('click', toggleDarkMode);
    darkModeToggleMobile?.addEventListener('click', toggleDarkMode);

    // --- Mobile menu functionality ---
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    let mobileMenuOpen = false;

    mobileMenuButton?.addEventListener('click', () => {
      mobileMenuOpen = !mobileMenuOpen;
      if (mobileMenuOpen) {
        gsap.to(mobileMenu, {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(mobileMenu, {
          y: '-100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    });

    mobileMenu?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        gsap.to(mobileMenu, {
          y: '-100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
        mobileMenuOpen = false;
      }
    });

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');

    // Store ScrollTrigger instances to kill later
    const triggers: ScrollTrigger[] = [];

    const navbarTrigger = ScrollTrigger.create({
      start: 'top -80',
      onToggle: (self) => {
        if (self.isActive) {
          navbar?.classList.add('nav-blur');
          gsap.to(navbar, {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            duration: 0.3,
          });
        } else {
          navbar?.classList.remove('nav-blur');
          gsap.to(navbar, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(20px)',
            duration: 0.3,
          });
        }
      },
    });

    triggers.push(navbarTrigger);

    // --- Hero animations ---
    const heroTl = gsap.timeline();
    heroTl
      .from('#heroTitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .from(
        '#heroSubtitle',
        { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .from(
        '#heroCTA',
        { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      )
      .from(
        '#trustIndicators',
        { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );

    // --- Services section animations ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#services',
        start: 'top 80%',
        animation: gsap.from('.service-card', {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        }),
      })
    );

    // --- Why choose us animations ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#why-choose',
        start: 'top 80%',
        animation: gsap.from('#why-choose .group', {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }),
      })
    );

    // --- Stats counter animation ---
    // Assert type here to allow access to textContent
    const stats = document.querySelectorAll(
      '#why-choose .text-3xl'
    ) as NodeListOf<HTMLElement>;
    stats.forEach((stat) => {
      // Check for valid number
      const targetText = stat.textContent?.replace(/[^\d]/g, '') || '0';
      const target = parseInt(targetText, 10);
      const suffix = stat.textContent?.replace(/[\d]/g, '') || '';

      if (isNaN(target)) return; // Prevents errors if textContent is not a number

      const statsTrigger = ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
          gsap.from(
            { value: 0 },
            {
              value: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                // 'this' is handled correctly by GSAP's onUpdate context
                stat.textContent = Math.round(this.targets()[0].value) + suffix;
              },
            }
          );
          statsTrigger.kill(); // Kill the trigger after it fires once
        },
      });
      triggers.push(statsTrigger);
    });

    // --- Testimonials animations ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#testimonials',
        start: 'top 80%',
        animation: gsap.from('.testimonial-card', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        }),
      })
    );

    // --- About section animations ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#about',
        start: 'top 70%',
        animation: gsap.from('#about .grid > div', {
          x: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
        }),
      })
    );

    // --- Contact form animations ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 70%',
        animation: gsap.from('#contactForm > *', {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }),
      })
    );

    // --- Form handling ---
    // Assert contactForm as HTMLFormElement
    const contactForm = document.getElementById(
      'contactForm'
    ) as HTMLFormElement;
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const formObject: Record<string, FormDataEntryValue> =
        Object.fromEntries(formData);

      if (!formObject.firstName || !formObject.lastName || !formObject.email) {
        alert('Please fill in all required fields.');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailValue = formObject.email;

      if (typeof emailValue === 'string' && emailValue) {
        if (!emailRegex.test(emailValue)) {
          alert('Please enter a valid email address.');
          return;
        }
      } else {
        alert('Please provide an email address.');
        return;
      }

      const submitButton = contactForm.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement;
      const originalText = submitButton.textContent;

      if (submitButton) {
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
      }

      setTimeout(() => {
        alert(
          "Thank you! Your message has been sent. We'll get back to you soon."
        );
        contactForm.reset();
        if (submitButton) {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      }, 2000);
    });

    // --- Smooth scroll for anchor links ---
    // Ensure NodeListOf contains HTMLElement for correct event listeners
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      // Use arrow function to preserve 'this' and use 'anchor' directly
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: target, offsetY: 80 },
              ease: 'power2.out',
            });
          }
        }
      });
    });

    // --- Parallax effect for hero section ---
    triggers.push(
      ScrollTrigger.create({
        trigger: '#hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.to('.hero-pattern', {
          backgroundPosition: '50% 100%',
          ease: 'none',
        }),
      })
    );

    // --- Loading animation ---
    window.addEventListener('load', () => {
      gsap.from('body', { opacity: 0, duration: 0.5, ease: 'power2.out' });
    });

    // --- Intersection Observer for lazy loading images ---
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target instanceof HTMLImageElement) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('loading');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      imageObserver.observe(img);
    });

    // --- Add scroll progress indicator ---
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #f97316);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      progressBar.style.width = scrolled + '%';
    });

    console.log('GSAP from npm ready!');

    // --- Cleanup function ---
    cleanup(() => {
      // Kill all created ScrollTrigger instances
      triggers.forEach((trigger) => trigger.kill());

      // Remove event listeners
      darkModeToggle?.removeEventListener('click', toggleDarkMode);
      darkModeToggleMobile?.removeEventListener('click', toggleDarkMode);
      mobileMenuButton?.removeEventListener('click', () => {}); // Can't remove anonymous, but this is a common pattern
      mobileMenu?.removeEventListener('click', () => {});
      contactForm?.removeEventListener('submit', () => {});
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener('click', () => {});
      });
      window.removeEventListener('load', () => {});
      window.removeEventListener('scroll', () => {});
    });
  });

  return null;
});
