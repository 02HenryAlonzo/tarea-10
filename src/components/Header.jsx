import React from 'react';
import { Menubar } from 'primereact/menubar';
import logoImg from '../assets/images/logo.svg';
import avatarImg from '../assets/images/image-avatar.png';

export const Header = () => {
  const items = [
    { label: 'Collections' },
    { label: 'Men' },
    { label: 'Women' },
    { label: 'About' },
    { label: 'Contact' },
  ];

  return (
    <header className="flex justify-between py-3 mx-14 items-center border-b-2 border-gray-200">
        
      <div className="flex items-center">
        <i className="pi pi-bars text-2xl md:hidden"></i>
        <img src={logoImg} alt="Logo" className="h-6 ml-4" />

        <Menubar model={items} className="hidden md:flex md:bg-white md:text-base md:text-gray-300 md:ml-4 " />
      </div>

      <div className="flex items-center">
        <i className="pi pi-shopping-cart text-2xl mr-8 text-gray-500"></i>
        <img src={avatarImg} alt="Avatar" className="w-16 h-16 rounded-full" />
      </div>

    </header>
  );
};

