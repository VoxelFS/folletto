import Image from "next/image";

interface HeaderProps {
    title: string;
    image: string;
    alt: string;
}

export default function Header({ title, image, alt }: HeaderProps) {
    return (
        <div className="relative w-full aspect-[12/9] md:aspect-auto">
            {/* Mobile version: uses fill */}
            <div className="relative w-full aspect-[12/9] md:hidden">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Desktop version: uses fixed height & width */}
            <div className="hidden md:block">
                <Image
                    src={image}
                    alt={alt}
                    height={1247}
                    width={2768}
                    className="object-cover"
                />
            </div>


            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="translate-y-10">{title}</h1>
            </div>
        </div>
    );
}