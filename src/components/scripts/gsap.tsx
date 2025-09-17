import { component$, useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export const GSAPScript = component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Dark mode functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById(
      'darkModeToggleMobile'
    );
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
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

    // Mobile menu functionality
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

    // Close mobile menu when clicking on links
    mobileMenu?.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        gsap.to(mobileMenu, {
          y: '-100%',
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
        mobileMenuOpen = false;
      }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    ScrollTrigger.create({
      start: 'top -80',
      onToggle: (self) => {
        if (self.isActive) {
          navbar.classList.add('nav-blur');
          gsap.to(navbar, {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            duration: 0.3,
          });
        } else {
          navbar.classList.remove('nav-blur');
          gsap.to(navbar, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            duration: 0.3,
          });
        }
      },
    });

    // Hero animations
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
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        '#heroCTA',
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.3'
      )
      .from(
        '#trustIndicators',
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.2'
      );

    // Services section animations
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '#services',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // Why choose us animations
    gsap.from('#why-choose .group', {
      scrollTrigger: {
        trigger: '#why-choose',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // Stats counter animation
    const stats = document.querySelectorAll('#why-choose .text-3xl');
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
      const suffix = stat.textContent.replace(/[\d]/g, '');

      ScrollTrigger.create({
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
                stat.textContent = Math.round(this.targets()[0].value) + suffix;
              },
            }
          );
        },
      });
    });

    // Testimonials animations
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '#testimonials',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    });

    // About section animations
    gsap.from('#about .grid > div', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
      },
      x: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out',
    });

    // Contact form animations
    gsap.from('#contactForm > *', {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
      },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation
      const formData = new FormData(contactForm);
      const formObject = Object.fromEntries(formData);

      // Simple validation
      if (!formObject.firstName || !formObject.lastName || !formObject.email) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formObject.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;

      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      // Simulate API call
      setTimeout(() => {
        alert(
          "Thank you! Your message has been sent. We'll get back to you soon."
        );
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: target,
              offsetY: 80,
            },
            ease: 'power2.out',
          });
        }
      });
    });

    // Parallax effect for hero section
    gsap.to('.hero-pattern', {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Loading animation
    window.addEventListener('load', () => {
      gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    });

    // Intersection Observer for lazy loading images
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('loading');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      imageObserver.observe(img);
    });

    // Add scroll progress indicator
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

    // Your animation logic here
    console.log('GSAP from npm ready!');
  });

  return null;
});
