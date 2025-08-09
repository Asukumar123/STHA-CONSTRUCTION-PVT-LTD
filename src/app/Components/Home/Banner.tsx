"use client";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[729px] w-full overflow-hidden">
            {/* Image Section */}
            <div className="absolute top-0 left-0 h-full w-full">
                <Image
                    src="/Assets/Banner2.png"
                    alt="Banner Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Button at Bottom Left */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 mt-6 sm:left-6 md:left-8">
                <Link href="/Services">
                    {/* <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 mb-3  sm:mb-4 md:mb-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                        Explore the Services 
                        <span className="mt-0.5">
                            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                    </button> */}
                </Link>
            </div>
        </div>
    );
}