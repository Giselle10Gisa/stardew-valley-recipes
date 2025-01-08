"use client"

import Footer from "@/app/components/footer"
import Navbar from "@/app/components/navbar"

export default function Dashboard() {
    return (
        <main>
            <Navbar/>
            <div className="h-screen bg-day dark:bg-night bg-cover bg-no-repeat">
            </div>
            <Footer/>
        </main>
    )
}