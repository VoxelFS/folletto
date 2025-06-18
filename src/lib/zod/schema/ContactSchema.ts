"use client";

import { z } from "zod";

export const contactFormSchema = z.object({
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
    comments: z.string().min(1, "Comments are required"),
})

export type Contact = z.infer<typeof contactFormSchema>