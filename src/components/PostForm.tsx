'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import supabase from '@/utils/supabase/clients';

interface PostFormData {
  title: string;
  content: string;
  image: FileList;
}

interface PostFormProps {
  onSuccess?: () => void; // Fonction de callback optionnelle
}

export default function PostForm({ onSuccess }: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: PostFormData) => {
    try {
      setLoading(true);

      // Vérification de la présence d'une image
      if (!data.image || data.image.length === 0) {
        alert('Veuillez sélectionner une image.');
        setLoading(false);
        return;
      }

      const file = data.image[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      // Upload image
      const { error: uploadError } = await supabase.storage
        .from('posts-images')
        .upload(fileName, file);

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      // Récupérer l'URL publique de l'image
      const { data: urlData } = supabase.storage
        .from('posts-images')
        .getPublicUrl(fileName);

      if (!urlData || !urlData.publicUrl) {
        throw new Error('Failed to get public URL of the uploaded image');
      }

      // Création du post
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          image_url: urlData.publicUrl,
        }),
      });

      if (!response.ok) throw new Error('Failed to create post');

      // Réinitialiser le formulaire
      reset();

      // Appeler la fonction de callback si elle existe
      if (onSuccess) {
        onSuccess();
      }

      // Navigation uniquement si aucun callback n'est fourni
      else {
        router.push('/Blog');
        router.refresh();
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Erreur lors de la création du post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-[#926368]">
          Créer un Post
        </h2>

        <div className="mt-4">
          <label className="block text-[#926368] font-medium">Titre</label>
          <input
            {...register('title', { required: 'Le titre est requis' })}
            placeholder="Titre du post"
            className="w-full mt-1 p-3 border border-[#d8c4c1] rounded-lg focus:ring-[#a8797f] focus:border-[#a8797f] outline-none"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-[#926368] font-medium">Contenu</label>
          <textarea
            {...register('content', { required: 'Le contenu est requis' })}
            placeholder="Écris quelque chose..."
            className="w-full mt-1 p-3 border border-[#d8c4c1] rounded-lg focus:ring-[#a8797f] focus:border-[#a8797f] outline-none"
            rows={4}
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-[#926368] font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register('image', { required: 'Une image est requise' })}
            className="w-full mt-1 p-2 border border-[#d8c4c1] rounded-lg bg-[#F5EEEF] cursor-pointer"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-6 w-full bg-[#a8797f] text-white font-semibold py-3 rounded-lg shadow-md transition-all ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#926368]'
          }`}
        >
          {loading ? 'Création en cours...' : 'Ajouter le Post'}
        </button>
      </form>
    </div>
  );
}
