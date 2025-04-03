import React from 'react'
import '../App.css'
import ideathon from '../assets/Ideathon 1 (1).png'
import semicolon from '../assets/SemiColon 1.png'
import hacklogo from '../assets/hacklogoWhite 1.png'

const Events = () => {
    return (
        <div className="flex items-center justify-center bg-black text-white">
            <div className="max-w-7xl p-4">
                <div className="flex justify-end mb-8">
                    <h1 className="text-5xl font-bold jetmono">Our Events</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="border-4 border-blue-500 rounded-2xl p-4 bg-black bg-opacity-50">
                        <p className="text-sm jetmono">
                            Hackathon provides an opportunity for participants to develop their technical and problem-solving skills and to work collaboratively within a restricted timespan. Secondly, the event can promote innovation and creativity by encouraging participants to think outside the box and develop new and unique solutions to complex problems, enhancing the competitive spirit.
                        </p>
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50 p-8">
                        <img width={200} src={hacklogo} alt="" />
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl p-4 bg-black bg-opacity-50 jetmono">
                        <div className="grid grid-cols-2 gap-10 text-center">
                            <div className="text-sm">Event Photos</div>
                            <div className="text-sm">Winners</div>
                            <div className="text-sm">Tracks</div>
                            <div className="text-sm">Projects won</div>
                            <div className="text-sm">Certificates</div>
                            <div className="text-sm">After movie</div>
                            <div className="text-sm">Lorem</div>
                            <div className="text-sm">Ipsum</div>
                        </div>
                    </div>

                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50 aspect-square">
                        <img width={200} src={semicolon} alt="" />
                    </div>

                    <div
                        className="flex items-center justify-center"
                        style={{ backgroundImage: 'url("../assets/Artboard1a3 1.png")' }}
                    >
                        <button className="border-4 hidden md:flex jetmono border-blue-500 rounded-full px-6 py-2 bg-black bg-opacity-70 hover:bg-blue-900 transition-colors">
                            More
                        </button>
                    </div>


                    <div className="border-4 border-blue-500 rounded-2xl flex items-center justify-center bg-black bg-opacity-50">
                        <img width={200} src={ideathon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
