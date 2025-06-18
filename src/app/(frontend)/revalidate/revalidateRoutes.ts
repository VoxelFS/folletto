"use server";

import { revalidatePath } from "next/cache";

export async function revalidateRoutes() {
    revalidatePath("/", "layout");
    console.log("All routes revalidated at", new Date().toISOString());
}