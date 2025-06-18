import StandardLayout from "@/components/layouts/StandardLayout";
import Header from "@/components/ui/Header";
import FranchiseForm from "@/app/(frontend)/franchise/_components/FranchiseForm";

export default function Page() {
    return (
        <StandardLayout>
            <Header title="Franchise" image="/images/location/location_placeholder.png" />
            <FranchiseForm />
        </StandardLayout>
    );
}