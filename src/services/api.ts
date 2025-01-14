import { Recipe } from "../types/types";

const API_BASE_URL = 'http://localhost:5000';

export const recipeApi = {
    getAllRecipes: async (): Promise<Recipe[]> => {
        try{
            const response = await fetch(`${API_BASE_URL}/recipes`);
            const data = await response.json();
            return data;
        } catch (e) {
            console.error("Error fetching recipes:", e);
            throw e;
        }
    }
}