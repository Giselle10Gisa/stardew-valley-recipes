import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import 'primeicons/primeicons.css';
import { useState } from "react";

export default function Navbar () {
    const [darkMode, setDarkMode] = useState(false);
    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        setDarkMode(!darkMode);

        if (darkMode === false) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div className="bg-wood border-[#853605] border-[5px] h-14 flex items-center justify-between px-4">
            <Link href="/">
                <Image
                    alt="Strawberry icon from stardew valley"
                    src= "/assets/icons/Strawberry.png"
                    height={35}
                    width={35}
                    className="hover:animate-pendulum"
                />
            </Link>
            <div onClick={() => handleClick()} className={`w-16 h-8 rounded-full border-[#853605] border-[3px] bg-[#FFF3CC] flex items-center px-1 cursor-pointer shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition duration-150 ${theme === 'dark' ? 'justify-end' : 'justify-start'}`}>
                <div className="w-5 h-5 rounded-full bg-[#853605] flex justify-center items-center">
                    <i className={`pi ${theme === 'dark' ? 'pi-moon' : 'pi-sun'}`} style={{ color: '#FFF3CC' }}></i>
                </div>
            </div>
        </div>
    )
}