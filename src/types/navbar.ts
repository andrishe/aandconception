import * as Icons from 'lucide-react';

export type NavbarLink = {
  label: string;
  href: string;
  icon?: keyof typeof Icons;
};

export type NavbarLinksType = NavbarLink[];
