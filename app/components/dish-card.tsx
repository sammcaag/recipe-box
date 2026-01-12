import React, { type Dispatch, type SetStateAction } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "~/lib/utils";
import type { Recipe } from "~/type";
import RecipeDetailsDialog from "./recipe-details-dialog";
import { Eye, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function DishCard({
  isSelected,
  setIsSelected,
  recipe,
  setFavorites,
  setRecipes,
  isFavorite,
  isUserDefined,
}: {
  isSelected: number;
  setIsSelected: Dispatch<SetStateAction<number>>;
  recipe: Recipe;
  setFavorites: Dispatch<SetStateAction<number[]>>;
  setRecipes: Dispatch<
    SetStateAction<
      Pick<Recipe, "id" | "title" | "image" | "ingredients" | "instructions">[]
    >
  >;
  isFavorite?: boolean;
  isUserDefined?: boolean;
}) {
  return (
    <Card
      className={cn(
        "pt-0 overflow-hidden",
        isSelected === recipe.id && "border border-primary"
      )}
    >
      <figure className="h-64 aspect-square">
        <img src={recipe.image} alt="" className="object-cover h-full w-full" />
      </figure>
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>

      <CardFooter className="flex-col items-stretch gap-2">
        <RecipeDetailsDialog
          recipe={recipe}
          key={recipe.id}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        >
          <Button
            className="flex-1"
            variant="outline"
            onClick={() => setIsSelected(recipe.id)}
          >
            <Eye />
            View Details
          </Button>
        </RecipeDetailsDialog>
        {isFavorite && (
          <Button
            className="flex-1"
            variant="outline"
            onClick={() =>
              setFavorites((prev) => prev.filter((item) => item !== recipe.id))
            }
          >
            <Heart />
            Remove from Favorites
          </Button>
        )}
        {!isFavorite && (
          <Button
            className="flex-1"
            variant="outline"
            onClick={() => setFavorites((prev) => [...prev, recipe.id])}
          >
            <Heart />
            Save to Favorites
          </Button>
        )}
        {isUserDefined && (
          <Button
            className="flex-1"
            variant="outline"
            onClick={() =>
              setRecipes((prev) => prev.filter((item) => item.id !== recipe.id))
            }
          >
            <Heart />
            Delete Dish
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
