"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Location", href: "/location" },
        { name: "Franchise", href: "/franchise" },
        { name: "Contact us", href: "/contact" },
    ];

    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex flex-col justify-center items-center py-4 bg-transparent">
            <Image
                src="/images/svg/folletto_logo.png"
                alt="folletto logo"
                height={150}
                width={150}
            />

            <div className="flex flex-row justify-between gap-x-16">
                {navigationItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <div key={index} className={`w-fit py-2 px-10 ${isActive ? "border-b-2 border-primary-brown" : ""}`}>
                            <Link href={item.href}>
                                <p
                                    className={`font-medium transition-transform duration-200 ease-in-out ${
                                        isActive ? "text-primary-brown" : "text-white"
                                    } hover:scale-105`}
                                >
                                    {item.name}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
}
