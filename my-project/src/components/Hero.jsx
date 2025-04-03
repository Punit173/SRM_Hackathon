import React from 'react';
import logo from '../assets/hack logo 1.png';
import '../App.css';
import ellipse from '../assets/Ellipse 1.png'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className='flex justify-center items-center bg p-8 mt-10 mb-10'>
            <div className='flex flex-col items-center text-center p-5 text-white'>
                <motion.img
                    width={350}
                    src={logo}
                    alt="Hack Logo"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <img width={350} src={ellipse} alt="Ellipse" />
                <h1 className='text-xl mt-4'>BUILDING THE FUTURE BIT BY BIT</h1>
            </div>
        </div>
    );
};

export default Hero;