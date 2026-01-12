import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

/* 4. Recipe Management ○ Users can add their
      own custom recipes (title, ingredients, instructions, image URL) ○ Users
      can delete recipes (only custom-added ones, not from the initial data)  */

export default function RecipeManagement() {
  return (
    <div>
      <Button>
        <Plus /> Add New Dish
      </Button>
      
    </div>
  );
}
