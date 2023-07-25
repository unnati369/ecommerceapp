import { addresses } from "./AddressData";
import { ProductContext } from "..";
import { useContext } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";

export const Address = () => {
  const { dispatch, state, loading, loader } = useContext(ProductContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const Options = (add) => {
    return (
      <div>
        <Popup
          trigger={
            <img
              src="https://w7.pngwing.com/pngs/141/210/png-transparent-three-dots-multimedia-solid-px-icon-thumbnail.png"
              height="30px"
              alt="options"
              style={{ marginRight: "70%" }}
            />
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <select
                onChange={(e) =>
                  dispatch({
                    type: "updateAddresses",
                    payload: e.target.value,
                    selected: add
                  })
                }
              >
                <option>Select an option : </option>
                <option>Update</option>
                <option>Delete</option>
              </select>
              <div>
                <button onClick={() => close()}>Close</button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          {/* {state.orderPlaced && state.address.length !== 0 ? (
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
          )} */}
          {state.address.length === 0 && (
            <p style={{ color: "blue" }}>Select an address</p>
          )}
          <ul>
            {state.allAdresses?.map((add) => (
              <div
                onClick={() => dispatch({ type: "address", value: add.id })}
                style={{
                  border: "1px solid",
                  padding: "1%",
                  margin: "2% 40%",
                  backgroundColor:
                    state.address.id === add.id ? "lightpink" : ""
                }}
              >
                {Options(add)}
                {add.updateAdd && (
                  <div>
                    <h4>Edit address</h4>
                    <form onSubmit={handleSubmit}>
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
                        onClick={() =>
                          dispatch({ type: "editAddress", selected: add })
                        }
                      >
                        Update adress
                      </button>
                    </form>
                  </div>
                )}
                <p>Street : {add.street}</p>
                <p>City : {add.city}</p>
                <p>Country : {add.country}</p>
                <p>Pin Code : {add.pinCode}</p>
              </div>
            ))}
          </ul>
          <NavLink to="/addAddress">
            {" "}
            <p>Add new Address</p>
          </NavLink>
          {state.orderPlaced ? (
            <button
              onClick={() => {
                loader();
                dispatch({ type: "order" });
              }}
            >
              Cancel Order
            </button>
          ) : (
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
          )}
        </>
      )}
    </>
  );
};
