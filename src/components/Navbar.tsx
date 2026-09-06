'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlignJustify, LogOut, X } from 'lucide-react';
import { NavbarLink } from '@/types/navbar';
import { useUser } from '@/context/UserContext';

interface NavbarProps {
  links: NavbarLink[];
  /** Props conservées pour compatibilité avec les pages existantes. */
  logoLight?: string;
  logoDark?: string;
  textColorLight?: string;
  textColorDark?: string;
  dynamicLogo?: boolean;
}

export default function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-line'
          : 'bg-cream border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-screen-xl items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          className="font-serif text-lg font-bold uppercase tracking-[0.14em] text-ink md:text-xl"
        >
          Lataléaand
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  link.label === 'Signin'
                    ? 'rounded-full bg-ink px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-clay'
                    : 'text-sm text-inkSoft transition-colors hover:text-clay'
                }
              >
                {link.label === 'Signin' ? 'Connexion' : link.label}
              </Link>
            </li>
          ))}
        </ul>

        {user && (
          <button
            type="button"
            onClick={logout}
            aria-label="Se déconnecter"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-line text-inkSoft transition-colors hover:border-clay hover:text-clay lg:flex"
          >
            <LogOut size={16} />
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {isOpen ? <X size={26} /> : <AlignJustify size={26} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-line bg-cream px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    link.label === 'Signin'
                      ? 'mt-4 block rounded-full bg-ink py-3 text-center text-base font-medium text-cream'
                      : 'block border-b border-line/70 py-3 text-base text-inkSoft transition-colors hover:text-clay'
                  }
                >
                  {link.label === 'Signin' ? 'Connexion' : link.label}
                </Link>
              </li>
            ))}
          </ul>

          {user && (
            <button
              type="button"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-line py-3 text-sm text-inkSoft"
            >
              <LogOut size={16} />
              Se déconnecter
            </button>
          )}
        </div>
      )}
    </header>
  );
}
