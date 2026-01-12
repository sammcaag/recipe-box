import React, { useState, type Dispatch } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import type { Recipe } from "~/type";
import { DialogDescription } from "@radix-ui/react-dialog";
import { Circle } from "lucide-react";
import { Button } from "./ui/button";

export default function RecipeDetailsDialog({
  children,
  recipe,
  isSelected,
  setIsSelected,
}: {
  children: React.ReactNode;
  recipe: Recipe;
  isSelected: number;
  setIsSelected: Dispatch<React.SetStateAction<number>>;
}) {
  const [open, setOpen] = useState(Boolean);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        if (isSelected > 0) {
          setIsSelected(0);
        }
        setOpen(!open);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle>Dish Details</DialogTitle>
          <DialogDescription>Dish extra details</DialogDescription>
        </DialogHeader>
        <div className="">
          <h4 className="font-semibold">Ingredients</h4>
          <div className="flex flex-col gap-2">
            {recipe.ingredients &&
              recipe.ingredients.length > 0 &&
              recipe.ingredients.map((ing) => (
                <span className="flex items-center gap-2 pl-4">
                  <Circle className="size-2 fill-black" /> {ing}
                </span>
              ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Instructions</h4>
          <div className="flex flex-col gap-2">
            {recipe.instructions &&
              recipe.instructions.length > 0 &&
              recipe.instructions.map((ins, index) => (
                <span className="pl-4">
                  {index + 1}. {ins}
                </span>
              ))}
          </div>
        </div>

        {recipe.servings && (
          <div className="flex justify-between items-center border border-primary bg-muted/50 p-2 rounded-md">
            <h4 className=" text-base text-muted-foreground">Good For:</h4>
            <span className="underline text-xl">
              {" "}
              {recipe.servings} Servings
            </span>
          </div>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline"> Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
