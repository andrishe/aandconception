import React from 'react';
import supabase from '@/utils/supabase/clients';
import BlogClient from '@/app/Blog/BlogClient';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Footer from '@/components/Footer';

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
      <Navbar
        links={navbarLinks}
        textColorLight="text-black"
        logoDark="/logoBlack.svg"
        dynamicLogo={false}
      />
      <div className="pt-20">
        <BlogClient initialPosts={posts} />
      </div>
      <Footer />
    </div>
  );
}
