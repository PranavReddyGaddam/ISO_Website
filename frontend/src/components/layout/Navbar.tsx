"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Leadership", href: "/leadership" },
  { name: "About Us", href: "/about" },
  
];

// Simple SVG Icons
const MenuIcon = () => (
  <svg
    className="block h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="block h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down (after 100px)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Only show navbar when near the top of the page (within 200px)
      else if (currentScrollY < 200) {
        setIsVisible(true);
      }
      // Keep navbar hidden when scrolling up but not near top
      else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
         <nav
       className={`bg-transparent sticky top-0 z-50 transition-transform duration-300 ${
         isVisible ? "translate-y-0" : "-translate-y-full"
       }`}
     >
       <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8">
         <div className="relative flex items-center justify-center h-14 sm:h-16">
           {/* Logo - Positioned absolutely on the left */}
           <div className="absolute left-0 flex items-center">
             <Link href="/" className="flex items-center group relative">
               <div className="relative">
                 <span className="font-aeonik text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider bg-gradient-to-br from-saffron to-gold bg-clip-text text-black/70 dark:text-white/70">
                   Indian Student Organization
                 </span>
                 <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-saffron to-gold group-hover:w-full transition-all duration-500 ease-out"></div>
                 <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 transition-all duration-500 bg-gradient-to-r from-saffron to-gold rounded"></div>
               </div>
             </Link>
           </div>

           {/* Desktop Navigation - Centered */}
           <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 ml-16 xl:ml-60">
             {navigation.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-1 relative group"
               >
                 {item.name}
                 <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-saffron to-gold group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
               </Link>
             ))}
           </div>

           {/* Tablet Navigation - Centered with menu button */}
           <div className="hidden md:flex lg:hidden items-center space-x-6 ml-12">
             {navigation.slice(0, 4).map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:-translate-y-1 relative group"
               >
                 {item.name}
                 <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-saffron to-gold group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
               </Link>
             ))}
             <button
               type="button"
               className="text-gray-700 hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron p-1"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               <span className="sr-only">Open main menu</span>
               {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
             </button>
           </div>

           {/* Mobile menu button - Positioned absolutely on the right */}
           <div className="md:hidden absolute right-0 flex items-center">
             <button
               type="button"
               className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron p-1"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               <span className="sr-only">Open main menu</span>
               {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
             </button>
           </div>
        </div>
      </div>

             {/* Mobile Navigation */}
       {mobileMenuOpen && (
         <div className="md:hidden">
           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
             {navigation.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="text-gray-700 dark:text-gray-300 hover:text-saffron dark:hover:text-saffron block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
           </div>
         </div>
       )}
    </nav>
  );
}
