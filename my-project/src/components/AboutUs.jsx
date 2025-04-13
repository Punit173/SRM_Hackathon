import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import teamphoto from '../assets/Image+Backdrop.png';

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex flex-wrap text-white p-3 md:p-5 rounded-lg transition-all duration-300 ${
      isScrolled ? 'shadow-lg shadow-blue-500/50 border border-blue-500 shimmer' : ''
    }`}>
      <div className='w-full md:w-1/2 p-4 md:p-9'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl bg mb-6 text-center jetmono md:text-left font-bold'
        >
          About Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg md:text-xl jetmono md:text-left leading-relaxed tracking-wide'
        >
          SRM Hackathon, which was earlier known as IT Association is one of the most active associations under the School of Computing. 
          <br /><br />
          SRM Hackathon aims to upskill all students and ultimately help them have successful careers. We work on establishing a system of technical 
          and competitive practices in the college, to set up a healthy coding environment for the students.
          <br /><br />
          At SRM Hackathon, we aim to build and structure your tech career for the dream company.
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='w-full md:w-1/2 flex flex-col items-center p-4 md:p-5 bg'
      >
        <img className='rounded-lg w-full md:w-[550px] shadow-lg' src={teamphoto} alt="Team Photo" />
        <button className='mt-6 px-8 py-3 border-2 border-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 text-lg font-semibold tracking-wide'>
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;