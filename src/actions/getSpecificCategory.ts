"use server";

import {getPayload} from "@/lib/payload";
import { Category } from '@/payload-types';

export const getCategories = async () => {
    const payload = await getPayload();
    const categories = await payload.find({
        collection: "categories",
        pagination: false,
        sort: 'id'
    });

    return categories.docs as Category[]
}