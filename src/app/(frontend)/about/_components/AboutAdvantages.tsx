import Title from "@/components/ui/Title";
import Image from "next/image";

export default function AboutAdvantages() {

    const info = [
        {
            image: "/images/about/aboutus_2.png",
            titleAd: "Competitive Advantage 1",
            title: "Best Equipment",
            description: "Folletto Caffè leverages optimized robotic cafe technology, boasting significantly higher quality" +
                " compared to unmanned coffee vending machines, and is more cost-effective than other robotic cafe" +
                " platforms offering similar performance.",
        },
        {
            image: "/images/about/aboutus_3.png",
            titleAd: "Competitive Advantage 2",
            title: "High Efficiency",
            description: "The robotic barista can whip up more than 70 specialty coffee in 1 hour. Your customers will" +
                " always have the drink they want."
        },
        {
            image: "/images/about/aboutus_4.png",
            titleAd: "Competitive Advantage 3",
            title: "Manage your unmanned store effortlessly with just one hour a day!",
            description: "We alleviate your efforts through Folletto HQ's systematic management system."
        }
    ]

    return (
        <div className="flex flex-col gap-y-20">
            <div className="flex flex-col gap-y-7 text-center items-center">
                <Title title="Business Advantages" />
                <p className="w-full md:max-w-1/3">Folletto Caffè serves a quick, smart and perfect taste of the future.</p>
            </div>

            <div className="flex flex-col gap-y-5 md:gap-y-0">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className={`flex bg-background-white flex-col-reverse ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1200}
                            height={800}
                            className="md:w-1/2 w-auto h-auto"
                        />
                        <div
                            className={`flex flex-col p-8 gap-y-2 md:w-1/2 ${
                                index % 2 === 0 ? "" : "items-start text-left"
                            }`}
                        >
                            <h5>{item.titleAd}</h5>
                            <h4 className="text-xl font-semibold text-secondary-brown">{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}