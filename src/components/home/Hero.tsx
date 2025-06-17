"use client";

import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <>
            <div
                ref={ref}
                className="responsive-fullwidth w-full h-[600px] md:h-screen overflow-hidden relative grid place-items-center"
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(/images/hero/hero_main.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: backgroundY
                    }}
                />

                <div
                    className="absolute inset-0 z-20"
                    style={{
                        backgroundImage: `url(/images/hero/hero_bottom.png)`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />

            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <h2 className="leading-tight m-0">
                    Join the Folletto Caffè
                </h2>
                <h2 className="leading-tight m-0">
                    Join into the Future of Coffee
                </h2>
                <p className="md:w-[50%] mx-auto text-center">
                    Folletto Caffè proudly stands as the world&apos;s fully automated multiproduct robot cafe
                    offering a diverse range of drinks
                </p>
            </div>
        </>
    );
}

// <div className="relative w-full h-[400px] sm:h-[600px] md:h-[720px]">
//     <Image
//         src="/images/hero/hero_main.png"
//         alt="Hero Image"
//         fill
//         priority
//     />
//
//     <div
//         className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-30 z-10 ">
//         <Image
//             src="/images/hero/hero_machine.png"
//             alt="Hero Machine"
//             width={600}
//             height={400}
//             className="object-contain w-full max-w-[600px]"
//         />
//     </div>
//
//     <div
//         className="responsive-body absolute bottom-0 left-0 right-0 justify-center text-center z-20 translate-y-75 sm:translate-y-55">
//         <h2 className="leading-tight m-0">
//             Join the Folletto Caffè
//         </h2>
//         <h2 className="leading-tight m-0">
//             Join into the Future of Coffee
//         </h2>
//         <p className="md:w-[50%] mx-auto text-center">
//             Folletto Caffè proudly stands as the world&apos;s fully automated multiproduct robot cafe offering a
//             diverse range of drinks
//         </p>
//     </div>
//
// </div>