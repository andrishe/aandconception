'use client';

import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from './actions';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Footer from '@/components/Footer';

const Signin = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData) {
    try {
      await login(formData);
      toast.success('Connexion réussie!');
    } catch {
      toast.error('Erreur lors de la connexion');
      formRef.current?.reset();
    }
  }

  return (
    <div className=" min-h-screen bg-bgWhite">
      <Navbar
        links={navbarLinks}
        textColorLight="text-black"
        logoDark="/logoBlack.svg"
        dynamicLogo={false}
      />
      <div className="flex min-h-screen items-center justify-center  px-4 md:px-0">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-bold text-center text-black">
            Connexion
          </h2>

          <form
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              await clientAction(formData);
            }}
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-primaryLight p-3 text-gray-900 focus:border-primary focus:ring-primaryDark"
                placeholder="E-mail"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-lg border border-primaryLight p-3 text-gray-900 focus:border-primary focus:ring-primaryDark"
                placeholder="Mot de passe"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 text-white font-semibold shadow-md hover:bg-primaryDark focus:outline-secondary focus:ring focus:bg-primaryLight"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
