import { useMemo, useState } from "react"
import { useRecipesAll } from "../services/api";

type SortOrder = 'asc' | 'desc';

export const useRecipes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    const { data: recipes = [], isLoading: loading, error, refetch } = useRecipesAll();

    const filteredRecipes = useMemo(() => {
        let result = recipes;

        if (searchTerm) {
            result = result.filter((recipe) => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
        error: error ? (error as Error).message : null,
        refetch
    };
}