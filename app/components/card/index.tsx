import { useRecipes } from "@/src/hooks/useRecipes";
import { Recipe } from "@/src/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
    recipe: Recipe
}

export default function Card ({ recipe }: CardProps) {
    const { loading } = useRecipes();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/pages/recipe/${recipe.id}`);
    };

    if (loading) {
        return <div className="font-pixelify font-semibold text-[#853605] bg-[#F2E7C4] border-[#853605] border-[3px] px-2 rounded-lg">Loading...</div>;
    }

    return (
        <div onClick={handleClick} key={recipe.id} className="cursor-pointer bg-[#F2E7C4] dark:bg-[#853605] w-64 h-72 border-[#853605] dark:border-[#F2E7C4] border-8 flex flex-col justify-center items-center gap-4">
            <div className="bg-[#853605] dark:bg-[#F2E7C4] w-56 h-44 flex justify-center items-center">
                <Image
                    alt={recipe.name}
                    src={recipe.image}
                    height={60}
                    width={60}
                    className="w-[100px] h-[100px]"
                />
            </div>
            <div className="h-16 w-56 flex flex-col gap-5">
                <h2 className="font-pixelify text-[#853605] dark:text-[#F2E7C4] font-semibold">{recipe.name}</h2>
                <div className="flex w-56 justify-between">
                    <div className="flex">
                        <Image
                            alt="Health"
                            src="/assets/icons/health.png"
                            height={20}
                            width={20}
                            className="ml-[-3.5px]"
                        />
                        <p className="font-pixelify text-[#853605] dark:text-[#F2E7C4]">{recipe.health}</p>
                    </div>
                    <div className="flex">
                        <Image
                            alt="Energy"
                            src="/assets/icons/energy.png"
                            height={20}
                            width={20}
                        />
                        <p className="font-pixelify text-[#853605] dark:text-[#F2E7C4]">{recipe.energy}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}