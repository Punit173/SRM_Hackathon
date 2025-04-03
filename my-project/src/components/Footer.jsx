import React from 'react'
import '../App.css'
import { ChevronLeft, ChevronRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/hack logo 1.png'

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around items-center p-8 mt-5">

      <div className="text-left text-xl text-white jetmono opacity-50">
        <p className="mb-2">Join Us</p>
        <p className="w-96">As we embark on a beautiful journey.
        Unleash innovations, one hack at a time.</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <img width={300} src={logo} alt="" />

        <div className="flex gap-4 items-center relative">
          <a href="#" className="text-blue-400">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-blue-400">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="md:text-right text-xl mt-5 md:mb-5 text-white jetmono opacity-50">
        <p className="mb-2">+91 1234567890</p>
        <p className="mb-2">srmhackathon@gmail.com</p>
        <p className="mb-2">(websiteaddress).com</p>
      </div>

    </div>
  )
}

export default Footer
