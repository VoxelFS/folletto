import StandardLayout from "@/components/layouts/StandardLayout";
import AboutHeader from "@/app/(frontend)/about/_components/AboutHeader";
import AboutDescription from "@/app/(frontend)/about/_components/AboutDescription";
import FourSteps from "@/app/(frontend)/about/_components/FourSteps";

export default function Page() {
    return (
        <StandardLayout>
            <section className="responsive-fullwidth">
                <AboutHeader/>
            </section>

            <section className="mt-12">
                <AboutDescription/>
            </section>

            <section className="responsive-fullwidth">
                <FourSteps />
            </section>
        </StandardLayout>
    );
}
