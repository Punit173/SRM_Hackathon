import React from 'react';
import logo from '../assets/hack logo 1.png';
import '../App.css';
import ellipse from '../assets/Ellipse 1.png'

const Hero = () => {
    return (
        <div className='flex justify-center items-center bg p-8 mt-10 mb-10'> 
            <div className='flex flex-col items-center text-center p-5 text-white'>
                <img width={350} src={logo} alt="Hack Logo" />
                <img width={350} src={ellipse} alt="Hack Logo" />
                <h1 className='text-xl mt-4'>BUILDING THE FUTURE BIT BY BIT</h1>
            </div>
        </div>
    );
};

export default Hero;