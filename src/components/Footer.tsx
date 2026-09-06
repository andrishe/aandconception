import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { contactInfo, legalLinks, socialLinks } from '@/data/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-screen-xl gap-12 px-6 py-16 lg:grid-cols-3 lg:gap-8 lg:px-10 lg:py-20">
        <div className="lg:pr-10">
          <p className="font-serif text-lg font-bold uppercase tracking-[0.14em]">
            Lataléaand
          </p>
          <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-cream/60">
            L&apos;art de transformer vos intérieurs en espaces d&apos;exception,
            à votre image.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
            Social
          </p>
          <ul className="mt-5 space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/80 transition-colors hover:text-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-cream/40">
            Legal
          </p>
          <ul className="mt-5 space-y-3">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 transition-colors hover:text-clay"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-cream/40">
            Contactez-nous
          </p>
          <ul className="mt-5 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20">
                <Mail size={15} />
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="break-all text-sm text-cream/80 transition-colors hover:text-clay"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/20">
                <Phone size={15} />
              </span>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-sm text-cream/80 transition-colors hover:text-clay"
              >
                {contactInfo.phone}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-screen-xl px-6 py-6 text-center text-xs text-cream/40 lg:px-10 lg:text-left">
          © {currentYear} Lataléaand Intérieur. Tous droits réservés. |
          Designed by Sima Création Web
        </p>
      </div>
    </footer>
  );
}
