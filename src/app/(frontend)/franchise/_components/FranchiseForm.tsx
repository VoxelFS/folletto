"use client";

import {useForm} from "react-hook-form";
import {Franchise, franchiseSchema} from "@/lib/zod/schema/FranchiseSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import FormTextarea from "@/components/ui/FormTextArea";
import {useState} from "react";
import ThankYou from "@/components/ThankYou";
import Title from "@/components/ui/Title";

export default function FranchiseForm() {
    const [sent, setSent] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Franchise>({
        resolver: zodResolver(franchiseSchema),
    });

    async function onSubmit(data: Franchise) {
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
                "Amount to Invest": data.amount,
                "Preferred Location": data.preferredLocation,
                "Comments": data.comments,
            }),
        });
        const result = await response.json();
        if (result.success) {
            setSent(true);
        }
    }

    return (
        <>
            {sent ? (
                <ThankYou />
            ) : (
                <>
                    <section className="mt-24 flex flex-col items-center text-center">
                        <Title title="Join our Family!"/>
                        <h3 className="text-primary-brown mt-7">Franchise consultation application form</h3>
                        <p className="md:w-[50%]">We promise to provide reasonable fees for a trendy design store as
                            well as training for operation.</p>
                    </section>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 my-12">
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
                        </div>
                            <FormInput
                                label={"Phone"}
                                placeholder={"Enter your phone number"}
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
                            <FormInput
                                label={"Amount available to invest"}
                                placeholder={"Enter amount of money"}
                                {...register("amount", {valueAsNumber: true})}
                                error={errors.amount}
                                className="w-full"
                            />
                            <FormInput
                                label={"Preferred Franchise Location"}
                                placeholder={"Enter your preferred location"}
                                {...register("preferredLocation")}
                                error={errors.preferredLocation}
                                className="w-full"
                            />
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
                                    className="text-primary-brown hover:cursor-pointer disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Submitting..." : "Send a form"}
                                </button>
                            </Button>
                    </form>
                </>
            )}
        </>
    );
}