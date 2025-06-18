"use client";

import { Category } from "@/payload-types";
import { useState } from "react";
import {ParsedDrinks} from "@/types/drinks";
import ViewDrinks from "@/app/(frontend)/(home)/_components/Menu/ViewDrinks";

interface CategoriesSelectorProps {
    categories: Category[];
    drinks: ParsedDrinks[];
}

export default function CategoriesSelector({ categories, drinks }: CategoriesSelectorProps) {
    const [curr, setCurr] = useState<number>(0);
    const [currCategory, setCurrCategory] = useState<string>(categories[0].category);

    function setIndexAndCategory(index: number, category: string) {
        setCurr(index)
        setCurrCategory(category);
    }

    return (
        <>
            {/* Desktop Selector */}
            <div className="hidden md:flex flex-row items-center justify-center gap-x-10">
                {categories.map((category, index) => {
                    const isActive = curr === index;
                    return (
                        <span
                            onClick={() => setIndexAndCategory(index, category.category)}
                            key={index}
                            className={`w-fit h-fit p-3 rounded-xl font-medium hover:cursor-pointer transform
                                transition-all duration-300 ease-in-out
                                ${isActive
                                    ? "bg-background-black text-primary-brown scale-105"
                                    : "bg-transparent text-black scale-100 hover:scale-105"
                            }`}
                        >
                        <h5>{category.category}</h5>
                      </span>
                    );
                })}
            </div>

            {/* Mobile Selector */}
            <div className="block md:hidden w-full px-4">
                <select
                    value={curr}
                    onChange={(e) => {
                        const selectedIndex = Number(e.target.value);
                        const selectedCategory = categories[selectedIndex];
                        setIndexAndCategory(selectedIndex, selectedCategory.category);
                    }}
                    className="w-full p-3 rounded-xl bg-background-black text-primary-brown"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={index}>
                            {category.category}
                        </option>
                    ))}
                </select>
            </div>


            <div className="mt-7">
                <ViewDrinks drinks={drinks} category={currCategory} />
            </div>
        </>
    );
}
