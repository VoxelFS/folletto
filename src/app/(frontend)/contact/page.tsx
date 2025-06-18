import StandardLayout from "@/components/layouts/StandardLayout";
import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";

export default function Page() {
    return (
        <StandardLayout>
            <div className="hidden md:block responsive-fullwidth bg-background-black h-[250px]" />

            <ContactForm />
        </StandardLayout>
    );
}