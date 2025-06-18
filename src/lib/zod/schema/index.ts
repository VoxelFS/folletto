"use client";

import { z } from "zod";

export const franchiseSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    phone: z.preprocess(
        (val) => (val === '' || val === null ? NaN : Number(val)),
        z
            .number({
                invalid_type_error: "Phone number is required",
            })
            .refine((val) => !isNaN(val), {
                message: "Phone must be a valid number",
            })
    ) as z.ZodType<number>,
    email: z.string().email(),
    amount: z.preprocess(
        (val) => (val === '' || val === null ? NaN : Number(val)),
        z
            .number({
                invalid_type_error: "Amount is required",
            })
            .refine((val) => !isNaN(val), {
                message: "Amount must be a valid number",
            })
    ) as z.ZodType<number>,
    preferredLocation: z.string(),
    comments: z.string(),
});

export type Franchise = z.infer<typeof franchiseSchema>;