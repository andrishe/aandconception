'use client';

import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import supabase from '@/utils/supabase/clients';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';
import { ImagePlus } from 'lucide-react';

type PostFormData = {
  title: string;
  content: string;
  image: FileList;
};

interface PostFormProps {
  onSuccess?: () => void;
}

export default function PostForm({ onSuccess }: PostFormProps) {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!user) {
    return (
      <p className="text-red-500 text-center">
        Vous devez être connecté pour créer un post.
      </p>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit = async (data: PostFormData) => {
    try {
      setLoading(true);

      if (!data.image || data.image.length === 0) {
        alert('Veuillez sélectionner une image.');
        setLoading(false);
        return;
      }

      const file = data.image[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('posts-images')
        .upload(fileName, file);

      if (uploadError) throw new Error(`Upload failed: ${uploadError.message}`);

      const { data: urlData } = supabase.storage
        .from('posts-images')
        .getPublicUrl(fileName);

      if (!urlData || !urlData.publicUrl) {
        throw new Error('Failed to get public URL of the uploaded image');
      }

      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.title,
          content: data.content,
          image_url: urlData.publicUrl,
          user_id: user.id,
        }),
      });

      if (!response.ok) throw new Error('Failed to create post');

      reset();
      setImagePreview(null);
      if (onSuccess) onSuccess();
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
        <h2 className="text-2xl font-bold text-center text-[#926368] mb-6">
          Créer un Article
        </h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-[#926368] font-medium mb-2"
          >
            Titre
          </label>
          <input
            id="title"
            {...register('title', { required: 'Le titre est requis' })}
            placeholder="Titre du post"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#926368] transition duration-300"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-[#926368] font-medium mb-2"
          >
            Contenu
          </label>
          <textarea
            id="content"
            {...register('content', { required: 'Le contenu est requis' })}
            placeholder="Écris quelque chose..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#926368] transition duration-300 resize-y min-h-[100px]"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="image"
            className="block text-[#926368] font-medium mb-2"
          >
            Image
          </label>
          <div className="relative">
            <input
              id="image"
              type="file"
              accept="image/*"
              {...register('image', { required: 'Une image est requise' })}
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#926368] transition duration-300">
              <ImagePlus className="h-6 w-6 text-[#926368]" />
              <span className="ml-2 text-sm text-gray-600">
                Choisir une image
              </span>
            </div>
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm mt-2">{errors.image.message}</p>
          )}

          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">
                Aperçu de l&apos;image:
              </p>
              <div className="relative w-full h-40 overflow-hidden rounded-lg border-2 border-gray-300 shadow-md">
                <Image
                  src={imagePreview || '/placeholder.svg'}
                  alt="Aperçu"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#a8797f] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#926368] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#926368] focus:ring-opacity-50"
        >
          {loading ? 'Création en cours...' : 'Ajouter'}
        </button>
      </form>
    </div>
  );
}
