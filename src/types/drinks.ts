export type ParsedDrinks = {
    DrinkPhoto: {
        alt: string;
        url: string;
        width: number;
        height: number;
    }
    drink: string;
    drinkCategory: {
        category: string;
    }
}