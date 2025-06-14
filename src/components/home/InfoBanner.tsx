import Image from "next/image";

export default function InfoBanner() {
    const info = [
        {
            src: "/images/svg/Ellipse.svg",
            title: "24/7 Performance",
            description: "Maximize your profits with minimal operating costs",
        },
        {
            src: "/images/svg/24.svg",
            title: "Cost Saving",
            description: "Capable of operating the store 24/7.",
        },
        {
            src: "/images/svg/fullyAuto.svg",
            title: "Fully Automated",
            description: "The coffee point is fully automated.",
        },
        {
            src: "/images/svg/NoHR.svg",
            title: "No HR Concerns",
            description: "Never think about staff turnover issue with Folletto robotic barista.",
        },
    ];

    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-between h-full">
            {info.map((item, i) => (
                <div
                    className="flex flex-col items-center justify-center w-full sm:w-64 text-center"
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
                    <p className="text-white">{item.description}</p>
                </div>
            ))}
        </div>
    );
}
