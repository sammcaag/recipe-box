import { RecipeBox } from "~/welcome/recipe-box";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipe Box" },
    { name: "description", content: "Welcome to Recipe Box!" },
  ];
}

export default function Home() {
  return <RecipeBox />;
}
