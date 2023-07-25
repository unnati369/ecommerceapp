import { useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { ProductContext } from "..";

export const About = () => {
  const { productId } = useParams();
  const { productList, state, wishlist, dispatch, setWishlist } = useContext(
    ProductContext
  );
  const detailedPrd = productList?.find(
    (item) => item?.id === Number(productId)
  );

  return (
    <div>
      {/* <h1>This shows details of product with id {productId}</h1> */}
      <ul>
        <img
          src={detailedPrd?.image_url}
          alt={detailedPrd?.name}
          height="500px"
        />
        <h3>Product Name : {detailedPrd?.name}</h3>
        <p>
          <b>Description :</b> {detailedPrd?.description}
        </p>
        <p>Price : {`$ ${detailedPrd?.price}`}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          {state.cart?.find((prd) => prd?.id === detailedPrd?.id) ? (
            <NavLink to="/cart">
              {" "}
              <button
                style={{
                  width: "20%",
                  alignSelf: "center",
                  padding: " 0.2rem",
                  margin: "0.5rem"
                }}
              >
                Go to Cart
              </button>
            </NavLink>
          ) : (
            <button
              style={{
                width: "20%",
                alignSelf: "center",
                padding: " 0.2rem",
                margin: "0.5rem"
              }}
              onClick={() =>
                dispatch({ type: "updateCart", value: detailedPrd })
              }
            >
              Add to Cart
            </button>
          )}
          {state.wishlist?.find((prd) => prd?.id === detailedPrd?.id) ? (
            <NavLink to="/wishlist">
              {" "}
              <button
                style={{
                  width: "20%",
                  alignSelf: "center",
                  padding: " 0.2rem",
                  margin: "0.5rem"
                }}
              >
                Go to Wishlist
              </button>
            </NavLink>
          ) : (
            <button
              style={{
                width: "20%",
                alignSelf: "center",
                padding: " 0.2rem",
                margin: "0.5rem"
              }}
              onClick={() =>
                dispatch({ type: "updateWishlist", value: detailedPrd })
              }
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </ul>
    </div>
  );
};
