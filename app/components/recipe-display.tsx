import { useState, type Dispatch, type SetStateAction } from "react";
import recipeData from "Recipes (1).json";
import DishCard from "./dish-card";
import type { Recipe } from "~/type";

/* 1. Recipe Display 
      ○ Display a list/grid of recipes with basic information
      (title, image, cooking time) 
      ○ Show recipe details when a recipe is
      selected (ingredients, instructions, servings)  */

/* 3. Save Favorites ○ Users can mark recipes as
      favorites ○ Display saved favorites in a separate section/tab 
      ○ Users can remove recipes from favorites  */

export default function RecipeDisplay({
  searchQuery,
  newRecipes,
  setNewRecipes,
}: {
  searchQuery: string;
  newRecipes: Pick<
    Recipe,
    "id" | "title" | "image" | "ingredients" | "instructions"
  >[];
  setNewRecipes: Dispatch<
    SetStateAction<
      Pick<Recipe, "id" | "title" | "image" | "ingredients" | "instructions">[]
    >
  >;
}) {
  const { recipes } = recipeData;
  const [isSelected, setIsSelected] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const searchQueryInLower = searchQuery.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLocaleLowerCase().includes(searchQueryInLower);
  });
  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );
  return (
    <div className="flex-1 flex flex-col gap-12 items-stretch">
      <div className="flex-1 ">
        <h3 className="font-bold text-2xl">User-Defined Dishes</h3>
        <div className="grid grid-cols-3 gap-8">
          {newRecipes.map((recipe) => (
            <DishCard
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              recipe={recipe}
              setFavorites={setFavorites}
              setRecipes={setNewRecipes}
              isUserDefined
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold text-2xl">Default Dishes</h3>
        <div className="grid grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <DishCard
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              recipe={recipe}
              setFavorites={setFavorites}
              setRecipes={setNewRecipes}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-2xl">Favorites</h3>
        <div className="grid grid-cols-3 gap-8">
          {favoriteRecipes.map((recipe) => (
            <DishCard
              isSelected={isSelected}
              setIsSelected={setIsSelected}
              recipe={recipe}
              isFavorite
              setRecipes={setNewRecipes}
              setFavorites={setFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
