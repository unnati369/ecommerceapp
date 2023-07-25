import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "..";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./pages/Home";
import { Header } from "./pages/Header";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Auth } from "./pages/Auth";
import { ProductList } from "./pages/ProductListing";
import { About } from "./pages/About";
import { Address } from "./components/Address";
import { useContext } from "react";
import { UserProfile } from "./pages/UserProfile";
import { Checkout } from "./components/Checkout";
import { NewAddress } from "./components/NewAddress";
export default function App() {
  // const isLoggedIn = false;
  const { state } = useContext(ProductContext);
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {state?.signedIn && (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </>
        )}
        {!state?.signedIn && (
          <>
            <Route path="/cart" element={<Auth />} />
            <Route path="/wishlist" element={<Auth />} />
            <Route path="/address" element={<Auth />} />
          </>
        )}
        <Route path="/login" element={<UserProfile />} />
        <Route path="/productListing" element={<ProductList />} />
        <Route path="/:productId" element={<About />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addAddress" element={<NewAddress />} />
      </Routes>

      <ToastContainer
        // limit={1}

        position="top-right"
        autoClose={400}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
