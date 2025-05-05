'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ArchitecturalDesign from '../Components/Services/architecture-design';
import InnovativeEngineeringSolutions from '../Components/Services/engineering-solutions';
import WorksCatalogue from '../Components/Services/works-catalogue';

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default function Page() {
    return (
        <div className="bg-white">
            <Image 
                src="/Assets/Services.png" 
                alt="Modern construction project"
                width={1920} 
                height={1080} 
                className="hidden lg:block object-cover sticky top-0 z-0" 
            />
            <div className="relative z-10 space-y-16 bg-white">
                <ScrollFadeIn>
                    <ArchitecturalDesign />
                </ScrollFadeIn>
                <ScrollFadeIn>
                    <InnovativeEngineeringSolutions />
                </ScrollFadeIn>
                <ScrollFadeIn>
                    <WorksCatalogue />
                </ScrollFadeIn>
            </div>
        </div>
    );
}
