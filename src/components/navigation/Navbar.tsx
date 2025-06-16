"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationItems = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about" },
        { name: "Menu", href: "/menu" },
        { name: "Location", href: "/location" },
        { name: "Franchise", href: "/franchise" },
        { name: "Contact us", href: "/contact" },
    ];

    return (
        <>
            {/* DESKTOP layout */}
            <nav className="hidden md:flex absolute top-0 left-0 w-full z-50 flex-col justify-center items-center">
                <Image
                    src="/images/svg/folletto_logo.png"
                    alt="folletto logo"
                    height={130}
                    width={130}
                />

                <div className="flex flex-row justify-between gap-x-6">
                    {navigationItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <div
                                key={index}
                                className={`w-fit py-2 px-4 ${isActive ? "border-b-2 border-primary-brown" : ""}`}
                            >
                                <Link href={item.href}>
                                    <p
                                        className={`font-medium transition-transform duration-200 ease-in-out ${
                                            isActive ? "text-primary-brown" : "text-white"
                                        } hover:scale-105 hover:text-primary-brown`}
                                    >
                                        {item.name}
                                    </p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>

            {/* MOBILE top bar */}
            <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-background-black flex items-center justify-between px-6 py-2 border-b-2 border-primary-brown">
                <Image
                    src="/images/svg/folletto_logo.png"
                    alt="folletto logo"
                    width={50}
                    height={50}
                />

                <button onClick={() => setMenuOpen((prev) => !prev)} className="text-white z-50">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* MOBILE overlay menu */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-screen bg-background-black flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } z-40`}
            >
                {navigationItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            <p
                                className={`text-2xl font-semibold ${
                                    isActive ? "text-primary-brown" : "text-white"
                                } hover:text-primary-brown transition-all`}
                            >
                                {item.name}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
