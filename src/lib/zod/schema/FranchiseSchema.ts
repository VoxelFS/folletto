"use client";

import { z } from "zod";

export const franchiseSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
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
    email: z.string().min(1, "Email is required").email("Invalid email"),
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
    preferredLocation: z.string().min(1, "Preferred location is required"),
    comments: z.string().min(1, "Comments are required"),
});

export type Franchise = z.infer<typeof franchiseSchema>;