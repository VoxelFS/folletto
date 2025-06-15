import {ParsedDrinks} from "@/types/drinks";
import {filterDrink} from "@/utils/filterDrink";
import Image from "next/image";

interface ViewDrinksProps {
    drinks: ParsedDrinks[];
    category: string;
}

export default function ViewDrinks({ drinks, category }: ViewDrinksProps) {
    const filteredDrinks = filterDrink(category, drinks);

    return (
        <div className="flex flex-row max-w-1/3 overflow-x-scroll">
            {filteredDrinks.map((drink, index) => (
                <div
                    className="flex flex-col bg-white rounded-2xl items-center py-6"
                    key={index}
                >
                    <Image
                        src={drink.DrinkPhoto.url}
                        alt={drink.DrinkPhoto.alt}
                        height={350}
                        width={250}
                    />
                    <p>{drink.drink}</p>
                </div>
            ))}
        </div>
    );
}