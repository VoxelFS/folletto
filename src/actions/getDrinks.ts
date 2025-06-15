"use server";

import {getPayload} from "@/lib/payload";
import { Drink } from '@/payload-types';

export const getDrinks = async () => {
    const payload = await getPayload();
    const drinks = await payload.find({
        collection: "drinks",
        pagination: false,
    });

    return drinks.docs as Drink[]
}