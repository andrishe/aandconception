// app/Signin/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server'; // Update the import to use server.ts

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Appel à l'authentification
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    // Redirection vers une page d'erreur en cas d'échec
    throw new Error(error.message); // Gestion de l'erreur (affichage dans l'UI)
  }

  // Redirection après la connexion réussie
  redirect('/Blog');
}
