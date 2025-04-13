import React from 'react'
import { motion } from 'framer-motion'
import styles from './Domains.module.css'

const domainData = [
    { id: 1, label: "Technical", icon: "" },
    { id: 2, label: "Design", icon: "" },
    { id: 3, label: "Management", icon: "" },
    { id: 4, label: "Content", icon: "" },
    { id: 5, label: "Marketing", icon: "" },
    { id: 6, label: "Operations", icon: "" }
];

const Domains = () => {
    return (
        <div className="relative min-h-screen bg-black py-12 px-4 pb-24">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(circle at center, rgba(0,0,255,0.1) 0%, transparent 70%)',
                }}
            />

            <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-6xl md:text-8xl font-bold mb-20 text-blue-500"
                style={{ textShadow: '0 0 10px #0000ff, 0 0 20px #0000ff' }}
            >
                DOMAINS
            </motion.h1>

            <div className="relative max-w-6xl mx-auto mb-16">
                {/* Domain Cards in Hexagonal Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                    {domainData.map((domain, index) => (
                        <motion.div
                            key={domain.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative group ${styles.domainCard}`}
                        >
                            <div className="
                                p-6 rounded-lg
                                bg-black
                                border-2 border-blue-500
                                transform transition-all duration-300
                                hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,255,0.5)]
                                group-hover:border-blue-400
                                text-center
                            ">
                                <div className="text-4xl mb-4">{domain.icon}</div>
                                <h3 className="text-xl font-bold text-blue-400 mb-2">{domain.label}</h3>
                                <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-blue-500 blur-xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Domains
