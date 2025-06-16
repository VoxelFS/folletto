import StandardLayout from "@/components/layouts/StandardLayout";
import Header from "@/components/ui/Header";
import Banner from "@/components/ui/Banner";
import MainMenu from "@/app/(frontend)/menu/_components/MainMenu";

export default function Page() {
    return (
        <StandardLayout>
            <section className="responsive-fullwidth">
                <Header title="Menu" image="/images/menu/menu_main.png" alt="menu main"/>
            </section>

            <section className="mt-24">
                <MainMenu />
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