import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Image from 'next/image';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        logoDark="/logoBlack.svg"
        links={navbarLinks}
        textColorDark="text-black"
        dynamicLogo={false}
      />
      <div className="container mx-auto px-4 py-12 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Section Image */}
          <div className="w-full flex justify-center">
            <Image
              src="/room.svg"
              alt="Sample image"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>

          {/* Formulaire */}
          <div className="bg-gradient-to-r from-primary to-black p-8 rounded-lg">
            <form>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
                Contactez-nous
              </h1>
              <div className="flex justify-center mb-6 space-x-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-accent focus:outline-none"
                >
                  <Phone className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-accent focus:outline-none"
                >
                  <Mail className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-accent focus:outline-none"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-white"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Entrez votre nom complet"
                  className="w-full p-3 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 font-medium text-white"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Entrez votre numéro"
                  className="w-full p-3 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Entrez votre email"
                  className="w-full p-3 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Écrivez votre message ici"
                  className="w-full p-3 rounded border border-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-bold rounded hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
