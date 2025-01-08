import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <div className="bg-wood-footer bg-contain h-44 border-[#853605] border-[10px] flex justify-between px-4 items-center">
            <Image
                alt="Stardew Valley Logo"
                src="/assets/images/main_logo.png"
                height={200}
                width={200}
            />
            <div className="flex flex-col text-right bg-[#FFF3CC] p-2 border-[#853605] border-[5px] rounded-md">
                <Link href="" className="text-[#853605] font-mono hover:text-[#DC7B05]">About this page</Link>
                <Link href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank" className="text-[#853605] font-mono hover:text-[#DC7B05]">Game</Link>
                <Link href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank" className="text-[#853605] font-mono hover:text-[#DC7B05]">Wiki</Link>
                <Link href="https://www.stardewvalley.net/" target="_blank" className="text-[#853605] font-mono hover:text-[#DC7B05]">Official website</Link>
            </div>
        </div>
    )
}