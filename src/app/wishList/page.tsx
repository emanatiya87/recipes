"use client";
import "../globals.css";
import CardComponent from "@/components/card";
import UseRecipeStore from "@/store/recipesStore";
export default function WishListComponent() {
  const { wishListArray } = UseRecipeStore();
  return (
    <section className="container">
      <div className="row " style={{ minHeight: "90vh" }}>
        {wishListArray.length > 0 ? (
          wishListArray.map((r) => <CardComponent key={r.id} recipe={r} />)
        ) : (
          <p className="text-center fw-bold my-4">
            There is no items in the Wishlist !!
          </p>
        )}
      </div>
    </section>
  );
}
