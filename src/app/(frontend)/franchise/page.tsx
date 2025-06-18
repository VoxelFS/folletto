import StandardLayout from "@/components/layouts/StandardLayout";
import Header from "@/components/ui/Header";
import Title from "@/components/ui/Title";
import FranchiseForm from "@/app/(frontend)/franchise/_components/FranchiseForm";

export default function Page() {
    return (
        <StandardLayout>
            <Header title="Franchise" image="/images/location/location_placeholder.png" />
            <section className="mt-24 flex flex-col items-center text-center">
                <Title title="Join our Family!" />
                <h3 className="text-primary-brown mt-7">Franchise consultation application form</h3>
                <p className="md:w-[50%]">We promise to provide reasonable fees for a trendy design store as well as training for operation.</p>
            </section>
            <section className="my-12">
                <FranchiseForm />
            </section>
        </StandardLayout>
    );
}