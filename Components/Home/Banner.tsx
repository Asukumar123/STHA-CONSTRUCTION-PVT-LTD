"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { MoveRight } from "lucide-react"; // Importing the MoveRight icon

export default function Banner() {
    const controls = useAnimation(); // Animation controls
    const [isHovered, setIsHovered] = useState(false); // Hover state
    const [isClicked, setIsClicked] = useState(false); // Click state

    const handleClick = () => {
        setIsClicked(true);
        controls.start({
            scale: [1, 1.2, 0.9, 1], // Bounce effect
            rotate: [0, 20, -20, 0], // Add a slight rotation
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        });

        // Reset after the animation
        setTimeout(() => setIsClicked(false), 600);
    };

    return (
        <div
            className="relative h-[729px] w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <motion.div
                animate={controls}
                className="absolute top-0 left-0 h-full w-full"
                onClick={handleClick}
            >
                <Image
                    src="/Assets/Banner.png"
                    alt="Banner Image"
                    fill
                    className="object-cover cursor-pointer"
                />
            </motion.div>

            {/* Hover Overlay */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-blue-600/70 via-blue-600/30 to-transparent backdrop-blur-md transition-all duration-500 ${
                        isHovered ? "opacity-60 translate-y-0" : "opacity-0 translate-y-full"
                      }`}
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-red-600 text-black font-semibold rounded-lg shadow-lg"
                        onClick={handleClick}
                    >
                        <Link href="/Services" className="flex items-center gap-2">
                      Explore the Services <span className="mt-1"><MoveRight /></span>  
                      </Link>
                      
                    </motion.button>
                </motion.div>
            )}

            {/* Clicked State Indicator */}
            {isClicked && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-90 backdrop-blur-lg"
                >
                    <p className="text-white text-lg font-bold">Opening Services.....</p>
                </motion.div>
            )}
        </div>
    );
}
