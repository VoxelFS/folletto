import Image from "next/image";

export default function AboutUs() {
    return (
        <div>
            <div className="absolute right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
                <Image
                    src="/images/hero/coffee.png"
                    alt="Coffee Beans"
                    width={350}
                    height={350}
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="pt-[200px] sm:pt-[300px] flex flex-col sm:flex-row-reverse gap-x-10 gap-y-6">
                <div className="sm:w-1/2 py-2">
                    <h3 className="text-secondary-brown">About Us</h3>
                    <p>
                        At Folletto Caffè, we offer cutting-edge beverage automation robots at competitive prices,
                        delivering superior taste and lightning-fast beverage preparation.
                        Our robots redefine beverage service standards, surpassing traditional robotic baristas to
                        create an unparalleled coffee experience customers will crave again and again.
                    </p>
                </div>

                <Image
                    src="/images/hero/coffee_about.png"
                    alt="coffee about"
                    width={600}
                    height={400}
                    className="sm:w-1/2 w-full h-auto"
                />
            </div>

            <div className="pt-20 flex flex-col sm:flex-row gap-x-10 gap-y-6">
                <div className="sm:w-1/2 py-2">
                    <h3 className="text-secondary-brown">Our Distributors Worldwide</h3>
                    <p>
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
                </div>

                <Image
                    src="/images/hero/folletto_group.png"
                    alt="folletto group"
                    width={600}
                    height={400}
                    className="sm:w-1/2 w-full h-auto"
                />
            </div>
        </div>
    );
}