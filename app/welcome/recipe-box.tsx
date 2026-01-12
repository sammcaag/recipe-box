import { Utensils } from "lucide-react";
import { useState } from "react";
import FavoritesSection from "~/components/favorites-section";
import RecipeDisplay from "~/components/recipe-display";
import SearchBar from "~/components/search-bar";

export function RecipeBox() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="flex flex-col pt-16 pb-4 gap-12 max-w-5xl mx-auto">
      <div className="flex items-center mx-auto gap-4">
        <div className="p-3 rounded-full bg-primary">
          <Utensils className="text-background " />
        </div>
        <h1 className="text-center font-bold text-4xl">Recipe Box</h1>
      </div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RecipeDisplay searchQuery={searchQuery} />
      <FavoritesSection />

      {/* 5.
      State Management ○ Implement React hooks (minimum requirement: useState) ○
      Properly manage component state across the application */}
    </main>
  );
}
