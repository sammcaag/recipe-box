import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

/* 2. Search Functionality ○
      Users can search for recipes by name or ingredient ○ Implement a search
      bar with real-time filtering  */

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <h4 className="min-w-fit font-semibold text-base">Search for Recipes</h4>
      <div>
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button>
          <Plus /> Add New Dish
        </Button>
      </div>
    </div>
  );
}
