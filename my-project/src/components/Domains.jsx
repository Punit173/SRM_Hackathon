import React from 'react'

const Domains = () => {
    return (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
            {/* Background "DOMAINS" text with static glow effect */}
            <div className="absolute text-red-700 font-bold text-9xl tracking-widest z-0"
                 style={{
                     textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
                 }}>
                DOMAINS
            </div>

            {/* Organizational chart container */}
            <div className="z-10 flex flex-col items-center">
                {/* SVG for all connecting lines */}
                <svg className="absolute top-0 left-0 w-full h-full" style={{ pointerEvents: 'none', zIndex: 5 }}>
                    {/* Top to second level */}
                    <line x1="50%" y1="30%" x2="43%" y2="42%" stroke="#718096" strokeWidth="1" />
                    <line x1="50%" y1="30%" x2="57%" y2="42%" stroke="#718096" strokeWidth="1" />
                    
                    {/* Second to third level */}
                    <line x1="43%" y1="42%" x2="35%" y2="54%" stroke="#718096" strokeWidth="1" />
                    <line x1="43%" y1="42%" x2="50%" y2="54%" stroke="#718096" strokeWidth="1" />
                    <line x1="57%" y1="42%" x2="50%" y2="54%" stroke="#718096" strokeWidth="1" />
                    <line x1="57%" y1="42%" x2="65%" y2="54%" stroke="#718096" strokeWidth="1" />
                    
                    {/* Third to fourth level */}
                    <line x1="35%" y1="54%" x2="27%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="35%" y1="54%" x2="39%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="50%" y1="54%" x2="39%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="50%" y1="54%" x2="61%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="65%" y1="54%" x2="61%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="65%" y1="54%" x2="73%" y2="66%" stroke="#718096" strokeWidth="1" />
                    
                    {/* Horizontal connecting lines */}
                    <line x1="43%" y1="42%" x2="57%" y2="42%" stroke="#718096" strokeWidth="1" />
                    <line x1="35%" y1="54%" x2="50%" y2="54%" stroke="#718096" strokeWidth="1" />
                    <line x1="50%" y1="54%" x2="65%" y2="54%" stroke="#718096" strokeWidth="1" />
                    <line x1="27%" y1="66%" x2="39%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="39%" y1="66%" x2="61%" y2="66%" stroke="#718096" strokeWidth="1" />
                    <line x1="61%" y1="66%" x2="73%" y2="66%" stroke="#718096" strokeWidth="1" />
                </svg>

                {/* Top level - apex of triangle */}
                <div className="mb-16">
                    <Node label="Creatives" />
                </div>

                {/* Second level */}
                <div className="flex justify-center mb-16">
                    <div className="mx-12">
                        <Node label="Logistics" />
                    </div>
                    <div className="mx-12">
                        <Node label="Publicity" />
                    </div>
                </div>

                {/* Third level */}
                <div className="flex justify-center mb-16">
                    <div className="mx-8">
                        <Node label="Technical Events" />
                    </div>
                    <div className="mx-8">
                        <Node label="Technical" />
                    </div>
                    <div className="mx-8">
                        <Node label="Outreach" />
                    </div>
                </div>

                {/* Fourth level - base of triangle */}
                <div className="flex justify-center">
                    <div className="mx-4">
                        <Node label="Creatives" />
                    </div>
                    <div className="mx-4">
                        <Node label="Creatives" />
                    </div>
                    <div className="mx-4">
                        <Node label="Creatives" />
                    </div>
                    <div className="mx-4">
                        <Node label="Creatives" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Node = ({ label }) => {
    return (
        <div className="flex flex-col items-center justify-center w-24 h-24 rounded-lg border-2 border-blue-500 bg-blue-900 bg-opacity-30 text-blue-400 p-2 hover:bg-blue-800 hover:bg-opacity-50 transition-all duration-300">
            <div className="flex items-center justify-center w-full h-full">
                {/* Icon - Pencil and Ruler crossed */}
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