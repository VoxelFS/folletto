import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface BannerProps {
    title: string;
    description: string;
    link: string;
    href: string;
    img: string;
    alt: string;
}

export default function Banner({ title, description, link, href, img, alt }: BannerProps) {
    return (
        <div className="bg-background-black flex flex-col items-center justify-center gap-y-7 py-24 relative">

            <Image
                src={img}
                alt={alt}
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] md:-translate-y-[130%] z-10
               w-[225px] md:w-[300px] h-auto"
            />
            <div className="gap-y-0">
                <h3 className="text-primary-brown text-center z-5">{title}</h3>
                <div className="responsive-body z-5">
                    <p className="text-primary-brown text-center">
                        {description}
                    </p>
                </div>
            </div>
            <Button className="hover:bg-primary-brown text-primary-brown hover:text-black z-5">
                <Link href={href}>
                    {link}
                </Link>
            </Button>
        </div>
    );
}