import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ProductContext } from "..";

export const OrderSummary = () => {
  const { cartPrice, dispatch, state, cart } = useContext(ProductContext);

  return (
    cart.length > 0 && (
      <div
        style={{
          border: "1px solid black",
          textAlign: "center",
          marginLeft: "40%",
          marginRight: "40%",
          padding: "1 5 1 5rem",
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <h2>Order Summary</h2>
        <button id="myBtn" onClick={() => dispatch({ type: "discount" })}>
          Apply Coupon
        </button>
        <p style={{ textDecoration: state?.isDiscount ? "line-through" : "" }}>
          <b>Total Cart Price : </b>${cartPrice}
        </p>
        {state?.isDiscount && (
          <p>
            <b>{`Discounted Price : $ ${cartPrice - 20}`}</b>
          </p>
        )}
        <NavLink to="/address">
          <button style={{ backgroundColor: "lightblue", margin: "1rem" }}>
            Checkout
          </button>
        </NavLink>
      </div>
    )
  );
};
