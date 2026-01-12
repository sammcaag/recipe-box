import React, { useState, type Dispatch, type SetStateAction } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import type { Recipe } from "~/type";
import { Label } from "./ui/label";
import { Plus } from "lucide-react";

export default function AddNewRecipeDialog({
  children,
  newRecipeCount,
  setNewRecipe,
}: {
  children: React.ReactNode;
  newRecipeCount: number;
  setNewRecipe: Dispatch<
    SetStateAction<
      Pick<Recipe, "id" | "title" | "image" | "ingredients" | "instructions">[]
    >
  >;
}) {
  const [recipe, setRecipe] = useState({
    title: "",
    imageUrl: "",
    instructions: [] as string[],
    ingredients: [] as string[],
  });
  const [ingredientInput, setIngredientInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");

  const [open, setOpen] = useState(false);
  const onSubmit = () => {
    setNewRecipe((prev) => [
      ...prev,
      {
        title: recipe.title,
        image: recipe.imageUrl,
        id: newRecipeCount + 1,
        instructions: recipe.instructions,
        ingredients: recipe.ingredients,
      },
    ]);
    setOpen(false);
  };

  const addIngredients = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ingredientInput],
    }));
    setIngredientInput("");
  };

  const addInstructions = () => {
    setRecipe((prev) => ({
      ...prev,
      instructions: [...prev.instructions, instructionsInput],
    }));
    setInstructionsInput("");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add A New Recipe</DialogTitle>
          <DialogDescription>
            Add a new recipe to your liking.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div>
            <Label>Title</Label>
            <div>
              <Input
                placeholder="Input recipe title here"
                value={recipe.title}
                onChange={(e) =>
                  setRecipe((prev) => ({ ...prev, title: e.target.value }))
                }
              />
            </div>
          </div>
        </div>
        <div>
          <Label>Ingredients</Label>
          <div className="flex">
            <Input
              placeholder="Ingredients"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
            />
            <Button size="icon" variant="outline" onClick={addIngredients}>
              <Plus />
            </Button>
          </div>
        </div>
        <div>
          <Label>Instructions</Label>
          <div className="flex">
            <Input
              placeholder="Instructions"
              value={instructionsInput}
              onChange={(e) => setInstructionsInput(e.target.value)}
            />
            <Button size="icon" variant="outline" onClick={addInstructions}>
              <Plus />
            </Button>
          </div>
        </div>
        <div>
          <Label>Image Url</Label>
          <div>
            <Input
              placeholder="Image URL"
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, imageUrl: e.target.value }))
              }
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button onClick={onSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
