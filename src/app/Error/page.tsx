// app/Error/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Une erreur est survenue
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error || "Désolé, quelque chose s'est mal passé"}
          </p>
          <div className="mt-4 text-center">
            <a
              href="/Signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Retourner à la page de connexion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
