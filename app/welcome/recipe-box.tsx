import { useState } from "react";
import FavoritesSection from "~/components/favorites-section";
import RecipeDisplay from "~/components/recipe-display";
import RecipeManagement from "~/components/recipe-management";
import SearchBar from "~/components/search-bar";

export function RecipeBox() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="flex flex-col pt-16 pb-4 gap-12 max-w-5xl mx-auto">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecipeManagement />
      <RecipeDisplay searchQuery={searchQuery} />
      <FavoritesSection />

      {/* 5.
      State Management ○ Implement React hooks (minimum requirement: useState) ○
      Properly manage component state across the application */}
    </main>
  );
}
