import StandardLayout from "@/components/layouts/StandardLayout";
import Title from "@/components/ui/Title";
import {Button} from "@/components/ui/Button";

export default function NotFoundPage() {
    return (
        <StandardLayout>
            <div className="hidden md:block responsive-fullwidth bg-background-black h-[250px]"/>
            <div className="w-full h-full grid place-items-center text-center mb-50">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center">
                        <p className="font-semibold opacity-50">
                            Page Not Found (404)
                        </p>
                        <Title title={"That page is not around today :("} />
                    </div>
                    <Button href="/">
                        Back to home
                    </Button>
                </div>
            </div>
        </StandardLayout>
    );
}