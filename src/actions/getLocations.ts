"use server";

import {getPayload} from "@/lib/payload";
import { Location } from '@/payload-types';

export const getLocations = async () => {
    const payload = await getPayload();
    const locations = await payload.find({
        collection: "locations",
        pagination: false,
    });

    return locations.docs as Location[]
}