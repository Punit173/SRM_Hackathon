import React from 'react'

const Domains = () => {
    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
            <div className="absolute text-red-700 font-bold text-6xl md:text-9xl tracking-widest z-0"
                 style={{
                     textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
                 }}>
                DOMAINS
            </div>

            <div className="z-10 flex flex-col items-center w-full max-w-6xl px-4 space-y-8 md:space-y-12">
                {/* Vertical line connecting all sections */}
               
                <div className="relative z-10">
                    <Node label="Creatives" />
                </div>

                <div className="flex justify-center gap-8 md:gap-16 relative z-10">
                    <Node label="Logistics" />
                    <Node label="Publicity" />
                </div>

                <div className="flex justify-center gap-6 md:gap-12 relative z-10">
                    <Node label="Technical Events" />
                    <Node label="Technical" />
                    <Node label="Outreach" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 relative z-10">
                    <Node label="Creatives" />
                    <Node label="Creatives" />
                    <Node label="Creatives" />
                    <Node label="Creatives" />
                </div>
            </div>
        </div>
    )
}

const Node = ({ label }) => {
    return (
        <div className="flex flex-col items-center justify-center w-24 h-24 rounded-lg border-2 border-blue-500 bg-blue-900 bg-opacity-30 text-blue-400 p-2 hover:bg-blue-800 hover:bg-opacity-50 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full">
                <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2">
                    <path
                        fill="currentColor"
                        d="M20.71,4.04C21.1,3.65 21.1,3 20.71,2.63L18.37,0.29C18,-0.1 17.35,-0.1 16.96,0.29L15,2.25L18.75,6L20.71,4.04Z"
                    />
                    <path
                        fill="currentColor"
                        d="M17.75,7L14,3.25L4,13.25V17H7.75L17.75,7Z"
                    />
                    <path
                        fill="currentColor"
                        d="M2,11.3V21H11.7L21.7,11L13,2.3L2,11.3Z"
                        fillOpacity="0.2"
                    />
                </svg>
            </div>
            <div className="text-center text-xs font-medium">
                {label}
            </div>
        </div>
    );
};

export default Domains
