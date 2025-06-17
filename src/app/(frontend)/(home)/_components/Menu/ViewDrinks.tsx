import {ParsedDrinks} from "@/types/drinks";
import {filterDrink} from "@/utils/filterDrink";
import Image from "next/image";

interface ViewDrinksProps {
    drinks: ParsedDrinks[];
    category: string;
}

export default function ViewDrinks({ drinks, category }: ViewDrinksProps) {
    const filteredDrinks = filterDrink(category, drinks).slice(0, 4);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredDrinks.map((drink, index) => (
                <div
                    className="flex flex-col bg-white rounded-xl items-center py-6"
                    key={index}
                >
                    <div className="w-[clamp(200px,30vw,300px)] aspect-[4/3] relative">
                        <Image
                            src={drink.DrinkPhoto.url}
                            alt={drink.DrinkPhoto.alt}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <p className="font-medium mt-4">{drink.drink}</p>
                </div>
            ))}
        </div>

    );
}