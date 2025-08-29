"use client";

import Loading from "./loading";
import UseRecipeStore from "@/store/recipesStore";
import InfoCard from "@/components/infoCard";
import FormSearch from "@/components/FormSearch";
export default function Home() {
  const { recipes, searchedArray } = UseRecipeStore();

  return (
    <>
      <section className="container">
        <div className="row my-3">
          <h4>What is in your kitchen?</h4>
        </div>
        <FormSearch />
      </section>
      <section className="container my-4">
        <div className="row">
          {!recipes.length ? (
            <Loading />
          ) : searchedArray.length ? (
            searchedArray.map((r) => <InfoCard key={r.id} recipe={r} />)
          ) : (
            <p className="text-center fw-bold ">
              There is no matching ingredients in our recipes!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
