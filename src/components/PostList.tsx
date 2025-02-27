'use client';

import { Posts } from '@/types/posts';
import React, { useState } from 'react';
import Image from 'next/image';
import PostForm from './PostForm';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { useUser } from '@/context/UserContext';

type PostListProps = {
  posts: Posts[];
  handleDelete: (id: number) => void;
};

const PostList = ({ posts, handleDelete }: PostListProps) => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useUser();

  // Fonction pour ajouter un post à la liste (à passer à PostForm)
  const handleAddPost = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Derniers Articles
      </h1>

      {/* Bouton pour afficher/masquer le formulaire */}
      {user && (
        <motion.div
          className="flex justify-center mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="group flex items-center px-6 py-3 bg-white text-primary rounded-full shadow-lg transition-all duration-300 hover:bg-primary hover:text-white"
          >
            <PlusCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
            {showForm ? 'Masquer le formulaire' : 'Créer un nouvel article'}
          </button>
        </motion.div>
      )}

      {/* Affichage du formulaire si l'utilisateur clique pour en ajouter un */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-16"
          >
            <PostForm onSuccess={handleAddPost} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Séparateur */}
      <div className="border-b border-gray-200 mb-8"></div>

      {/* Affichage si aucun article */}
      {posts.map((post) => (
        <article key={post.id} className="border-b pb-10">
          {/* Titre */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h2>

          {/* Image */}
          {post.image_url && (
            <div className="w-full h-96 mb-6 relative">
              <Image
                src={post.image_url}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}

          {/* Contenu */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {post.content}
          </p>

          {/* Affichage du bouton de suppression seulement si l'utilisateur est connecté et si l'ID de l'utilisateur correspond à celui du post */}
          {user && post.user_id === user.id && (
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Supprimer l&apos;article
            </button>
          )}
        </article>
      ))}
    </div>
  );
};

export default PostList;
