import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { UserProvider } from '@/context/UserContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { navbarLinks } from '@/data/data';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lataléaand — Architecture & décoration d'intérieur",
  description:
    "L'art de transformer vos intérieurs en espaces d'exception, à votre image.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <UserProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
          >
            Aller au contenu
          </a>
          <Navbar links={navbarLinks} />
          <main id="contenu">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
