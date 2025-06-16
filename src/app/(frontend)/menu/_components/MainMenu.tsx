import {getCategories} from "@/actions/getSpecificCategory";
import {getDrinks} from "@/actions/getDrinks";
import parseDrinks from "@/utils/parsers/parseDrinks";
import {filterDrink} from "@/utils/filterDrink";
import Title from "@/components/ui/Title";
import Image from "next/image";

export default async function MainMenu() {

    const categories = await getCategories();
    const drinks = parseDrinks(await getDrinks());

    return (
        <div className="flex flex-col justify-center items-center">
            {categories.map((category, index) => {
                const filteredDrinks = filterDrink(category.category, drinks);
                return (
                    <div className="flex flex-col gap-y-7 justify-center items-center mb-12" key={index}>
                        <Title title={category.category} />
                        <div className="flex flex-col md:flex-row flex-wrap gap-y-10 gap-x-5 items-center justify-center">
                            {filteredDrinks.map((drink, i) => (
                                <div key={i} className="text-center">
                                    <div
                                        className="py-10 bg-background-white rounded-xl w-[clamp(200px,30vw,300px)] h-[clamp(200px,30vw,300px)] relative">
                                        <Image
                                            src={drink.DrinkPhoto.url}
                                            alt={drink.DrinkPhoto.alt}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                    <p className="pt-2">{drink.drink}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}