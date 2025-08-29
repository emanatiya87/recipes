import "../../globals.css";
import { GiMeal } from "react-icons/gi";
import { FaClock } from "react-icons/fa";
import { LuCookingPot } from "react-icons/lu";
import { Recipe } from "@/store/recipesStore";
export default async function page({
  params,
}: {
  params: { productId: string };
}) {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${params.productId}`
    );
    if (!response.ok) throw new Error("Failed to fetch");
    const data: Recipe = await response.json();

    return (
      <>
        <section className="container mt-5">
          <div className="row">
            <div className="card shadow mb-3 bg-light pe-md-0">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body d-flex flex-column justify-content-between h-100">
                    <div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5
                          className="card-title "
                          style={{ color: "#C64F56" }}
                        >
                          {data.name}
                        </h5>
                        <div className="d-flex align-items-center">
                          <p className="shadow p-2 rounded-4 text-secondary ms-2">
                            <FaClock /> {data.prepTimeMinutes} min
                          </p>
                          <p className="shadow p-2 rounded-4 text-secondary ms-2">
                            <LuCookingPot /> {data.cookTimeMinutes} min
                          </p>
                        </div>
                      </div>
                      <p
                        className="line "
                        style={{ backgroundColor: "#C64F56" }}
                      ></p>
                      <h4>Instructions:</h4>
                      <ul>
                        {data.instructions.map((i, index) => {
                          return (
                            <li className="text-dark" key={index}>
                              {i}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="d-flex gap-2">
                      {data.mealType.map((t, index) => {
                        return (
                          <p
                            className="bg-secondary-subtle p-2 rounded-3 smallBoxs ms-2"
                            key={index}
                          >
                            <GiMeal />
                            {t}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-md-4" style={{ minHeight: "370px" }}>
                  <div className="croped-start-image h-100 w-100">
                    <img
                      src={data.image}
                      className="h-100 w-100 rounded-start croped-start"
                      alt={data.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ////////////////// */}
        <section className="container my-3">
          <div className="row">
            <div className="col">
              <h5 className="card-title py-2" style={{ color: "#C64F56" }}>
                Ingredients
              </h5>
              <p className="line " style={{ backgroundColor: "#C64F56" }}></p>
            </div>
            <div className="row">
              <div className="col">
                <ul className="list-group list-group-flush ">
                  {data.ingredients.map((i, index: number) => (
                    <li className="list-group-item" key={index}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } catch (error) {
    return <div>Failed to load recipes</div>;
  }
}
