'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AlignJustify, X } from 'lucide-react';
import { navbarLinks } from '../data/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-10 h-16 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto h-full">
        <Image
          className="mt-4"
          src={isScrolled ? '/logoBlack.svg' : '/logoBlanc.svg'}
          alt="Logo"
          width={180}
          height={50}
        />
        {/* Bouton pour ouvrir le menu sur mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 md:hidden focus:outline-none"
        >
          {isOpen ? <X size={30} /> : <AlignJustify size={30} />}
        </button>
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navbarLinks.map((link) => (
            <li
              key={link.href}
              className={isScrolled ? 'text-black' : 'text-white'}
            >
              <a href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-secondary z-20 flex flex-col items-center justify-center space-y-6">
          <ul className="text-xl font-medium">
            {navbarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-primary"
                  onClick={() => setIsOpen(false)} // Ferme le menu au clic
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
