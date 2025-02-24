'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AlignJustify, X, LogOut } from 'lucide-react';
import { NavbarLink } from '@/types/navbar';
import { useUser } from '@/context/UserContext';

interface NavbarProps {
  logoLight?: string;
  logoDark?: string;
  links: NavbarLink[];
  textColorLight?: string;
  textColorDark?: string;
  dynamicLogo?: boolean;
}

export default function Navbar({
  logoLight = '/logoBlanc.svg',
  logoDark = '/logoBlack.svg',
  links,
  textColorLight = 'text-white',
  textColorDark = 'text-black',
  dynamicLogo = true,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logo = dynamicLogo ? (isScrolled ? logoDark : logoLight) : logoDark;
  const textColor = dynamicLogo
    ? isScrolled
      ? textColorDark
      : textColorLight
    : textColorDark;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-10 h-16 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      } `}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto h-full">
        {/* Logo */}
        <Image src={logo} alt="Logo" width={180} height={50} />

        {/* Bouton pour le menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X size={30} className={`text-black ${textColor}`} />
          ) : (
            <AlignJustify size={30} className={`text-black ${textColor}`} />
          )}
        </button>

        {/* Liens de navigation */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          {links.map((link) => (
            <li key={link.href} className={textColor}>
              <Link
                href={link.href}
                className={
                  link.label === 'Signin'
                    ? 'px-4 py-2 rounded-full bg-[#a8797f] text-white font-semibold shadow-md hover:bg-[#926368] transition-all'
                    : 'hover:text-primary flex items-center gap-2'
                }
              >
                {link.label === 'Signin' ? 'Connexion' : link.label}
              </Link>
            </li>
          ))}

          {/* Bouton de déconnexion (s'affiche uniquement si l'utilisateur est connecté) */}
          {user && (
            <li>
              <span
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 rounded-full  text-black  hover:text-[#926368] transition-all"
              >
                <LogOut size={16} />
              </span>
            </li>
          )}
        </ul>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-80 bg-secondary z-20 flex flex-col items-center space-y-6 pb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 focus:outline-none"
          >
            <X size={30} className="text-black" />
          </button>
          <ul className="text-xl font-medium flex flex-col items-center space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    link.label === 'Signin'
                      ? 'w-full px-4 py-2 mt-4 rounded-full bg-[#a8797f] text-white font-semibold shadow-md hover:bg-[#926368] transition-all text-center'
                      : 'hover:text-primary text-black flex items-center gap-2'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label === 'Signin' ? 'Connexion' : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
