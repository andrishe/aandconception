'use client';

import React, { useState } from 'react';
import PostList from '@/components/PostList';
import { Posts } from '@/types/posts';

export default function BlogClient({
  initialPosts,
}: {
  initialPosts: Posts[];
}) {
  const [posts, setPosts] = useState(initialPosts);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      'Voulez-vous vraiment supprimer ce post ?'
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete post');

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Erreur lors de la suppression du post');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <PostList posts={posts} handleDelete={handleDelete} />
    </div>
  );
}
