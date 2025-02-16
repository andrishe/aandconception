'use client';

import React from 'react';
import PostForm from '@/components/PostForm';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import Footer from '@/components/Footer';

export default function Create() {
  return (
    <div className="min-h-screen bg-bgWhite">
      <Navbar
        links={navbarLinks}
        textColorLight="text-black"
        logoDark="/logoBlack.svg"
        dynamicLogo={false}
      />
      <div className="pt-20">
        <PostForm />
      </div>
      <Footer />
    </div>
  );
}
