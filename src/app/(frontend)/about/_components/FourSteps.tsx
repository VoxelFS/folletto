import Title from "@/components/ui/Title";
import Image from "next/image";

export default function FourSteps() {

    const info = [
        {
            src: "/images/svg/Kiosk.svg",
            title: "Choose",
            description: "Choose your drink and cup size via kiosk or app",
        },
        {
            src: "/images/svg/Pay.svg",
            title: "Pay",
            description: "Pay by card or phone",
        },
        {
            src: "/images/svg/Wait.svg",
            title: "Wait",
            description: "Wait a bit",
        },
        {
            src: "/images/svg/Enjoy.svg",
            title: "Enjoy",
            description: "Your coffee is Ready to go!",
        },
    ];

    return (
        <div className="bg-background-white flex flex-col py-12">
            <div className="flex flex-col justify-center text-center items-center gap-y-7">
                <Title title="Four Steps to a Great Cup of Coffee"/>
                <p className="mx-3 w-full md:w-1/2">
                    In today&apos;s fast-paced world, the robotic coffee maker meets customers&apos; priorities:
                    <br/>
                    <b>speed, efficiency and maintaining personal space.</b>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 items-start px-20">
                {info.map((item, i) => (
                    <div
                        className="flex flex-col items-center text-center w-full"
                        key={i}
                    >
                        <div className="w-22 sm:w-24 mb-4">
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={96}
                                height={96}
                                className="w-full h-auto"
                            />
                        </div>
                        <h4 className="text-secondary-brown">{item.title}</h4>
                        <p className="w-48">{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}