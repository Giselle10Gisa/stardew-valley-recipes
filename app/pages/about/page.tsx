'use client';

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Link from "next/link";

export default function About () {
    return (
        <main>
            <Navbar/>
            <div className="h-screen bg-farm dark:bg-night-farm">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="bg-board h-full w-[80%] bg-no-repeat bg-contain flex justify-center items-center">
                        <p className="text-[#853605] font-pixelify text-justify w-[500px]">This page was created with the purpose of practicing the development of web pages using the Next.js framework, and as a big fan of Stardew Valley, I decided to practice and create something related to the game. Here you will be able to see the food recipes of the game and also how to recreate them on the real life, the resource to check on each recipe was the Stardew Valley wiki page. If you have interest on knowing more about the game, the links to the wiki, official page and also download will be here too. Thanks for checking on the page and hope you appreciate the work!</p>
                        <Link href="https://stardewvalleywiki.com/Pierre%27s_General_Store" target="_blank" className="bg-transparent absolute right-[200px] bottom-[-5px] w-[130px] h-[180px]"></Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}