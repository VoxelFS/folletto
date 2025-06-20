import { getCategories } from "@/actions/getSpecificCategory";
import Title from "@/components/ui/Title";
import {getDrinks} from "@/actions/getDrinks";
import CategoriesSelector from "@/app/(frontend)/(home)/_components/Menu/CategoriesSelector";
import parseDrinks from "@/utils/parsers/parseDrinks";
import {Button} from "@/components/ui/Button";

export default async function Menu() {

    const categories = await getCategories();
    const drinks = parseDrinks(await getDrinks());

    return (
        <div className="flex flex-col items-center bg-background-white py-6 px-24">
            <Title title="Folletto Menu" className="mb-7" />

            <CategoriesSelector categories={categories} drinks={drinks} />

            <Button href="/menu" className="mt-7">
                See More
            </Button>
        </div>
    );
}