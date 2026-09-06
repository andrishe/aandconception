'use client';

import Image from 'next/image';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import useWeb3forms from '@web3forms/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactInfo } from '@/data/data';

const fieldClass =
  'w-full rounded-xl border bg-white p-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-clay/40';

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
      from_name: 'Lataléaand Intérieur',
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
    <div className="bg-cream">
      <section className="px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="section-label">Contact</h2>

          <div className="mt-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
                Contactez-nous
              </h1>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
                Parlez-nous de votre projet, de la pièce à repenser jusqu&apos;à
                la construction complète. Nous vous répondons sous quelques
                jours.
              </p>

              <ul className="mt-10 space-y-3">
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-clay"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream">
                      <Phone className="h-4 w-4 text-clay" />
                    </span>
                    <span className="text-sm text-inkSoft">
                      {contactInfo.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-clay"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream">
                      <Mail className="h-4 w-4 text-clay" />
                    </span>
                    <span className="break-all text-sm text-inkSoft">
                      {contactInfo.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#message"
                    className="flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition-colors hover:border-clay"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream">
                      <MessageCircle className="h-4 w-4 text-clay" />
                    </span>
                    <span className="text-sm text-inkSoft">
                      Écrire directement ici
                    </span>
                  </a>
                </li>
              </ul>

              <div className="relative mt-12 hidden aspect-[4/3] w-full lg:block">
                <Image
                  src="/room.svg"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-7 lg:p-10">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <input type="hidden" value="" {...register('botcheck')} />
                <input
                  type="hidden"
                  value="Contact Form Submission"
                  {...register('form_signature')}
                />

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Entrez votre nom complet"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      className={`${fieldClass} ${
                        errors.name ? 'border-red-500' : 'border-line'
                      }`}
                      {...register('name', {
                        required: 'Veuillez entrer votre nom',
                        maxLength: 80,
                      })}
                    />
                    {errors.name?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {String(errors.name.message)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Entrez votre numéro"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      className={`${fieldClass} ${
                        errors.phone ? 'border-red-500' : 'border-line'
                      }`}
                      {...register('phone', {
                        required: 'Veuillez entrer votre numéro de téléphone',
                        pattern: {
                          value: /^\d{10}$/,
                          message: 'Veuillez entrer un numéro valide',
                        },
                      })}
                    />
                    {errors.phone?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {String(errors.phone.message)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Entrez votre email"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      className={`${fieldClass} ${
                        errors.email ? 'border-red-500' : 'border-line'
                      }`}
                      {...register('email', {
                        required: 'Veuillez entrer votre email',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Veuillez entrer un email valide',
                        },
                      })}
                    />
                    {errors.email?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-ink"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      autoComplete="off"
                      rows={5}
                      placeholder="Écrivez votre message ici"
                      aria-invalid={errors.message ? 'true' : 'false'}
                      className={`${fieldClass} resize-y ${
                        errors.message ? 'border-red-500' : 'border-line'
                      }`}
                      {...register('message', {
                        required: 'Veuillez entrer votre message',
                      })}
                    />
                    {errors.message?.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {String(errors.message.message)}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full rounded-full bg-ink py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
