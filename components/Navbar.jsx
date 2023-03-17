import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="text-white flex justify-around p-4 animate-fade-in">
            <Link href="/" className='hover:text-blue-700'>Home</Link>
            <Link href="/about" className='hover:text-blue-700'>About</Link>
            <Link href="/projects" className='hover:text-blue-700'>Projects</Link>
            <Link href="/contact" className='hover:text-blue-700'>Contact</Link>
    </nav>
  );
};

export default Navbar;
