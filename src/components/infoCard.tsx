"use client";
import { FaRegHeart, FaFire, FaClock } from "react-icons/fa";
import { redirect } from "next/navigation";
import UseRecipeStore from "@/store/recipesStore";
import { Recipe } from "@/store/recipesStore";
interface CardProps {
  recipe: Recipe;
}
export default function InfoCard({ recipe }: CardProps) {
  const { toggleWishListArray, WishList } = UseRecipeStore();
  const wishListStatue = WishList.some((l) => l.id == recipe.id);
  return (
    <>
      <div className="col-12 col-md-6 ">
        <div className=" p-2  rounded-4 my-2 recipe-card">
          <div className="row">
            <div className="col-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="img-fluid rounded-4"
                onClick={() => {
                  redirect(`/recipy/${recipe.id}`);
                }}
              />
            </div>
            <div className="col-8 d-flex flex-column justify-content-between">
              <div className="d-flex gap-2 align-items-start justify-content-between">
                <h5>{recipe.name}</h5>
                <div
                  className="px-2 fw-bold "
                  style={{
                    padding: "5px",
                    borderRadius: "10px",
                    backgroundColor: wishListStatue ? "red" : "white",
                    color: wishListStatue ? "white" : "gray",
                    zIndex: "3",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishListArray(recipe);
                  }}
                >
                  <FaRegHeart />
                </div>
              </div>
              <details>
                <summary>ingredients</summary>
                {recipe.ingredients.join("-")}
              </details>
              <p className="text-secondary">
                <FaFire /> {recipe.caloriesPerServing}Kcal . <FaClock />{" "}
                {recipe.cookTimeMinutes} min
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
