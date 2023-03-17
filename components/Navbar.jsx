import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white flex justify-around p-4 animate-fade-in fixed top-0 w-full z-50">
      <a onClick={() => scrollTo('home')} className='hover:text-blue-700 cursor-pointer'>Home</a>
      <a onClick={() => scrollTo('about')} className='hover:text-blue-700 cursor-pointer'>About</a>
      <a onClick={() => scrollTo('projects')} className='hover:text-blue-700 cursor-pointer'>Projects</a>
      <a onClick={() => scrollTo('contact')} className='hover:text-blue-700 cursor-pointer'>Contact</a>
    </nav>
  );
};

export default Navbar;
