import React from 'react'
import '../App.css'
import ideathon from '../assets/Ideathon 1 (1).png'
import semicolon from '../assets/SemiColon 1.png'
import hacklogo from '../assets/hacklogoWhite 1.png'

const Events = () => {
    return (
        <div className="flex items-center justify-center bg-black text-white min-h-screen py-16">
            <div className="max-w-7xl p-4 w-full">
                <div className="flex justify-end mb-12">
                    <h1 className="text-6xl font-bold jetmono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Our Events</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="border-4 border-blue-500 rounded-2xl p-6 bg-black bg-opacity-50 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <p className="text-base jetmono leading-relaxed">
                            Hackathon provides an opportunity for participants to develop their technical and problem-solving skills and to work collaboratively within a restricted timespan. Secondly, the event can promote innovation and creativity by encouraging participants to think outside the box and develop new and unique solutions to complex problems, enhancing the competitive spirit.
                        </p>
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50 p-8 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <img width={250} src={hacklogo} alt="Hackathon Logo" className="hover:rotate-3 transition-transform duration-300" />
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl p-6 bg-black bg-opacity-50 jetmono hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <div className="grid grid-cols-2 gap-6 text-center">
                            {['Event Photos', 'Winners', 'Tracks', 'Projects won', 'Certificates', 'After movie', 'Resources', 'Gallery'].map((item, index) => (
                                <div key={index} className="text-sm hover:text-blue-400 cursor-pointer transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50 aspect-square hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <img width={250} src={semicolon} alt="Semicolon" className="hover:rotate-3 transition-transform duration-300" />
                    </div>

                    <div className="group relative flex items-center justify-center rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 group-hover:opacity-75 transition-opacity"></div>
                        <button className="border-4 jetmono border-blue-500 rounded-full px-8 py-3 bg-black bg-opacity-70 hover:bg-blue-900 transition-all duration-300 hover:border-blue-400 z-10">
                            Explore More
                        </button>
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                        <img width={250} src={ideathon} alt="Ideathon" className="hover:rotate-3 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
