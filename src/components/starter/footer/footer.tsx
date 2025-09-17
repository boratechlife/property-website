import { component$ } from '@builder.io/qwik';
import { useServerTimeLoader } from '../../../routes/layout';

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <>
      <style>{`
        .footer-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        }
        
        .footer-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-link:hover {
          transform: translateX(4px);
        }
        
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .footer-link:hover::after {
          width: 100%;
        }
        
        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-icon:hover {
          transform: translateY(-2px);
          filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3));
        }
        
        .logo-glow {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.2));
        }
        
        .section-divider {
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
          height: 1px;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #f8fafc, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .status-pulse {
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);
          }
        }
      `}</style>

      <footer class="footer-gradient relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div class="absolute inset-0 opacity-5">
          <div
            class="absolute top-0 left-0 w-full h-full"
            style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0);
                      background-size: 40px 40px;"
          ></div>
        </div>

        {/* Content */}
        <div class="relative py-16">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Brand Section - Enhanced */}
              <div class="lg:col-span-5 fade-in-up">
                <div class="flex items-center space-x-3 mb-6">
                  <div class="relative">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center logo-glow transform rotate-3">
                      <svg
                        class="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur"></div>
                  </div>
                  <span class="text-2xl font-bold text-gradient">
                    NexaRealty
                  </span>
                </div>

                <p class="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                  Premium property management services delivered with
                  transparency, expertise, and unwavering commitment to
                  excellence.
                </p>

                {/* Enhanced Social Links */}
                <div class="flex items-center space-x-4">
                  <span class="text-sm text-slate-500 font-medium">
                    Connect
                  </span>
                  <div class="w-px h-4 bg-slate-700"></div>
                  <div class="flex space-x-4">
                    {[
                      {
                        icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                        label: 'Twitter',
                      },
                      {
                        icon: 'M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.12 20.452H3.555V9h3.564v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm15.11 13.019h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z',
                        label: 'LinkedIn',
                      },
                      {
                        icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.174.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.744-1.378l-.598 2.111c-.214.828-.791 1.863-1.176 2.498 1.043.313 2.151.481 3.304.481 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z',
                        label: 'Instagram',
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        class="w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-xl flex items-center justify-center social-icon border border-slate-700/50"
                      >
                        <svg
                          class="w-4 h-4 text-slate-300 hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Sections - Refined */}
              <div class="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Services */}
                <div class="fade-in-up" style="animation-delay: 0.1s">
                  <h3 class="text-white text-sm font-semibold tracking-wider uppercase mb-6 relative">
                    Services
                    <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
                  </h3>
                  <ul class="space-y-3">
                    {[
                      { text: 'Rent Collection', href: '/rent-collection' },
                      {
                        text: 'Commercial Management',
                        href: '/commercial-property-management',
                      },
                      { text: 'Plot Listing', href: '/plot-listing' },
                      {
                        text: 'Residential Management',
                        href: '/residential-property-management',
                      },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          class="footer-link text-slate-400 hover:text-white text-sm font-medium"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div class="fade-in-up" style="animation-delay: 0.2s">
                  <h3 class="text-white text-sm font-semibold tracking-wider uppercase mb-6 relative">
                    Company
                    <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
                  </h3>
                  <ul class="space-y-3">
                    {[
                      { text: 'About Us', href: '/about' },
                      { text: 'Testimonials', href: '/why-choose-us' },
                      { text: 'Contact', href: '/contact' },
                      { text: 'Articles', href: '/blog' },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          class="footer-link text-slate-400 hover:text-white text-sm font-medium"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div class="fade-in-up" style="animation-delay: 0.3s">
                  <h3 class="text-white text-sm font-semibold tracking-wider uppercase mb-6 relative">
                    Legal
                    <div class="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent rounded-full"></div>
                  </h3>
                  <ul class="space-y-3">
                    {[
                      { text: 'Privacy Policy', href: '#' },
                      { text: 'Terms of Service', href: '#' },
                      { text: 'Cookie Policy', href: '#' },
                      { text: 'Licensing', href: '#' },
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          class="footer-link text-slate-400 hover:text-white text-sm font-medium"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Enhanced Bottom Section */}
            <div class="section-divider mt-16 mb-8"></div>
            <div
              class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 fade-in-up"
              style="animation-delay: 0.4s"
            >
              <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <p class="text-slate-500 text-sm font-medium">
                  © 2025 NexaRealty. All rights reserved.
                </p>
                <div class="flex items-center space-x-3">
                  <div class="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/50">
                    <span class="text-xs text-slate-400 font-medium">
                      Licensed under Cap 533
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <span class="text-slate-500 text-sm font-medium">
                  Licensed Property Management
                </span>
                <div class="relative">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full status-pulse"></div>
                  <div class="absolute inset-0 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});
