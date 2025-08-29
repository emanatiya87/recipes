// store/recipeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Define the shape of a Recipe
export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  caloriesPerServing: number;
  cookTimeMinutes: number;
  mealType: string[];
  instructions: string[];
  prepTimeMinutes: number;
}
interface wishlist {
  id: string;
}
// 2. Define the shape of the Store
interface RecipeStore {
  wishListArray: Recipe[];
  toggleWishListArray: (recipe: Recipe) => void;
  WishList: wishlist[];
  recipes: Recipe[];

  fetchRecipes: () => Promise<void>;

  searchedArray: Recipe[];
  setSearchedArray: (arr: Recipe[]) => void;

  fetchRecipeById: (id: number) => Promise<Recipe | null>;
}

// 3. Create the store with persist
const UseRecipeStore = create<RecipeStore>()(
  persist(
    (set) => ({
      wishListArray: [],

      toggleWishListArray: (recipe) =>
        set((state) => {
          const exists = state.wishListArray.some((w) => w.id === recipe.id);
          if (exists) {
            // remove it
            return {
              wishListArray: state.wishListArray.filter(
                (w) => w.id !== recipe.id
              ),
              WishList: state.WishList.filter((l) => l.id != recipe.id),
            };
          } else {
            // add it
            return {
              wishListArray: [...state.wishListArray, recipe],
              WishList: [...state.WishList, { id: recipe.id }],
            };
          }
        }),

      WishList: [],

      recipes: [],
      fetchRecipes: async () => {
        const response = await fetch(`https://dummyjson.com/recipes`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        set({ recipes: data.recipes });
      },
      searchedArray: [],
      setSearchedArray: (arr) => set({ searchedArray: arr }),

      fetchRecipeById: async (id: number) => {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!res.ok) return null;
        const recipe: Recipe = await res.json();
        return recipe;
      },
    }),

    {
      name: "recipes-wishList-storage",
      partialize: (state) => ({
        wishListArray: state.wishListArray,
        WishList: state.WishList,
      }),
    }
  )
);

export default UseRecipeStore;
