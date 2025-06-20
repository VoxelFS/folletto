import {ButtonHTMLAttributes, forwardRef} from "react";
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Link from "next/link";

const buttonVariants = cva(
    "py-3 px-6 border-2 w-fit rounded-xl border-primary-brown hover:cursor-pointer hover:bg-background-black hover:scale-105 transform transition-all duration-200 ease-in-out",
    {
        variants: {
            variant: {
                default: "text-primary-brown hover:border-background-black",
                dark: "hover:bg-primary-brown text-primary-brown hover:text-black"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children, href, variant, ...props }, ref) => {
        if (href) {
            return (
                <Link
                    href={href}
                    className={cn(buttonVariants({ variant, className }))}
                >
                    {children}
                </Link>
            )
        }
        return (
            <button
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }