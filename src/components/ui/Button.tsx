import { HtmlHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends HtmlHTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <div
            className={clsx(
                "py-3 px-6 border-2 w-fit border-primary-brown rounded-xl hover:border-background-black hover:cursor-pointer hover:bg-background-black hover:scale-105 transform transition-all duration-200 ease-in-out",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
