import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Ourteam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const teamMembers = [
        { id: 1, title: "Lead", color: "bg-[#8D6E6E]" },
        { id: 2, title: "Lead", color: "bg-[#3D2929]" },
        { id: 3, title: "Secretary", color: "bg-[#E63232]" },
        { id: 4, title: "President", color: "bg-[#1B4D3E]" },
        { id: 5, title: "Vice President", color: "bg-[#3F3761]" },
    ];

    const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

    // Adjust visible members dynamically
    const getVisibleMembers = () => {
        return isMobile
            ? [extendedMembers[currentIndex]] // Only one member for mobile
            : extendedMembers.slice(currentIndex, currentIndex + 5); // Five members for desktop
    };

    const handlePrev = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="p-8 text-center text-white jetmono">
            <div className="mb-8">
                <h1 className="text-5xl mb-20 font-normal">Meet Our Team</h1>
            </div>

            <div className="flex items-center justify-center gap-4 my-12 relative">
                <button
                    className="bg-transparent border-none text-blue-400 cursor-pointer text-2xl flex items-center justify-center z-20 hover:text-blue-300 transition-colors"
                    onClick={handlePrev}
                    disabled={isTransitioning}
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="flex justify-center items-center w-4/5 h-64 relative">
                    {getVisibleMembers().map((member, index) => {
                        const isMiddle = !isMobile || index === 0;
                        const size = isMiddle ? "w-40 h-40" : "w-28 h-28";
                        const opacity = isMiddle ? "opacity-100" : "opacity-80";
                        const zIndex = isMiddle ? "z-10" : "z-0";
                        const spacing = isMobile ? "left-1/2 -translate-x-1/2" : getSpacingClasses(index);
                        const scale = isMiddle ? "scale-150" : "scale-100";

                        return (
                            <div
                                key={`${member.id}-${index}`}
                                className={`flex flex-col items-center justify-center transition-all duration-300 absolute ${spacing} ${zIndex} ${scale}`}
                            >
                                <div
                                    className={`${size} rounded-lg border-2 border-blue-400 ${member.color} relative mb-4 ${opacity} transition-all duration-300 shadow-lg`}
                                >
                                </div>
                                <h3
                                    className={`font-normal text-lg text-center transition-all duration-300 w-full ${opacity}`}
                                >
                                    {member.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="bg-transparent border-none text-blue-400 cursor-pointer text-2xl flex items-center justify-center z-20 hover:text-blue-300 transition-colors"
                    onClick={handleNext}
                    disabled={isTransitioning}
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
};

// Spacing function for desktop layout
const getSpacingClasses = (index) => {
    switch (index) {
        case 0: return "left-0 -translate-x-8 translate-y-40";
        case 1: return "left-1/4 -translate-x-12 translate-y-20";
        case 2: return "left-1/2 -translate-x-1/2";
        case 3: return "right-1/4 translate-x-12 translate-y-20";
        case 4: return "right-0 translate-x-8 translate-y-40";
        default: return "";
    }
};

export default Ourteam;
