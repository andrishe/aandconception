import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-black to-secondary  ">
      <div className="flex flex-col lg:flex-row items-center justify-between border-b-2 border-neutral-200 p-6 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          <Image src="/logoBlanc.svg" alt="Logo" width={150} height={80} />
        </div>

        {/* Contact */}
        <div className="text-white lg:text-left">
          <p className="text-lg text-center lg:text-left mb-4 font-bold">
            Contactez-nous :
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4">
            <div className="flex items-center gap-2">
              <Mail className="text-white size-5" />
              <a
                href="mailto:andriant.anina@gmail.com"
                className="text-white hover:text-primary text-sm"
              >
                aand.conception.interieur@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-white size-5" />
              <a
                href="tel:+123456789"
                className="text-white hover:text-primary text-sm"
              >
                0639567236
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="flex justify-center p-6 space-x-6">
        <a
          href="https://www.facebook.com/aandconceptioninterieur/"
          className="text-white"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>

        <a
          href="https://www.instagram.com/aandconception/?api=1%2F&hl=zh-cn"
          className="text-white"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>

      {/* Copyright */}
      <div className="p-6 text-center text-secondary">
        <p className="text-sm">
          © 2025 Copyright Designed by Sima Création Web
        </p>
      </div>
    </footer>
  );
}
