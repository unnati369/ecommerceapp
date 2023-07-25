import { ProductContext } from "..";
import { useContext } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

export const NewAddress = () => {
  const { dispatch, loader } = useContext(ProductContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <NavLink to="/address">
        {" "}
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/589/654/original/vector-back-icon.jpg"
          height="30px"
          alt="back"
          style={{ marginRight: "70%" }}
        />
      </NavLink>
      <div>
        <h4>Add address</h4>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            alignItems: "center",
            margin: "1% 35%"
          }}
          onSubmit={handleSubmit}
        >
          {/* <h2>Add an address</h2> */}

          <label>Street : </label>
          <input
            onChange={(e) =>
              dispatch({
                type: "addStreet",
                payload: e.target.value
              })
            }
          />
          <label>City : </label>
          <input
            onChange={(e) =>
              dispatch({ type: "addCity", payload: e.target.value })
            }
          />
          <label>Country : </label>
          <input
            onChange={(e) =>
              dispatch({
                type: "addCountry",
                payload: e.target.value
              })
            }
          />
          <label>Pin-Code : </label>
          <input
            onChange={(e) =>
              dispatch({ type: "addPin", payload: e.target.value })
            }
          />
          <button
            style={{ padding: "2%", margin: "5%" }}
            onClick={() => dispatch({ type: "addAddress" })}
          >
            Add adress
          </button>
        </form>
        <NavLink to="/checkout">
          <button
            onClick={() => {
              loader();
              dispatch({ type: "order" });
            }}
          >
            Place Order
          </button>
        </NavLink>
      </div>
    </>
  );
};
