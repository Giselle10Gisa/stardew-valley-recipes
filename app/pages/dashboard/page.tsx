"use client"

import Card from "@/app/components/card"
import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"
import { SearchBar } from "@/app/components/search"
import SortButton from "@/app/components/sortButton"
import { useRecipes } from "@/src/hooks/useRecipes"
import Image from "next/image"

export default function Dashboard() {
    const {
        recipes, 
        loading, 
        error, 
        searchTerm, 
        setSearchTerm,
        sortOrder,
        setSortOrder 
    } = useRecipes();
    return (
        <main className="h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow relative bg-day dark:bg-night bg-cover bg-no-repeat bg-fixed">
                <div className="absolute inset-0 overflow-x-hidden">
                    <div className="pl-20 py-8">
                        <SearchBar
                            value={searchTerm}
                            onChange={setSearchTerm}
                        />
                        {recipes.length > 0 ? (
                            <SortButton
                                sortOrder={sortOrder}
                                onChange={setSortOrder}
                            />
                        ) : <></>}
                        {loading ? (
                            <div className="flex flex-col items-center justify-center gap-5">
                                <p className="font-pixelify font-semibold text-[#853605] bg-[#F2E7C4] border-[#853605] border-[3px] px-2 rounded-lg">Loading...</p>
                                <Image
                                    src="/assets/images/Emote_Jar.gif"
                                    alt="Jar gif"
                                    height={100}
                                    width={100}
                                />
                            </div>
                        ) : error ? (
                            <div className="text-center text-red-500">{error}</div>
                        ) : (
                            <div className={`${recipes.length > 0 ? 'grid' : 'flex justify-center items-center'} grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                                {recipes.length > 0 ? (
                                    recipes.map((recipe) => (
                                        <Card key={recipe.id} recipe={recipe} />
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-5">
                                        <p className="font-pixelify font-semibold text-red-600 bg-[#F2E7C4] border-[#853605] border-[3px] px-2 rounded-lg">No recipes found!</p>
                                        <Image
                                            src="/assets/images/Emote_Surprised.gif"
                                            alt="Surprised gif"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}