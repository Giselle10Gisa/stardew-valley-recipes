'use client';

import { useRecipes } from "@/src/hooks/useRecipes";
import { recipeApi } from "@/src/services/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Recipe {
    id: string;
    name: string;
    image: string;
    description: string;
    energy: number;
    health: number;
    price: number;
    ingredients: string[];
}

export default function Recipe() {
    const params = useParams();
    const id = params.id;
    const { loading } = useRecipes()
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loadingPage, setLoadingPage] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRecipe() {
            if (typeof id !== 'string') return;
            try {
                setLoadingPage(true);
                const data = await recipeApi.getRecipeById(id);
                setRecipe(data);
            } catch (e) {
                setError('Failed to fetch recipe');
            } finally {
                setLoadingPage(false);
            }
        }

        if (id) {
            fetchRecipe();
        }
    }, [id]);

    return (
        <main className="h-screen flex bg-picnic bg-cover bg-no-repeat">
            {loadingPage || loading ? (
                <div className="flex w-full h-full justify-center items-center">
                    <Link href={"/pages/dashboard"} className="absolute top-0 left-0">
                    <div className="w-10 h-10 p-4">
                        <i className="pi pi-chevron-circle-left text-3xl text-[#F2E7C4] hover:text-[#2e1b0f]"></i>
                    </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center gap-[40px] w-[600px] h-[400px] bg-[#F2E7C4] border-[10px] border-[#853605] rounded-lg">
                        <h1 className="text-[#853605] font-pixelify text-2xl">Loading...</h1>
                        <Image
                            alt="Loading icon - jar"
                            src="/assets/images/Emote_Jar.gif"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            ) : (
                (!recipe ? (
                    <div className="flex w-full h-screen justify-center items-center">
                        <Link href={"/pages/dashboard"} className="absolute top-0 left-0">
                            <div className="w-10 h-10 p-4">
                                <i className="pi pi-chevron-circle-left text-3xl text-[#F2E7C4] hover:text-[#2e1b0f]"></i>
                            </div>
                        </Link>
                        <div className="flex flex-col justify-center items-center gap-[40px] w-[600px] h-[400px] bg-[#F2E7C4] border-[10px] border-[#853605] rounded-lg">
                            <h1 className="text-red-600 font-pixelify text-2xl">Recipe not found</h1>
                            <Image
                                alt="Surprised emote"
                                src="/assets/images/Emote_Surprised.gif"
                                height={100}
                                width={100}
                            />
                        </div>
                    </div>
                ) : (
                    <div key={recipe.id} className="flex-grow grid grid-cols-2 px-64 relative bg-book bg-contain bg-center bg-no-repeat bg-fixed shadow-xl">
                        <>
                            <Link href={"/pages/dashboard"} className="absolute top-0">
                                <div className="w-10 h-10 p-4">
                                    <i className="pi pi-chevron-circle-left text-3xl text-[#F2E7C4] hover:text-[#2e1b0f]"></i>
                                </div>
                            </Link>
                            <div className="flex justify-center items-center">
                                <div className="bg-red-300 h-[400px] w-[250px] rounded-full flex justify-center items-center">
                                    {loading ? (
                                        <div className="text-black">loading</div>
                                    ) : (
                                        <Image 
                                            src={recipe.image} 
                                            alt={recipe.name} 
                                            width={150} 
                                            height={150}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col items-center mt-28 gap-8 font-pixelify text-[#853605]">
                                <p className="text-5xl w-[250px] text-center">{recipe.name}</p>
                                <p className="">{recipe.description}</p>
                                <div className="flex flex-row gap-52">
                                    <div className="gap-3 flex flex-col">
                                        <p className="underline">Ingredients:</p>
                                        {recipe.ingredients.map((ingredient) => (
                                            <ul>
                                                <li>{ingredient}</li>
                                            </ul>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="flex flex-row gap-1">
                                            <Image
                                                alt="Energy icon"
                                                src="/assets/icons/energy.png"
                                                height={20}
                                                width={20}
                                            />
                                            {recipe.energy}
                                        </p>
                                        <p className="flex flex-row gap-1">
                                            <Image
                                                alt="Health icon"
                                                src="/assets/icons/health.png"
                                                height={20}
                                                width={20}
                                            />
                                            {recipe.health}
                                        </p>
                                        <p className="flex flex-row gap-1">
                                            <Image
                                                alt="Coin icon"
                                                src="/assets/icons/gold.png"
                                                height={20}
                                                width={20}
                                            />
                                            {recipe.price}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                ))
            )}
        </main>
    )
}