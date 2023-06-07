import { useContext } from "react";
import { ProductContext } from "..";
import { NavLink } from "react-router-dom";
export const Wishlist = () => {
  const { wishlist, dispatch, setWishlist } = useContext(ProductContext);
  // console.log(Wishlist);
  return (
    <>
      <h1>MyWishlist</h1>
      {wishlist.length === 0 ? (
        <>
          <p>Wishlist is Empty!</p>
          <NavLink to="/productListing">
            <p onClick={() => dispatch({ type: "all" })}>
              Let's add something to wishlist.
            </p>
          </NavLink>
        </>
      ) : (
        <button onClick={() => setWishlist((wishlist) => [])}>
          Empty Wishlist{" "}
        </button>
      )}
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {wishlist.map((item) => (
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
                  width: "20%",
                  alignSelf: "center",
                  padding: " 0.2rem",
                  margin: "0.5rem"
                }}
                onClick={() =>
                  dispatch({ type: "removeWishlist", value: item.id })
                }
              >
                Remove from Wishlist
              </button>
              <hr />
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};
