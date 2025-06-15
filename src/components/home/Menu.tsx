import { getCategories } from "@/actions/getSpecificCategory";
import Title from "@/components/ui/Title";
import {getDrinks} from "@/actions/getDrinks";
import CategoriesSelector from "@/components/home/Menu/CategoriesSelector";
import parseDrinks from "@/utils/parsers/parseDrinks";

export default async function Menu() {

    const categories = await getCategories();
    const drinks = parseDrinks(await getDrinks());

    return (
        <div className="flex flex-col items-center bg-background-white py-6">
            <Title title="Folletto Menu" className="mb-7" />

            <CategoriesSelector categories={categories} drinks={drinks} />
        </div>
    );
}