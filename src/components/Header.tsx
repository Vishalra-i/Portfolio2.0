import React from 'react';

function Header() {
  return (
    <nav className="sticky top-0 z-50 right-5 w-1/2 p-5 rounded-md animate-slideInFromLeft text-white font-poppins text-lg">
      <div className="flex justify-between items-center font-bold text-xl">
        <a href="#home" className="hover:text-2xl hover:text-yellow-300 transition-all duration-200">Home</a>
        <a href="#about" className="hover:text-2xl hover:text-yellow-300 transition-all duration-200">About</a>
        <a href="#projects" className="hover:text-2xl hover:text-yellow-300 transition-all duration-200">Projects</a>
        <a href="#gamezone" className="hover:text-2xl hover:text-yellow-300 transition-all duration-200">Gamezone</a>
        <a href="#contact" className="hover:text-2xl hover:text-yellow-300 transition-all duration-200">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
