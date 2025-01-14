import { useRecipes } from "@/src/hooks/useRecipes";
import Image from "next/image";

type SortOrder = 'asc' | 'desc';

interface SortButtonProps {
    sortOrder: SortOrder;
    onChange: (newOrder: SortOrder) => void;
}

export default function SortButton ({ sortOrder, onChange }: SortButtonProps) {
    const { recipes } = useRecipes();

    const handleClick = () => {
        const newOrder: SortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        onChange(newOrder);
    };

    return (
        <button
            onClick={handleClick}
            className="flex flex-row gap-2 px-4 py-2 mb-5 bg-[#F2E7C4] hover:bg-[#ecdca8] text-[#853605] border-[#853605] dark:bg-[#853605] dark:hover:bg-[#4b2e1c] dark:text-[#F2E7C4] dark:border-[#F2E7C4] border-[2px] rounded-md transition-colors"
        >
            <Image
                alt="Food icon"
                src={`${sortOrder === 'asc' ? recipes.length > 0 ? recipes[0].image : '/assets/icons/Strawberry.png' : recipes.length > 0 ? recipes[80].image : '/assets/icons/Strawberry.png'}`}
                height={20}
                width={20}
            />
            <p className="font-pixelify font-semibold">{sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</p>
        </button>
    )
}