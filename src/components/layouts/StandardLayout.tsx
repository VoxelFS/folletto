"use client";

import { HtmlHTMLAttributes, ReactNode } from "react";

interface StandardPageLayoutProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export default function StandardLayout({ children }: StandardPageLayoutProps) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <main className="responsive-body grow">{children}</main>
            </div>
        </>
    );
}