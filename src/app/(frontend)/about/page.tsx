import StandardLayout from "@/components/layouts/StandardLayout";
import AboutDescription from "@/app/(frontend)/about/_components/AboutDescription";
import FourSteps from "@/app/(frontend)/about/_components/FourSteps";
import AboutAdvantages from "@/app/(frontend)/about/_components/AboutAdvantages";
import Banner from "@/components/ui/Banner";
import Header from "@/components/ui/Header";

export default function Page() {
    return (
        <StandardLayout>
            <section className="responsive-fullwidth">
                <Header title="About Us" image="/images/about/aboutus_main.png" alt="About us main" />
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
