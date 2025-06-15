import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Franchisee() {
    return (
        <div className="bg-background-black flex flex-col items-center justify-center gap-y-7 py-24 relative">

            <Image
                src="/images/hero/coffee_mug.png"
                alt="coffee mug"
                width={300}
                height={300}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150%] md:-translate-y-[130%] z-10
               w-[225px] md:w-[300px] h-auto"
            />

            {/* Text content appears below the mug, adjust with z-index if needed */}
            <h3 className="text-primary-brown text-center z-5">LOOKING TO BECOME A FRANCHISEE?</h3>
            <div className="responsive-body z-5">
                <p className="text-primary-brown text-center">
                    Join a revolutionary shift in cafe services. Explore the possibilities of owning your own robotic cafe,
                    where innovation and automation translate into high returns on investment and unparalleled profits
                    that many businesses aspire to achieve.
                </p>
            </div>
            <Button className="hover:bg-primary-brown text-primary-brown hover:text-black z-5">
                <Link href="/contact">
                    Get Folletto
                </Link>
            </Button>
        </div>
    );
}
