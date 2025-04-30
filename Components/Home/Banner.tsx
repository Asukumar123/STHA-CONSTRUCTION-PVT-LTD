"use client";
import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Banner() {
    return (
        <div className="relative h-[729px] w-full overflow-hidden">
            {/* Image Section */}
            <div className="absolute top-0 left-0 h-full w-full">
                <Image
                    src="/Assets/Banner.png"
                    alt="Banner Image"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Button at Bottom Left */}
            <div className="absolute bottom-8 left-8">
                <Link href="/Services">
                    <button className="px-6 py-3 mb-6 bg-red-600 text-black font-semibold rounded-lg shadow-lg flex items-center gap-2">
                        Explore the Services <span className="mt-1"><MoveRight /></span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
