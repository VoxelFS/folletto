import StandardLayout from "@/components/layouts/StandardLayout";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import Banner from "@/components/ui/Banner";
import LocationsDisplay from "@/app/(frontend)/location/_components/LocationsDisplay";

export default function Page() {
    return (
        <StandardLayout>
            <Header title="Location" image="/images/location/Location_main.png" />
            <section className="my-24">
                <Title title="Folletto Caffè Branches"/>
                <LocationsDisplay />
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