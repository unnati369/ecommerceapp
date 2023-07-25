import { useContext } from "react";
// import { ToastContainer } from "react-toastify";
import { ProductContext } from "..";
import { NavLink } from "react-router-dom";
import { Filters } from "./Filters";

export const ProductList = () => {
  const {
    productList,
    dispatch,

    state,
    loading
  } = useContext(ProductContext);

  // console.log(productList);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Filters />
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            }}
          >
            {productList?.map((item) => (
              <div style={{ padding: "3% " }} key={item?.id}>
                <li
                  key={item?.id}
                  style={{
                    border: "1px solid #4B5563",
                    borderRadius: "0 0 0.5rem 0.5rem",
                    margin: "4 4 4 4rem",
                    maxWidth: "100%",
                    padding: "0 0 1rem",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  {" "}
                  <img
                    src={item?.image_url}
                    alt={item?.name}
                    style={{
                      alignSelf: "center",
                      height: "300px",
                      width: "250px"
                    }}
                  />
                  <h4>{`Product Name : ${item?.name}`}</h4>
                  <p>{`Category : ${item?.category}`}</p>
                  <p>{`Rating : ${item?.rating}`}</p>
                  <p>{`Price : $ ${item?.price}`}</p>
                  <NavLink to={`/${item?.id}`}>View Details </NavLink>
                  <br />
                  {state.cart?.find((prd) => prd?.id === item?.id) ? (
                    <NavLink to="/cart">
                      {" "}
                      <button>Go to Cart</button>
                    </NavLink>
                  ) : (
                    <button
                      style={{ width: "50%", alignSelf: "center" }}
                      onClick={() => {
                        // alert("Added to Cart");
                        // setCart([
                        //   ...cart,
                        //   productList.find((prd) => prd.id === item?.id)
                        // ]);
                        dispatch({ type: "updateCart", value: item });
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                  {state.wishlist?.find((prd) => prd.id === item?.id) ? (
                    <NavLink to="/wishlist">
                      {" "}
                      <button>Go to Wishlist</button>
                    </NavLink>
                  ) : (
                    <button
                      style={{ width: "50%", alignSelf: "center" }}
                      onClick={() => {
                        // alert("Added to Wishlist");
                        // setWishlist([
                        //   ...wishlist,
                        //   productList.find((prd) => prd.id === item.id)
                        // ]);
                        dispatch({ type: "updateWishlist", value: item });
                      }}
                    >
                      Add to Wishlist
                    </button>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
