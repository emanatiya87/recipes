"use client";

import { useEffect } from "react";
import CardComponent from "@/components/card";
import UseRecipeStore from "@/store/recipesStore";
import Loading from "../loading";
export default function Page() {
  const { fetchRecipes, recipes } = UseRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  if (!recipes.length) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <section className="container">
      <div className="row">
        {recipes.map((r) => (
          <CardComponent key={r.id} recipe={r} />
        ))}
      </div>
    </section>
  );
}
