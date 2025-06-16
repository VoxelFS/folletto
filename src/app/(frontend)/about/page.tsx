import StandardLayout from "@/components/layouts/StandardLayout";
import AboutHeader from "@/app/(frontend)/about/_components/AboutHeader";
import AboutDescription from "@/app/(frontend)/about/_components/AboutDescription";
import FourSteps from "@/app/(frontend)/about/_components/FourSteps";
import AboutAdvantages from "@/app/(frontend)/about/_components/AboutAdvantages";
import Banner from "@/components/ui/Banner";

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

            <section className="responsive-fullwidth mt-48 mb-12">
                <Banner
                    title={"GET FOLLETTO NOW!"}
                    description={"If you want to start your Folletto Caffè, get in touch with us using the form"}
                    link={"Get Folletto"}
                    href={"/franchise"}
                    img={"/images/about/coffee_cup.png"}
                    alt={"coffee cup"}
                />
            </section>
        </StandardLayout>
    );
}
