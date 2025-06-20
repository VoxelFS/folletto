import Image from "next/image";
import {Button} from "@/components/ui/Button";

export default function ThankYou() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image
                src="/images/svg/check.svg"
                alt="tick"
                height={128}
                width={128}
            />
            <h2>Thank you for contacting us!</h2>
            <p>We have received your message.</p>
            <p className="mb-10">We&apos;ll reach out to you soon.</p>
            <Button href="/" >
                Back to home
            </Button>
        </div>
    );
}