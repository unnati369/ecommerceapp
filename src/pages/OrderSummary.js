import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ProductContext } from "..";

export const OrderSummary = () => {
  const { cartPrice, dispatch, state, loader } = useContext(ProductContext);

  return (
    state.cart?.length > 0 && (
      <div
        style={{
          border: "1px solid black",
          textAlign: "center",
          marginLeft: "20%",
          marginRight: "20%",
          padding: "1 5 1 5rem",
          backgroundColor: "lightgray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <h2>Order Summary</h2>
        {/* <p>
          <span>Item name</span> <span>Qty</span>
        </p> */}
        <p>
          {state.cart?.map((item) => (
            <ul>
              <li>{`Product Name :- ${item.name}`}</li>
              <p>{`Quantity :- ${item.quantity}`}</p>
            </ul>
          ))}
        </p>
        <p style={{ textDecoration: state?.isDiscount ? "line-through" : "" }}>
          <b>Total Cart Price : </b>${cartPrice}
        </p>
        {state?.isDiscount && (
          <p>
            <b>{`Discounted Price : $ ${cartPrice - 20}`}</b>
          </p>
        )}
        <button id="myBtn" onClick={() => dispatch({ type: "discount" })}>
          Apply Coupon
        </button>
        <NavLink to="/address">
          <button
            style={{ backgroundColor: "lightblue", margin: "1rem" }}
            onClick={() => loader()}
          >
            Checkout
          </button>
        </NavLink>
      </div>
    )
  );
};
