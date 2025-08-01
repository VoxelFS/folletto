import Title from "@/components/ui/Title";
import {Button} from "@/components/ui/Button";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-7">
            <Title title={"Write Us a Message"} />
            <p className="text-center">
                Have any questions? Get in contact with us using the link below!
                <br/>
                Our team will be in touch with you within 48-hours.
            </p>
            <Button href="/contact" className="text-primary-brown">
                Contact Us
            </Button>
        </div>
    );
}