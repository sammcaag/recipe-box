import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Recipe Box" },
    { name: "description", content: "Welcome to Recipe Box!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
