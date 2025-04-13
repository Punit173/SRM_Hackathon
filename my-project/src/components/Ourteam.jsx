import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Ourteam = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const teamMembers = [
        { 
            id: 2, 
            name: "",
            title: "Secretary", 
            color: "bg-[#8D6E6E]",
            image: "/team/member1.jpg",
            description: "Frontend Expert"
        },
        { 
            id: 4, 
            name: "",
            title: " Joint Secretary", 
            color: "bg-[#3D2929]",
            image: "/team/member2.jpg",
            description: "Backend Specialist"
        },
        { 
            id: 1, 
            name: "",
            title: "Treasurer", 
            color: "bg-[#E63232]",
            image: "/team/member3.jpg",
            description: "Project Coordinator"
        },
        { 
            id: 3, 
            name: "",
            title: "President", 
            color: "bg-[#1B4D3E]",
            image: "/team/member4.jpg",
            description: "Team Leader"
        },
        { 
            id: 5, 
            name: "",
            title: "Content Organizer", 
            color: "bg-[#3F3761]",
            image: "/team/member5.jpg",
            description: "Technical Director"
        },
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
        <div className="min-h-screen relative overflow-hidden bg-[#030014] flex flex-col">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,#030014_80%)]"/>
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:14px_14px]" />
                <div className="absolute w-full h-96 bg-gradient-to-t from-[#030014] to-transparent bottom-0" />
            </div>

            {/* Content */}
            <div className="relative p-4 md:p-8 text-center flex-1 flex flex-col">
                <div className="mb-8 md:mb-12 relative">
                    <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-full md:w-[640px] h-[640px] bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"/>
                    <h1 className="text-4xl md:text-6xl mb-4 font-normal relative">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
                            Meet Our Team
                        </span>
                    </h1>
                    <div className="badge bg-blue-500/10 border-blue-400/20 text-blue-400 p-3 md:p-4 font-semibold text-sm md:text-base">
                        The brilliant minds behind our success
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 md:gap-4 flex-1 relative">
                    <button
                        className="btn btn-circle btn-sm md:btn-md btn-primary btn-outline z-20"
                        onClick={handlePrev}
                        disabled={isTransitioning}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex justify-center items-center w-[90%] md:w-4/5 h-full relative">
                        {getVisibleMembers().map((member, index) => {
                            const isMiddle = !isMobile || index === 0;
                            const size = isMiddle 
                                ? "w-48 h-48 md:w-48 md:h-48" 
                                : "w-24 h-24 md:w-32 md:h-32";
                            const opacity = isMiddle ? "opacity-100" : "opacity-70";
                            const zIndex = isMiddle ? "z-10" : "z-0";
                            const spacing = isMobile 
                                ? "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" 
                                : getSpacingClasses(index);
                            const scale = isMiddle ? "scale-110 md:scale-125" : "scale-100";

                            return (
                                <div
                                    key={`${member.id}-${index}`}
                                    className={`flex flex-col items-center justify-center transition-all duration-300 ${spacing} ${zIndex} ${scale}`}
                                >
                                    <div className={`card ${size} bg-black/40 backdrop-blur-sm border border-blue-900/50 shadow-xl hover:shadow-blue-500/20 group ${opacity}`}>
                                        <figure className="relative w-full h-full">
                                            {member.image && (
                                                <img 
                                                    src={member.image} 
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-2 backdrop-blur-sm border border-blue-500/20">
                                                <p className="text-sm">{member.description}</p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <h3 className={`font-medium text-lg md:text-xl transition-all duration-300 ${opacity} text-white/90`}>
                                            {member.name || member.title}
                                        </h3>
                                        <div className={`badge bg-blue-950/50 border-blue-500 text-blue-400 mt-2 transition-all duration-300 ${opacity}`}>
                                            {member.title}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className="btn btn-circle btn-sm md:btn-md btn-primary btn-outline z-20"
                        onClick={handleNext}
                        disabled={isTransitioning}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Update spacing function for better mobile support
const getSpacingClasses = (index) => {
    switch (index) {
        case 0: return "absolute left-0 -translate-x-4 md:-translate-x-8 translate-y-20 md:translate-y-40";
        case 1: return "absolute left-1/4 -translate-x-8 md:-translate-x-12 translate-y-10 md:translate-y-20";
        case 2: return "absolute left-1/2 -translate-x-1/2";
        case 3: return "absolute right-1/4 translate-x-8 md:translate-x-12 translate-y-10 md:translate-y-20";
        case 4: return "absolute right-0 translate-x-4 md:translate-x-8 translate-y-20 md:translate-y-40";
        default: return "";
    }
};

export default Ourteam;
