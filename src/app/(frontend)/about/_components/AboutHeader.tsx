import Image from "next/image";

export default function AboutHeader() {
    return (
        <div className="relative w-full aspect-[12/9] md:aspect-[21/9]">
            {/* Mobile version: uses fill */}
            <div className="relative w-full aspect-[12/9] md:hidden">
                <Image
                    src="/images/about/aboutus_main.png"
                    alt="About us main"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Desktop version: uses fixed height & width */}
            <div className="hidden md:block">
                <Image
                    src="/images/about/aboutus_main.png"
                    alt="About us main"
                    height={1247}
                    width={2768}
                    className="object-cover"
                />
            </div>


            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="translate-y-10">About Us</h1>
            </div>
        </div>
    );
}