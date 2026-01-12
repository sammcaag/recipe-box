import React, { type Dispatch, type SetStateAction } from "react";
import { Input } from "./ui/input";

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
    <div className="flex items-center flex-1 gap-4">
      <h4 className="min-w-fit">Search for Recipes</h4>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
