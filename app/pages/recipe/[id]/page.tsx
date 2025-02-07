'use client';

import { useRecipeId } from "@/src/services/api";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Recipe {
    id: string;
    name: string;
    image: string;
    description: string;
    energy: number;
    health: number;
    price: number;
    ingredients: string[];
    realRecipeImage: string;
    realRecipeIngredients: string[];
    realRecipeLink: string;
}

export default function Recipe() {
    const params = useParams();
    const id = params.id;
    const { data: recipeWithId, isLoading, error} = useRecipeId(id as string);
    const [ realRecipe, setRealRecipe ] = useState(false);

    return (
        <main className="h-screen flex bg-picnic bg-cover bg-no-repeat">
            {error ? (
                <div className="flex w-full h-full justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-[40px] w-[600px] h-[400px] bg-[#F2E7C4] border-[10px] border-[#853605] rounded-lg">
                        <h1 className="text-red-600 font-pixelify text-2xl">Error loading recipe</h1>
                        <Link href="/pages/dashboard" className="text-[#853605] hover:underline">
                            Return to Dashboard
                        </Link>
                    </div>
                </div>
            ) : isLoading ? (
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
                (!recipeWithId ? (
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
                    <div key={recipeWithId.id} className="flex-grow grid grid-cols-2 px-64 relative bg-book bg-contain bg-center bg-no-repeat bg-fixed shadow-xl">
                        <>
                            <div onClick={() => setRealRecipe(!realRecipe)} className="absolute bg-amber-700 py-2 pl-3 pr-8 left-[690px] bottom-[100px] rounded-tl-lg rounded-bl-lg cursor-pointer">
                                <i className="pi pi-arrow-right-arrow-left text-black"></i>
                            </div>
                            <Link href={"/pages/dashboard"} className="absolute top-0">
                                <div className="w-10 h-10 p-4">
                                    <i className="pi pi-chevron-circle-left text-3xl text-[#F2E7C4] hover:text-[#2e1b0f]"></i>
                                </div>
                            </Link>
                            <div className="flex justify-center items-center">
                                <div className={`${realRecipe ? 'bg-blue-300 h-[280px] w-[350px] rounded-2xl' : 'bg-red-300 h-[400px] w-[250px] rounded-full'} flex justify-center items-center`}>
                                    <Image 
                                        src={realRecipe ? recipeWithId.realRecipeImage : recipeWithId.image} 
                                        alt={recipeWithId.name} 
                                        width={realRecipe ? 250 : 150} 
                                        height={realRecipe ? 250 : 150}
                                        className="rounded-2xl"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center mt-28 gap-8 font-pixelify text-[#853605]">
                                <p className="text-5xl w-[250px] text-center">{recipeWithId.name}</p>
                                <p className="w-[400px] text-center">{recipeWithId.description}</p>
                                {realRecipe ? ( 
                                    <div className="flex flex-col gap-1 w-80">
                                        {recipeWithId.realRecipeIngredients.map((ingredient, index) => (
                                            <ul className="list-disc" key={index}>
                                                <li>{ingredient}</li>
                                            </ul>
                                        ))}
                                        <Link href={recipeWithId.realRecipeLink} target="_blank" className="underline mt-4">Recipe Link</Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-40">
                                        <div className="gap-3 flex flex-col">
                                            <p className="underline">Ingredients:</p>
                                            {recipeWithId.ingredients.map((ingredient, index) => (
                                                <ul className="list-disc" key={index}>
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
                                                {recipeWithId.energy}
                                            </p>
                                            <p className="flex flex-row gap-1">
                                                <Image
                                                    alt="Health icon"
                                                    src="/assets/icons/health.png"
                                                    height={20}
                                                    width={20}
                                                />
                                                {recipeWithId.health}
                                            </p>
                                            <p className="flex flex-row gap-1">
                                                <Image
                                                    alt="Coin icon"
                                                    src="/assets/icons/gold.png"
                                                    height={20}
                                                    width={20}
                                                />
                                                {recipeWithId.price}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    </div>
                ))
            )}
        </main>
    )
}