'use client';


import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ArchitecturalDesign from '../Components/Services/architecture-design';
import InnovativeEngineeringSolutions from '../Components/Services/engineering-solutions';
import WorksCatalogue from '../Components/Services/works-catalogue';
import Hero from "@/app/Components/Home/Hero"

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
            <div>
                    <Hero/>
            </div>
         
     
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
