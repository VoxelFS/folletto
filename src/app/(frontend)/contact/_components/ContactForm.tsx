"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Contact, contactFormSchema} from "@/lib/zod/schema/ContactSchema";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextArea";
import Button from "@/components/ui/Button";
import Image from "next/image";
import ThankYou from "@/components/ThankYou";

export default function ContactForm() {
    const [sent, setSent] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Contact>({
        resolver: zodResolver(contactFormSchema),
    });

    async function onSubmit(data: Contact) {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORM_KEY || "",
                "First Name": data.firstName,
                "Last Name": data.lastName,
                "Phone": data.phone,
                "Email": data.email,
                "Comments": data.comments,
            }),
        });
        const result = await response.json();
        if (result.success) {
            setSent(true);
        }
    }
    return (
        <div className="my-24 md:my-12">
            {sent ? (
                <ThankYou />
            ) : (
                <div className="flex flex-col md:flex-row gap-x-15">
                    <div className="w-full">
                        <h1 className="font-black">Contact Us</h1>
                        <p className="text-subtext-black">Feel free to contact us any time. Our consultant team will get in
                            touch with you within 48 hours.</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7">
                                <FormInput
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    {...register("firstName")}
                                    error={errors.firstName}
                                    className="w-full"
                                />
                                <FormInput
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    {...register("lastName")}
                                    error={errors.lastName}
                                    className="w-full"
                                />
                                <FormInput
                                    label={"Phone"}
                                    placeholder={"Enter your phone"}
                                    {...register("phone", {valueAsNumber: true})}
                                    error={errors.phone}
                                    className="w-full"
                                />
                                <FormInput
                                    label={"Email"}
                                    placeholder={"Enter your email"}
                                    {...register("email")}
                                    error={errors.email}
                                    className="w-full"
                                />

                            </div>
                            <FormTextarea
                                label="Comments"
                                placeholder="Write a message"
                                {...register("comments")}
                                error={errors.comments}
                                className="w-full"
                            />
                            <Button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-full text-primary-brown hover:cursor-pointer disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Send a message"}
                                </button>
                            </Button>
                        </form>
                    </div>
                    <div
                        className="md:block relative aspect-[4/3] w-full flex items-center justify-center">
                        <Image
                            src="/images/contact/contactus.png"
                            alt="contact us image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}