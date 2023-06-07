import { useContext } from "react";
import { ProductContext } from "..";
import { products } from "../components/context/ProductContext";
// import ReactSlider from "react-slider";

export const Filters = () => {
  const { dispatch } = useContext(ProductContext);
  return (
    <>
      <fieldset>
        <legend>Sort By price :</legend>
        <label>
          <input
            type="radio"
            id="htl"
            onClick={() => dispatch({ type: "sortPrice", value: "htl" })}
          />
          High to low
        </label>
        <label>
          <input
            type="radio"
            id="lth"
            onClick={() => dispatch({ type: "sortPrice", value: "lth" })}
          />
          Low to High
        </label>
      </fieldset>
      <fieldset>
        <legend>Filter Category : </legend>
        <label>
          <input
            id="Electronics"
            type="checkbox"
            onClick={() =>
              dispatch({ type: "categorizze", value: "Electronics" })
            }
          />
          Electronics
        </label>
        <label>
          <input
            id="Home & Kitchen"
            type="checkbox"
            onClick={(e) => {
              e.target.checked = true;
              dispatch({ type: "categorizze", value: "Home & Kitchen" });
            }}
          />
          Home & Kitchen
        </label>
        <label>
          <input
            id="Fashion"
            type="checkbox"
            onClick={() => dispatch({ type: "categorizze", value: "Fashion" })}
          />
          Fashion
        </label>
      </fieldset>
      <label>
        {" "}
        Rating :{" "}
        <input
          type="range"
          min="2"
          max="5"
          step="1"
          onChange={(e) =>
            dispatch({ type: "slidesort", value: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Reset
        <input type="radio" onChange={() => dispatch({ type: "all" })} />
      </label>
    </>
  );
};
