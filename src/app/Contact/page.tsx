'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Image from 'next/image';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useWeb3forms from '@web3forms/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onTouched' });

  const apiKey = process.env.NEXT_PUBLIC_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

  const { submit: onSubmit } = useWeb3forms({
    access_key: apiKey,
    settings: {
      from_name: 'AAND Conception Intérieur',
      subject: 'Nouveau message de contact',
    },
    onSuccess: () => {
      toast.success('Message envoyé avec succès !', { position: 'top-right' });
      reset();
    },
    onError: () => {
      toast.error("Erreur lors de l'envoi du message", {
        position: 'top-right',
      });
    },
  });
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
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Champ caché anti-bot */}
              <input type="hidden" value="" {...register('botcheck')} />

              {/* Champ de signature caché */}
              <input
                type="hidden"
                name="form_signature"
                value="Contact Form Submission"
              />
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
                  autoComplete="off"
                  placeholder="Entrez votre nom complet"
                  className={`w-full p-3 rounded border   focus:ring-2  ${
                    errors.name
                      ? 'border-red-500 focus:ring-offset-red-100'
                      : 'border-secondary focus:ring-primary'
                  }`}
                  {...register('name', {
                    required: 'Veuillez entrer votre nom',
                    maxLength: 80,
                  })}
                />
                {errors.name?.message && (
                  <small className="text-red-500">
                    {String(errors.name.message)}
                  </small>
                )}
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
                  autoComplete="off"
                  placeholder="Entrez votre numéro"
                  className={`w-full p-3 rounded border  focus:ring-2  ${
                    errors.name
                      ? 'border-red-500 focus:ring-offset-red-100'
                      : 'border-secondary focus:ring-primary'
                  }`}
                  {...register('phone', {
                    required: 'Veuillez entrer votre numéro de téléphone',
                    pattern: {
                      value: /^\d{10}$/,
                      message: 'Veuillez entrer un numéro valide',
                    },
                  })}
                />
                {errors.name?.message && (
                  <small className="text-red-500">
                    {String(errors.name.message)}
                  </small>
                )}
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
                  autoComplete="off"
                  placeholder="Entrez votre email"
                  className={`w-full p-3 rounded border   focus:ring-2  ${
                    errors.name
                      ? 'border-red-500 focus:ring-offset-red-100'
                      : 'border-secondary focus:ring-primary'
                  }`}
                  {...register('email', {
                    required: 'Veuillez entrer votre email',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Veuillez entrer un email valide',
                    },
                  })}
                />
                {errors.name?.message && (
                  <small className="text-red-500">
                    {String(errors.name.message)}
                  </small>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  autoComplete="off"
                  rows={4}
                  placeholder="Écrivez votre message ici"
                  className={`w-full p-3 rounded border   focus:ring-2  ${
                    errors.name
                      ? 'border-red-500 focus:ring-offset-red-100'
                      : 'border-secondary focus:ring-primary'
                  }`}
                  {...register('message', {
                    required: 'Veuillez entrer votre message',
                  })}
                ></textarea>
                {errors.name?.message && (
                  <small className="text-red-500">
                    {String(errors.name.message)}
                  </small>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-primary text-white font-bold rounded hover:bg-secondary hover:text-black focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
