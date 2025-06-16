import Image from "next/image";

export default function AboutHeader() {
    return (
        <div className="relative w-full aspect-[12/9] md:aspect-[21/9]">
            <Image
                src="/images/about/aboutus_main.png"
                alt="About us main"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="translate-y-10">About Us</h1>
            </div>
        </div>
    );
}