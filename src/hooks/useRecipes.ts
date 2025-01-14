import { useEffect, useMemo, useState } from "react"
import { Recipe } from "../types/types"
import { recipeApi } from "../services/api";

type SortOrder = 'asc' | 'desc';

export const useRecipes = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            setLoading(true);
            const data = await recipeApi.getAllRecipes();
            setRecipes(data);
            setError(null);
        } catch (e) {
            setError('Failed to fetch recipes');
        } finally {
            setLoading(false);
        }
    };

    const filteredRecipes = useMemo(() => {
        let result = recipes;

        if (searchTerm) {
            result = result.filter(recipe => 
                recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        result = [...result].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        return result;
    }, [recipes, searchTerm, sortOrder]);

    return {
        recipes: filteredRecipes,
        searchTerm,
        setSearchTerm,
        sortOrder, 
        setSortOrder,
        loading,
        error,
        refetch: fetchRecipes
    };
}