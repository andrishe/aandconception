import React from 'react';
import Navbar from '@/components/Navbar';
import { navbarLinks } from '@/data/data';

const Create = () => {
  return (
    <div className=" min-h-screen bg-bgWhite">
      <Navbar
        links={navbarLinks}
        textColorLight="text-black"
        logoDark="/logoBlack.svg"
        dynamicLogo={false}
      />

      <div className="flex justify-center items-center pt-20 ">
        <h1>Create</h1>
      </div>
    </div>
  );
};

export default Create;
