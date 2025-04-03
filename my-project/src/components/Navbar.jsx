import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import AboutUs from './AboutUs';
import { Link } from "react-scroll";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-black text-white p-4'>
      <div className='flex justify-between items-center'>
        <a href=""><h1 className='text-2xl font-bold'>
          Team <span className='text-blue-500'>SRM</span> Hackathon
        </h1></a>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
        <ul className='hidden md:flex space-x-10 tracking-widest font-bold text-xl'>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
        About <span className='text-blue-500'>Us</span> 
      </Link>
      <Link to="events" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
      Events
      </Link>
      <Link to="ourteam" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
      Team
      </Link>
          <a href='' className='hover:text-blue-500'><li>Contact <span className='text-blue-500'>Us</span></li></a>
          <a href='' className='hover:text-blue-500'><li>Register</li></a>
        </ul>
      </div>
      {isOpen && (
        <ul className='md:hidden flex flex-col items-center space-y-4 mt-4 text-lg'>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">
        About <span className='text-blue-500'>Us</span> 
      </Link>
      <Link to="events" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
      Events
      </Link>
      <Link to="ourteam" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
      Team
      </Link>
          <a href=''><li>Contact <span className='text-blue-500'>Us</span></li></a>
          <a href=''><li>Register</li></a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;