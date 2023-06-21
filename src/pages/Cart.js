import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { OrderSummary } from "./OrderSummary";
import { ProductContext } from "..";

export const Cart = () => {
  const { dispatch, state } = useContext(ProductContext);
  // console.log(cart);
  return (
    <>
      <h1>MyCart</h1>
      <OrderSummary />
      {state.cart?.length === 0 ? (
        <>
          <p>Cart is Empty!</p>
          <NavLink to="/productListing">
            <p onClick={() => dispatch({ type: "all" })}>
              Let's add something to cart.
            </p>
          </NavLink>
        </>
      ) : (
        <button
          onClick={() => dispatch({ type: "emptyCart" })}
          style={{ margin: "1rem" }}
        >
          Empty Cart
        </button>
      )}
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {state.cart?.map((item) => (
          <div style={{ padding: "3% " }}>
            <li
              key={item.id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "4 4 4 4rem",
                maxWidth: "100%",
                padding: "0 0 1rem",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"
              }}
            >
              <img
                src={item.image_url}
                alt={item.name}
                style={{
                  alignSelf: "center",
                  height: "300px",
                  width: "250px"
                }}
              />
              <h3>{`Product Name : ${item.name}`}</h3>
              <p>{`Price : $ ${item.price}`}</p>
              <p>{`Description : ${item.description}`}</p>
              <button
                style={{
                  width: "40%",
                  alignSelf: "center",
                  padding: " 0.2rem",
                  margin: "0.5rem"
                }}
                onClick={() => dispatch({ type: "updateCart", value: item })}
              >
                Remove from Cart
              </button>
              <hr />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
