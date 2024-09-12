"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`sticky top-0 bg-white shadow-sm z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left links */}
          <div className="hidden md:flex space-x-6 flex-1 justify-end mr-10">
            <NavLink href="/about">About us</NavLink>
            <NavLink href="/adventure">Adventure</NavLink>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mx-6">
            <Link href="/" className="flex items-center">
              <Image src="/icon.ico" alt="Logo" width={60} height={60} />
            </Link>
          </div>

          {/* Right links */}
          <div className="hidden md:flex space-x-6 flex-1 ml-10">
            <NavLink href="/logbook">Logbook</NavLink>
            <NavLink href="/contact">Contact us</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/about" delay="delay-[100ms]">
              About us
            </MobileNavLink>
            <MobileNavLink href="/adventure" delay="delay-[200ms]">
              Adventure
            </MobileNavLink>
            <MobileNavLink href="/logbook" delay="delay-[300ms]">
              Logbook
            </MobileNavLink>
            <MobileNavLink href="/contact" delay="delay-[400ms]">
              Contact us
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center px-4 py-3 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  delay,
}: {
  href: string;
  children: React.ReactNode;
  delay: string;
}) => (
  <Link
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 animate-slideDown ${delay}`}
  >
    {children}
  </Link>
);

export default Navbar;
