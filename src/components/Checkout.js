import { addresses } from "./AddressData";
import { ProductContext } from "..";
import { useContext } from "react";
import { OrderSummary } from "../pages/OrderSummary";

export const Checkout = () => {
  const { cartPrice, state, loading } = useContext(ProductContext);
  console.log(state.address);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <i>
            {state.address.length !== 0 ? (
              <>
                <h1>
                  Order Shipped to : <p>{state.address.street}</p>
                  <p>
                    {state.address.city},{state.address.country}
                  </p>
                </h1>
                <hr />
                <h2>Order Summary</h2>
                {/* <p>
                  <span>Item name</span> <span>Qty</span>
                </p> */}
                <p
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
                  {state.cart?.map((item) => (
                    <ul>
                      <li>{`Product Name :- ${item.name}`}</li>
                      <p>{`Quantity :- ${item.quantity}`}</p>
                    </ul>
                  ))}
                </p>
                <p
                  style={{
                    textDecoration: state?.isDiscount ? "line-through" : ""
                  }}
                >
                  <b>Total Cart Price : </b>${cartPrice}
                </p>
                {state?.isDiscount && (
                  <p>
                    <b>{`Discounted Price : $ ${cartPrice - 20}`}</b>
                  </p>
                )}
              </>
            ) : (
              <h1>Select an address first</h1>
            )}
          </i>
        </>
      )}
    </>
  );
};
