import { createContext, useReducer, useState, useEffect } from "react";
import { Products } from "../ProductData";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addresses } from "../AddressData";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };
  let products = Products;
  const ProductReducer = (state, action) => {
    switch (action.type) {
      case "searchProduct": {
        return { ...state, search: action.value };
      }
      case "updateCart": {
        state.cart?.find((item) => item.id === action.value.id)
          ? toast("Item removed from Cart")
          : toast("Item added to cart");

        return {
          ...state,
          cart: state.cart?.find((item) => item.id === action.value.id)
            ? state.cart?.filter((item) => item.id !== action.value.id)
            : [...state.cart, { ...action.value, quantity: 1 }]
        };
      }
      case "updateWishlist": {
        state.wishlist?.find((item) => item.id === action.value.id)
          ? toast("Item removed from Wishlist")
          : toast("Item added to Wishlist");
        return {
          ...state,
          wishlist: state.wishlist?.find((item) => item.id === action.value.id)
            ? state.wishlist?.filter((item) => item.id !== action.value.id)
            : [...state.wishlist, action.value]
        };
      }
      case "updateItemQty": {
        // console.log(action.payload);
        // console.log(action.payload.type);
        return {
          ...state,
          cart:
            action.payload === "add"
              ? state.cart?.map((item) =>
                  action.itemId === item.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                )
              : state.cart?.map((item) =>
                  action.itemId === item.id
                    ? {
                        ...item,
                        quantity: item.quantity > 1 ? item.quantity - 1 : 1
                      }
                    : item
                )
        };
      }
      case "moveToWishlist": {
        toast("Item moved to wishlist");
        return {
          ...state,
          cart: state.cart?.filter((item) => item.id !== action.value.id),
          wishlist: [...state.wishlist, action.value]
        };
      }
      case "categorize": {
        return {
          ...state,
          category: action.value
        };
      }
      case "categorizze": {
        const catgs = ["Electronics", "Home & Kitchen", "Fashion"];
        const notselected = catgs.filter((item) => item !== action.value);

        const [a, b] = notselected;
        document.getElementById(a).checked = false;
        document.getElementById(b).checked = false;
        document.getElementById("reset").checked = false;
        return {
          ...state,
          category: action.value
        };
      }
      case "all": {
        // document.getElementById("Electronics").checked = false;
        // document.getElementById("Home & Kitchen").checked = false;
        // document.getElementById("Fashion").checked = false;
        // document.getElementById("lth").checked = false;
        // document.getElementById("htl").checked = false;
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
          address: state.allAdresses?.find((item) => item.id === action.value)
        };
      }
      case "order": {
        !state.orderPlaced ? toast("Order Placed") : toast("Order Cancelled");
        return {
          ...state,
          orderPlaced: !state.orderPlaced
          // cart: []
        };
      }
      case "moveToCart": {
        toast("Item moved to Cart");
        return {
          ...state,
          cart: state.cart?.find((item) => item.id === action.value.id)
            ? state.cart?.map((item) =>
                item.id === action.value.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cart, { ...action.value, quantity: 1 }],
          wishlist: state.wishlist?.filter(
            (item) => item.id !== action.value.id
          )
        };
      }
      case "sortPrice": {
        document.getElementById("reset").checked = false;
        const valuesAvail = ["lth", "htl"];
        const selectedNot = valuesAvail.filter((item) => item !== action.value);
        document.getElementById(selectedNot).checked = false;
        return { ...state, sort: action.value };
      }
      case "slidesort": {
        document.getElementById("reset").checked = false;
        return { ...state, slider: action.value };
      }
      case "signIn": {
        toast("Signed In");
        return { ...state, signedIn: true };
      }
      case "signOut": {
        toast("Signed Out");
        return { ...state, signedIn: false };
      }
      case "emptyCart": {
        toast("Cart is Empty");
        return { ...state, cart: [], orderPlaced: false, address: "" };
      }
      case "emptyWishlist": {
        toast("Wishlist is empty");
        return { ...state, wishlist: [] };
      }
      case "account": {
        return { ...state, create: !action.payload ? true : false };
      }
      case "password": {
        return {
          ...state,
          passwords: action.payload
        };
      }
      case "repassword": {
        return {
          ...state,
          repassword: action.payload
        };
      }
      case "hidePassword": {
        return {
          ...state,
          hidePassword: !state.hidePassword
        };
      }
      case "confirm": {
        return {
          ...state,
          confirm:
            state.passwords.length > 0 && state.passwords === state.repassword
        };
      }
      case "addStreet": {
        return {
          ...state,
          newAddress: { ...state.newAddress, street: action.payload }
        };
      }
      case "addCity": {
        return {
          ...state,
          newAddress: { ...state.newAddress, city: action.payload }
        };
      }
      case "addCountry": {
        return {
          ...state,
          newAddress: { ...state.newAddress, country: action.payload }
        };
      }
      case "addPin": {
        return {
          ...state,
          newAddress: { ...state.newAddress, pinCode: action.payload }
        };
      }
      case "addAddress": {
        return {
          ...state,
          allAdresses: [...state.allAdresses, state.newAddress],
          address: state.newAddress
        };
      }
      case "updateAddresses": {
        return {
          ...state,
          allAdresses:
            action.payload === "Delete"
              ? state.allAdresses?.filter(
                  (item) => item.id !== action.selected.id
                )
              : state.allAdresses?.map((item) =>
                  item.id === action.selected.id
                    ? { ...item, updateAdd: true }
                    : item
                )
          // updateAdd: action.payload === "Update" ? true : false,
          // toUpdate: action.selected
        };
      }
      case "editAddress": {
        return {
          ...state,
          allAdresses: state.allAdresses?.map((item) =>
            item.id === action.selected.id
              ? {
                  ...item,
                  street: state.newAddress?.street,
                  city: state.newAddress?.city,
                  country: state.newAddress?.country,
                  pinCode: state.newAddress?.pinCode,
                  updateAdd: false
                }
              : item
          )
        };
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
    password: "",
    cart: [],
    wishlist: [],
    create: true,
    passwords: "",
    repassword: null,
    confirm: false,
    allAdresses: addresses,
    hidePassword: true,
    newAddress: { id: Math.floor(Math.random() * 200 + 100) }
  });

  const productsList =
    state?.category === ""
      ? state.data
      : products?.filter((item) => item?.category === state?.category);
  const cartPrice = state?.cart?.reduce(
    (accPrice, item) => accPrice + item.price * item.quantity,
    0
  );

  const sorted =
    state?.sort === "lth"
      ? productsList?.sort((a, b) => a.price - b.price)
      : productsList?.sort((a, b) => b.price - a.price);

  const productLists = state?.sort === null ? productsList : sorted;
  const productListing = state?.search
    ? productLists?.filter((item) =>
        item.name.toLowerCase().includes(state.search.toLowerCase())
      )
    : productLists;
  const productList =
    state?.slider === null
      ? productListing
      : productListing?.filter((item) => item.rating <= state.slider);
  return (
    <>
      <ProductContext.Provider
        value={{
          dispatch,
          productList,
          loading,
          products,
          setLoading,
          cartPrice,
          state,
          loader
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};
