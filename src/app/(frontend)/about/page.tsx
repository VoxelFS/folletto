import StandardLayout from "@/components/layouts/StandardLayout";
import AboutHeader from "@/app/(frontend)/about/_components/AboutHeader";
import AboutDescription from "@/app/(frontend)/about/_components/AboutDescription";
import FourSteps from "@/app/(frontend)/about/_components/FourSteps";
import AboutAdvantages from "@/app/(frontend)/about/_components/AboutAdvantages";

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

            <section className="mt-20">
                <AboutAdvantages />
            </section>
        </StandardLayout>
    );
}
