"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import UseRecipeStore from "@/store/recipesStore";
import { Recipe } from "@/store/recipesStore";
type Inputs = {
  type: string;
  searchValue: string;
};
export default function FormSearch() {
  const { fetchRecipes, recipes } = UseRecipeStore();

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  useEffect(() => {
    setSearchedArray(recipes);
  }, [recipes]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const value = data.searchValue.toLowerCase().trim();
    const filtered = recipes.filter((r) =>
      r.ingredients.some((i) => i.toLowerCase().includes(value))
    );
    setSearchedArray(filtered);
  };

  const { setSearchedArray } = UseRecipeStore();

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row ">
          <div className="input-group mb-3 col-6">
            <label className="input-group-text">Search By:</label>
            <select
              className="form-select "
              {...register("type", {
                required: "Choose type of search is required",
              })}
            >
              {/* <option selected hidden value="">
                  Choose...
                </option> */}
              <option value="ingredients">ingredients</option>
              {/* <option value="difficulty">difficulty</option> */}
            </select>
          </div>
          <div className="input-group mb-3 col-6">
            <input
              type="text"
              className="form-control "
              aria-label="Text input with dropdown button"
              {...register("searchValue")}
            />
            <input type="submit" className="btn btn-outline-secondary " />
          </div>
        </div>
      </form>
      <div className="row ">
        {errors.type && (
          <p role="alert" className="text-danger text-center">
            {errors.type.message}
          </p>
        )}
      </div>
    </>
  );
}
