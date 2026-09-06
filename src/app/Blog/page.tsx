import React from 'react';
import supabase from '@/utils/supabase/clients';
import BlogClient from '@/app/Blog/BlogClient';

async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-bgWite">

      <div className="pt-20">
        <BlogClient initialPosts={posts} />
      </div>
    </div>
  );
}
