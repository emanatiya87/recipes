"use client";
import { FaRegHeart } from "react-icons/fa";
import { redirect } from "next/navigation";
import UseRecipeStore from "@/store/recipesStore";
import { Recipe } from "@/store/recipesStore";
interface CardProps {
  recipe: Recipe;
}
export default function CardComponent({ recipe }: CardProps) {
  const { toggleWishListArray, WishList } = UseRecipeStore();
  const wishListStatue = WishList.some((l) => l.id == recipe.id);
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3 my-2 ">
        <div
          style={{
            background: `url(${recipe.image}) `,
            backgroundSize: "cover ",
            height: "250px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            borderRadius: "15px",
          }}
          onClick={() => {
            redirect(`/recipy/${recipe.id}`);
          }}
        >
          <div
            className="absolute  px-2 fw-bold "
            style={{
              position: "absolute",
              top: "7px",
              right: "7px",
              padding: "5px",
              borderRadius: "10px",
              backgroundColor: wishListStatue ? "red" : "white",
              color: wishListStatue ? "white" : "gray",
              zIndex: "3",
            }}
            onClick={(e) => {
              e.stopPropagation();
              toggleWishListArray(recipe);
              console.log(recipe.id);
            }}
          >
            <FaRegHeart />
          </div>
          <div
            className=""
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
            }}
          ></div>
          <h5
            className="z-3 text-white bottom-0 "
            style={{
              position: "absolute",
              WebkitTextStroke: "1px black",
              left: "15px",
              fontWeight: "bold",
            }}
          >
            {recipe.name}
          </h5>
        </div>
      </div>
    </>
  );
}
