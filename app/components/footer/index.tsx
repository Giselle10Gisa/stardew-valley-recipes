import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer () {
    const [pagesOptions, setPagesOptions] = useState(false);

    const handleClick = () => {
        setPagesOptions(!pagesOptions);
    };

    return (
        <div className="bg-wood-footer bg-contain h-44 border-[#853605] border-[10px] flex justify-between px-4 items-center">
            <Link href="https://www.stardewvalley.net/" target="_blank">
                <Image
                    alt="Stardew Valley Logo"
                    src="/assets/images/main_logo.png"
                    height={200}
                    width={200}
                />
            </Link>
            <div data-testid="pages-options" className={`${pagesOptions === false ? 'hidden' : 'flex'} flex-row gap-10 bg-[#FFF3CC] px-2 border-[#853605] border-[5px] rounded-md`}>
                <Link href="/pages/about" className="text-[#853605] font-pixelify hover:text-[#DC7B05]">About this page</Link>
                <Link href="/pages/dashboard" className="text-[#853605] font-pixelify hover:text-[#DC7B05]">Dashboard</Link>
                <Link href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank" className="text-[#853605] font-pixelify hover:text-[#DC7B05]">Game</Link>
                <Link href="https://stardewvalleywiki.com/Stardew_Valley_Wiki" target="_blank" className="text-[#853605] font-pixelify hover:text-[#DC7B05]">Wiki</Link>
                <Link href="https://www.stardewvalley.net/" target="_blank" className="text-[#853605] font-pixelify hover:text-[#DC7B05]">Official website</Link>
            </div>
            <div data-testid="pages-button" onClick={() => handleClick()} className="bg-[#FFF3CC] px-2 border-[#853605] border-[5px] rounded-md flex flex-row items-center gap-1 text-[#853605] font-pixelify shadow-xl cursor-pointer transition-transform duration-300 hover:border-[#FFF3CC] hover:bg-[#853605] hover:text-[#FFF3CC]">
                <i className={`pi ${pagesOptions === false ? 'pi-angle-double-left': 'pi-angle-double-right'}`}></i>
                <p>Pages</p>
            </div>
        </div>
    )
}