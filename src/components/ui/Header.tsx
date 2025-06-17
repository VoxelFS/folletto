"use client";

import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

interface HeaderProps {
    title: string;
    image: string;
}

export default function Header({ title, image }: HeaderProps) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

    return (
        <div ref={ref}
             className="responsive-fullwidth w-full overflow-hidden relative grid place-items-center"
             style={{
                 height: 'clamp(600px, 80vh, 700px)'
             }}>
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover", y: backgroundY }}
            >
            </motion.div>


            <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1 className="translate-y-10" style={{ y: textY }}>{title}</motion.h1>
            </div>
        </div>
    );
}