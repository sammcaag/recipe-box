import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import AddNewRecipeDialog from "./add-new-recipe-dialog";
import type { Recipe } from "~/type";

/* 2. Search Functionality ○
      Users can search for recipes by name or ingredient ○ Implement a search
      bar with real-time filtering  */

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  setNewRecipe,
  newRecipeCount,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setNewRecipe: Dispatch<
    SetStateAction<
      Pick<Recipe, "id" | "title" | "image" | "ingredients" | "instructions">[]
    >
  >;
  newRecipeCount: number;
}) {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <h4 className="min-w-fit font-semibold text-base">Search for Recipes</h4>
      <div className="flex gap-4">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AddNewRecipeDialog
          setNewRecipe={setNewRecipe}
          newRecipeCount={newRecipeCount}
        >
          <Button>
            <Plus /> Add New Dish
          </Button>
        </AddNewRecipeDialog>
      </div>
    </div>
  );
}
