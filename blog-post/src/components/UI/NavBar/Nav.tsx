'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiArrowRight, FiChevronRight } from "react-icons/fi";
import WebsiteLogo from "../../../../public/images/logo/logo.jpg";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pages = [
    { id: 1, name: "home", link: "/" },
    { id: 2, name: "news", link: "/news" },
    { id: 3, name: "podcasts", link: "/podcasts" },
    { id: 4, name: "resources", link: "/resources" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Newsletter Banner - Only shows when not scrolled */}
      {!scrolled && (
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-center py-2 text-sm text-black font-medium">
          Subscribe to our newsletter for new & latest blogs and resources
          <button className="ml-2 font-bold hover:underline">Join now</button>
        </div>
      )}

      {/* Main Navigation - Sticky Top */}
      <nav className={`bg-[#141414] border-b border-[#2a2a2a] sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-yellow-400 group-hover:border-yellow-300 transition-colors">
                <Image
                  src={WebsiteLogo}
                  alt="futureTech logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="ml-3 text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                Future<span className="text-yellow-400">Tech</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-1">
                {pages.map((value) => (
                  <Link 
                    href={value.link} 
                    key={value.id}
                    className="relative capitalize px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                  >
                    {value.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
              <Link 
                href="/contact" 
                className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-400 text-[#141414] px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us <FiArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#2a2a2a] focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Full-screen Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-[#0f0f0f] overflow-y-auto">
            {/* Animated backdrop */}
            <div className="absolute inset-0 bg-[#141414] opacity-95"></div>
            
            {/* Mobile menu content */}
            <div className="relative z-10 min-h-screen flex flex-col">
              {/* Header with close button */}
              <div className="flex justify-between items-center p-4 border-b border-[#2a2a2a]">
                <Link href="/" className="flex items-center group" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-yellow-400">
                    <Image
                      src={WebsiteLogo}
                      alt="futureTech logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="ml-3 text-xl font-bold text-white">
                    Future<span className="text-yellow-400">Tech</span>
                  </span>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-300 hover:text-white"
                  aria-label="Close menu"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              {/* Menu items with animations */}
              <div className="flex-grow p-6 space-y-6">
                {pages.map((value, index) => (
                  <Link 
                    href={value.link} 
                    key={value.id}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block group"
                    style={{ animation: `fadeInUp 0.3s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors">
                      <span className="text-lg font-medium text-white capitalize">{value.name}</span>
                      <FiChevronRight className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Contact CTA at bottom */}
              <div className="p-6 border-t border-[#2a2a2a]">
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-[#141414] px-6 py-3 rounded-lg text-lg font-bold transition-colors"
                >
                  Contact Us <FiArrowRight className="text-base" />
                </Link>
              </div>
            </div>

            {/* CSS for animations */}
            <style jsx global>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;