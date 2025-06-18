import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutUs() {
    return (
        <div>
            <div className="absolute right-0 w-[clamp(250px,30vw,350px)] h-[clamp(250px,30vw,350px)]">
                <Image
                    src="/images/hero/coffee.png"
                    alt="Coffee Beans"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="pt-[250px] flex flex-col md:flex-row-reverse gap-x-10 gap-y-6">
                <div className="md:w-1/2 py-2">
                    <h3 className="text-secondary-brown">About Us</h3>
                    <p className="mt-5">
                        At Folletto Caffè, we offer cutting-edge beverage automation robots at competitive prices,
                        delivering superior taste and lightning-fast beverage preparation.
                        Our robots redefine beverage service standards, surpassing traditional robotic baristas to
                        create an unparalleled coffee experience customers will crave again and again.
                    </p>
                    <Button className="mt-5 text-primary-brown">
                        More
                    </Button>
                </div>

                <div className="relative aspect-[4/3] w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/hero/coffee_about.png"
                        alt="coffee about"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="pt-20 flex flex-col md:flex-row gap-x-10 gap-y-6">
                <div className="md:w-1/2 py-2">
                    <h3 className="text-secondary-brown">Our Distributors Worldwide</h3>
                    <p className="mt-5">
                        Exported to 33 countries worldwide, including Dubai, Japan, Spain, Taiwan, Thailand, Russia,
                        Indonesia, Saudi Arabia, Iraq, Qatar, China, Kenya, Myanmar, Germany, Italy, Singapore,
                        and the United States.
                    </p>
                    <br/>
                    <p>
                        Want to take a sip of the future?

                        <br/>Make sure to swing by our robotic coffee points!

                        <br/>Find us at the following.
                    </p>

                    <Button className="mt-5 text-primary-brown">
                        <Link href="/location">
                            See Locations
                        </Link>
                    </Button>
                </div>
                <div className="relative aspect-[4/3] w-full md:w-1/2 flex items-center justify-center">
                    <Image
                        src="/images/hero/folletto_group.png"
                        alt="folletto group"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}