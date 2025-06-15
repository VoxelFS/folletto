import {Category, Drink, Media} from '@/payload-types';
import { ParsedDrinks } from '@/types/drinks';

export default function parseDrinks(drinks: Drink[]): ParsedDrinks[] {
    return drinks.map((drink) => ({
        DrinkPhoto: {
            alt: (drink.drinkPhoto as Media).alt || '',
            url: (drink.drinkPhoto as Media).url || '',
            width: (drink.drinkPhoto as Media).width || 0,
            height: (drink.drinkPhoto as Media).height || 0,
        },
        drink: drink.drink,
        drinkCategory: {
            category: (drink.drinkCategory as Category).category || '',
        },
    }));
}
