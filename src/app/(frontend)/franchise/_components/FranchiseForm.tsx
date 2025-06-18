"use client";

import {useForm} from "react-hook-form";
import {Franchise, franchiseSchema} from "@/lib/zod/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import FormTextarea from "@/components/ui/FormTextArea";

export default function FranchiseForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<Franchise>({
        resolver: zodResolver(franchiseSchema),
    });

    async function onSubmit(data: Franchise) {
        await new Promise<void>((resolve) => {setTimeout(resolve, 1000)})
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
            <div className="grid grid-cols-2 gap-x-7">
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
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </Button>
        </form>
    );
}