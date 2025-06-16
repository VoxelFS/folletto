import Title from "@/components/ui/Title";
import Image from "next/image";

export default function AboutDescription() {
    return (
        <div className="flex flex-col gap-y-20 mb-20">
            <div className="flex flex-col text-center gap-y-7">
                <Title title="About Folletto Caffè" />
                <p>
                    At Folletto Caffè, we offer cutting-edge beverage automation robots at competitive prices, delivering
                    superior taste and lightning-fast beverage preparation. Our robots redefine beverage service standards,
                    surpassing traditional robotic baristas to create an unparalleled coffee experience that customers will
                    crave again and again.
                </p>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-x-10 gap-y-6">
                <Image
                    src="/images/about/aboutus_second.png"
                    alt="coffee about"
                    width={600}
                    height={400}
                    className="md:w-1/2 w-auto h-auto"
                />

                <div className="md:w-1/2 py-2">
                    <h3 className="text-secondary-brown">Folletto Robot Barista</h3>
                    <p className="mt-5">
                        Folletto Caffè introduces a revolutinary coffee station centered on a robotic coffee maker.
                        Our robotic barista handles every step of brewing and serving exceptional drinks. With a focus
                        on speed and sealess integration, our service ensures customers can fully savour their coffee
                        experience.
                    </p>
                </div>
            </div>
        </div>
    );
}