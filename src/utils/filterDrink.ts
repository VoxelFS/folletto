import { ParsedDrinks } from "@/types/drinks";

export function filterDrink(
    categoryName: string,
    drinks: ParsedDrinks[]
): ParsedDrinks[] {
    return drinks.filter(
        (drink) => drink.drinkCategory.category.toLowerCase() === categoryName.toLowerCase()
    );
}
