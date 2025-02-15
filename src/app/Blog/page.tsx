import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';
import React from 'react';

const Blog = () => {
  return (
    <div className="bg-bgWhite min-h-screen">
      <Navbar
        links={navbarLinks}
        textColorLight="text-black"
        logoDark="/logoBlack.svg"
        dynamicLogo={false}
      />
      <div className="flex justify-center items-center pt-20 ">
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default Blog;
