import React, { useState } from "react";
import recipeData from "Recipes (1).json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";

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
}: {
  searchQuery: string;
}) {
  const { recipes } = recipeData;
  const [isSelected, setIsSelected] = useState(0);

  const searchQueryInLower = searchQuery.toLowerCase();
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLocaleLowerCase().includes(searchQueryInLower);
  });
  return (
    <div className="grid grid-cols-3 gap-8">
      {filteredRecipes.map((recipe) => (
        <Card
          key={recipe.id}
          className="pt-0 overflow-hidden"
          onClick={() => setIsSelected(recipe.id)}
        >
          <figure className="h-64 aspect-square">
            <img
              src={recipe.image}
              alt=""
              className="object-cover h-full w-full"
            />
          </figure>
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          {isSelected === recipe.id && (
            <CardContent>
              <div className="flex flex-col gap-2">
                {recipe.ingredients.map((ing) => (
                  <span>{ing}</span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {recipe.instructions.map((ins) => (
                  <span>{ins}</span>
                ))}
              </div>
              <div>{recipe.servings} Servings</div>
            </CardContent>
          )}
          <CardFooter>
            <Button className="" variant="outline">
              <Heart />
              Save to Favorites
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
