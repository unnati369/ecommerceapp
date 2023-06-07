import { createContext, useReducer, useState } from "react";
import { products } from "../ProductData";
// import { addresses } from "/src/components/AdressData";
import { addresses } from "../AddressData";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const ProductReducer = (state, action) => {
    switch (action.type) {
      case "searchProduct": {
        return { ...state, search: action.value };
      }

      case "removeCart": {
        alert("Removed from Cart");
        return setCart(cart.filter((item) => item.id !== action.value));
      }

      case "removeWishlist": {
        alert("Removed from Wishlist");
        return setWishlist(wishlist.filter((item) => item.id !== action.value));
      }
      case "categorize": {
        // document.getElementById(action.value).checked = false;
        // document.getElementById(!action.value).checked = false;
        return {
          ...state,
          category: action.value
        };
      }
      case "categorizze": {
        const catgs = ["Electronics", "Home & Kitchen", "Fashion"];
        const notselected = catgs.filter((item) => item !== action.value);
        // console.log(notselected);
        const [a, b] = notselected;
        document.getElementById(a).checked = false;
        document.getElementById(b).checked = false;
        // document.getElementById(action.value).checked = true;
        // document.getElementById(!action.value).checked = false;
        return {
          ...state,
          category: action.value
        };
      }
      case "all": {
        return {
          ...state,
          category: "",
          sort: null,
          checkbox: false,
          slider: null,
          search: ""
        };
      }
      case "discount": {
        document.getElementById("myBtn").disabled = true;
        return { ...state, isDiscount: true };
      }
      case "address": {
        return {
          ...state,
          address: addresses.find((item) => item.id === action.value)
        };
      }
      case "order": {
        !state.orderPlaced ? alert("Order Placed") : alert("Order Cancelled");
        return { ...state, orderPlaced: !state.orderPlaced };
      }
      case "sortPrice": {
        const valuesAvail = ["lth", "htl"];
        const selectedNot = valuesAvail.filter((item) => item !== action.value);
        document.getElementById(selectedNot).checked = false;
        return { ...state, sort: action.value };
      }
      case "slidesort": {
        // console.log(action.value);
        return { ...state, slider: action.value };
      }
      case "signIn": {
        alert("Signed In");
        return { ...state, signedIn: true };
      }
      case "signOut": {
        alert("Signed Out");
        return { ...state, signedIn: false };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(ProductReducer, {
    search: "",
    data: products,
    category: "",
    isDiscount: false,
    address: "",
    orderPlaced: false,
    sort: null,
    checkbox: false,
    slider: null,
    signedIn: false,
    email: "",
    password: ""
  });

  const productsList =
    state?.category === ""
      ? products
      : products?.filter((item) => item?.category === state?.category);
  const cartPrice = cart?.reduce((accPrice, { price }) => accPrice + price, 0);

  const sorted =
    state?.sort === "lth"
      ? productsList?.sort((a, b) => a.price - b.price)
      : productsList?.sort((a, b) => b.price - a.price);

  const productLists = state.sort === null ? productsList : sorted;
  const productListing = state.search
    ? productLists?.filter((item) =>
        item.name.toLowerCase().includes(state.search.toLowerCase())
      )
    : productLists;
  const productList =
    state.slider === null
      ? productListing
      : productListing.filter((item) => item.rating <= state.slider);
  return (
    <>
      <ProductContext.Provider
        value={{
          dispatch,
          productList,
          cart,
          wishlist,
          products,
          setCart,
          setWishlist,
          cartPrice,
          state
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
