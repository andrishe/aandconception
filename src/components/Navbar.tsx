'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AlignJustify, X } from 'lucide-react';
import { navbarLinks } from '../data/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between px-10 items-center fixed w-full top-0 left-0 bg-white z-10">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-start">
          <Image src="/annd.svg" alt="Logo" width={150} height={50} />
        </div>

        <div className="md:hidden flex items-center justify-end relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center focus:outline-none"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>

        <ul
          className={`md:flex text-xl font-roboto font-medium md:justify-evenly md:items-center md:gap-10 ${
            isOpen ? 'block space-y-4 mt-10' : 'hidden'
          }`}
        >
          {navbarLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
