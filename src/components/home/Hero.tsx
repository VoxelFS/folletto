import Image from "next/image";

export default function Hero() {
    return (
        <div className="responsive-fullwidth pb-10">
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[720px]">
                <Image
                    src="/images/hero/hero_main.png"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                />

                <div
                    className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-30 z-10">
                    <Image
                        src="/images/hero/hero_machine.png"
                        alt="Hero Machine"
                        width={600}
                        height={400}
                        className="object-contain w-full max-w-[600px]"
                    />
                </div>

                <div
                    className="responsive-body absolute bottom-0 left-0 right-0 justify-center text-center z-20 translate-y-75 sm:translate-y-55">
                    <h2 className="leading-tight m-0">
                        Join the Folletto Caffè
                    </h2>
                    <h2 className="leading-tight m-0">
                        Join into the Future of Coffee
                    </h2>
                    <p className="md:w-[50%] mx-auto text-center">
                        Folletto Caffè proudly stands as the world's fully automated multiproduct robot cafe offering a
                        diverse range of drinks
                    </p>
                </div>

            </div>
        </div>
    );
}