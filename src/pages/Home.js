import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "..";
export const Home = () => {
  const { dispatch } = useContext(ProductContext);
  return (
    <>
      <img
        src="https://i.etsystatic.com/30919998/r/il/64a2d7/3630372855/il_fullxfull.3630372855_kcxg.jpg"
        alt="shop"
        height="700px"
        width="70%"
      />
      <NavLink to="/productListing">
        <h2
          style={{
            position: "absolute",
            top: "60%",
            left: "45%",
            color: "white",
            border: "2px solid white",
            borderBlockStyle: "dashed",
            padding: ".5rem",
            backgroundColor: "black"
          }}
          onClick={() => dispatch({ type: "all" })}
        >
          <i> Shop Now</i>
        </h2>
      </NavLink>

      <h4 style={{ position: "absolute", top: "15%", left: "40%" }}>
        <p>
          Our best products, <i> hand-picked for you</i>
        </p>
      </h4>
      <NavLink to="/productListing">
        <button
          style={{
            position: "absolute",
            bottom: "10%",
            left: "24%",
            color: "white",
            backgroundColor: "black",
            padding: ".5rem"
          }}
          onClick={() => dispatch({ type: "categorize", value: "Electronics" })}
        >
          Electronics
        </button>
      </NavLink>
      <NavLink to="/productListing">
        <button
          style={{
            position: "absolute",
            bottom: "10%",
            left: "46%",
            color: "white",
            backgroundColor: "black",
            padding: ".5rem"
          }}
          onClick={() =>
            dispatch({ type: "categorize", value: "Home & Kitchen" })
          }
        >
          Home & Kitchen
        </button>
      </NavLink>
      <NavLink to="/productListing">
        <button
          style={{
            position: "absolute",
            bottom: "10%",
            left: "73%",
            color: "white",
            backgroundColor: "black",
            padding: ".5rem"
          }}
          onClick={() => dispatch({ type: "categorize", value: "Fashion" })}
        >
          Fashion
        </button>
      </NavLink>
    </>
  );
};
