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
    },

    getRecipeById: async (id: string): Promise<Recipe> => {
        try {
            const response = await fetch(`${API_BASE_URL}/recipes/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Fetched recipe:', data);
            return data;
        } catch (error) {
            console.error(`Error fetching recipe with id ${id}:`, error);
            throw error;
        }
    }
}