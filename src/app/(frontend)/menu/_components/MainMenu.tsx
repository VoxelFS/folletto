import {getCategories} from "@/actions/getSpecificCategory";
import {getDrinks} from "@/actions/getDrinks";
import parseDrinks from "@/utils/parsers/parseDrinks";

export default async function MainMenu() {

    const categories = await getCategories();
    const drinks = parseDrinks(await getDrinks());

    return (
        <div>

        </div>
    );
}