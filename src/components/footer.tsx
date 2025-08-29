import "../app/globals.css";
import SocialIcone from "./socialIcone";

export function FooterComponent() {
  return (
    <>
      <footer
        className="text-center text-dark"
        style={{ backgroundColor: "#ccc" }}
      >
        <div className="container">
          <section className="mb-1">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Discover delicious and easy-to-make recipes from around the
                  world. Whether you’re a beginner or a pro, find inspiration
                  for your next meal here!
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-3">
            <ul className="social">
              <SocialIcone />
            </ul>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; 2025:
          <a className="text-dark text-decoration-none">by:Eman</a>
        </div>
      </footer>
    </>
  );
}
