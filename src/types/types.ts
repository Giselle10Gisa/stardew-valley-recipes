export interface Recipe {
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