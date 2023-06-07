import { addresses } from "./AddressData";
import { ProductContext } from "..";
import { useContext } from "react";

export const Address = () => {
  const { dispatch, state } = useContext(ProductContext);
  return (
    <>
      {state.orderPlaced && state.address.length !== 0 ? (
        <i style={{ color: "red" }}>
          <h1>
            Order Shipped to : <p>{state.address.street}</p>
            <p>
              {state.address.city},{state.address.country}
            </p>
          </h1>
        </i>
      ) : (
        ""
      )}
      {state.address.length === 0 && (
        <p style={{ color: "blue" }}>Select an address</p>
      )}
      <ul>
        {addresses.map((add) => (
          <div
            onClick={() => dispatch({ type: "address", value: add.id })}
            style={{
              border: "1px solid",
              padding: "1%",
              margin: "2% 40%",
              backgroundColor: state.address.id === add.id ? "lightpink" : ""
            }}
          >
            <p>Street : {add.street}</p>
            <p>City : {add.city}</p>
            <p>Country : {add.country}</p>
            <p>Pin Code : {add.pinCode}</p>
          </div>
        ))}
      </ul>
      {state.orderPlaced ? (
        <button onClick={() => dispatch({ type: "order" })}>
          Cancel Order
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "order" })}>Place Order</button>
      )}
    </>
  );
};
