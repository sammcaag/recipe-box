import { useState } from "react";
import RecipeDisplay from "~/components/recipe-display";
import SearchBar from "~/components/search-bar";

export function Welcome() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4 gap-12">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecipeDisplay searchQuery={searchQuery} />

      {/* 5.
      State Management ○ Implement React hooks (minimum requirement: useState) ○
      Properly manage component state across the application */}
    </main>
  );
}
