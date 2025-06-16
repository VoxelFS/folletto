import StandardLayout from "@/components/layouts/StandardLayout";
import AboutHeader from "@/app/(frontend)/about/_components/AboutHeader";

export default function Page() {
    return (
        <StandardLayout>
            <section className="responsive-fullwidth">
                <AboutHeader />
            </section>
        </StandardLayout>
    );
}
