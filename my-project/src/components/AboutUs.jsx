import React from 'react';
import '../App.css';
import teamphoto from '../assets/Image+Backdrop.png';

const AboutUs = () => {
  return (
    <div className='flex flex-wrap text-white p-5'>
      <div className='w-full md:w-1/2 p-9'>
        <h1 className='text-4xl bg mb-4 text-center jetmono md:text-left'>About Us</h1>
        <p className='text-xl jetmono md:text-left'>
          SRM Hackathon, which was earlier known as IT Association is one of the most active associations under the School of Computing. 
          SRM Hackathon aims to upskill all students and ultimately help them have successful careers. We work on establishing a system of technical 
          and competitive practices in the college, to set up a healthy coding environment for the students. At SRM Hackathon, we aim to build and structure your tech career for the dream company.
        </p>
      </div>
      <div className='w-full md:w-1/2 flex flex-col items-center p-5 bg'>
        <img className='rounded-lg w-full md:w-[550px]' src={teamphoto} alt="Team Photo" />
        <button className='mt-4 px-6 py-2 border-2 border-blue-500 text-white rounded-2xl hover:bg-blue-600'>Learn More</button>
      </div>
    </div>
  );
};

export default AboutUs;