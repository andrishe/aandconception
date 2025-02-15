import * as Icons from 'lucide-react';

export type NavbarLink = {
  label: string;
  href: string;
  icon?: keyof typeof Icons; // ✅ Correction ici
};

export type NavbarLinksType = NavbarLink[];
