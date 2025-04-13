import React from 'react';
import logo from '../assets/hack logo 1.png';
import '../App.css';
import ellipse from '../assets/Ellipse 1.png';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='min-h-screen flex justify-center items-center bg p-8'
        >
            <div className='flex flex-col items-center text-center p-5 text-white'>
                <motion.img
                    width={400}
                    src={logo}
                    alt="Hack Logo"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="hover:scale-105 transition-transform duration-300"
                />
                <motion.img 
                    width={400} 
                    src={ellipse} 
                    alt="Ellipse"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    className="my-6"
                />
                <motion.h1 
                    className='text-3xl font-bold mt-4 mb-6 tracking-wider'
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    BUILDING THE FUTURE BIT BY BIT
                </motion.h1>
                <motion.p 
                    className='text-lg text-gray-300 max-w-2xl mb-8'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Join us in shaping tomorrow's technology through innovation and collaboration
                </motion.p>
                
            </div>
        </motion.div>
    );
};

export default Hero;