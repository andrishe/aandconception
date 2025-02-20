import { Posts } from '@/types/posts';
import React from 'react';
import Image from 'next/image';

type PostListProps = {
  posts: Posts[];
  handleDelete: (id: number) => void;
};

const PostList = ({ posts, handleDelete }: PostListProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
        Derniers Articles
      </h1>

      {/* Affichage si aucun article */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Aucun article disponible pour le moment.
        </p>
      ) : (
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.id} className="border-b pb-10">
              {/* Titre */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </h2>

              {/* Image */}
              <div className="w-full h-96 mb-6 relative">
                <Image
                  src={post.image_url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Contenu */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {post.content}
              </p>

              {/* Bouton de suppression */}
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Supprimer l&apos;article
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
