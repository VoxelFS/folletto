"use client";

import {revalidateRoutes} from "@/app/(frontend)/revalidate/revalidateRoutes";
import Button from "@/components/ui/Button";

export default function Page() {

    function handleClick() {
        void revalidateRoutes();
        alert("All routes revalidated!");
    }

    return (
        <div className="flex flex-col items-center justify-center gap-y-10">
            <h1>CMS Revalidation Page</h1>
            <p>This is an admin tool to trigger a full site refresh. Use after changing the CMS.</p>
            <Button>
                <button onClick={handleClick} className="text-primary-brown hover:cursor-pointer">
                    Revalidate
                </button>
            </Button>
        </div>
    );
}