import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ProductContext } from "..";

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
export default function App() {
  // const isLoggedIn = false;
  const { state } = useContext(ProductContext);
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {state.signedIn && (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/address" element={<Address />} />
          </>
        )}
        {!state.signedIn && (
          <>
            <Route path="/cart" element={<Auth />} />
            <Route path="/wishlist" element={<Auth />} />
            <Route path="/address" element={<Auth />} />
          </>
        )}
        <Route path="/login" element={<UserProfile />} />
        <Route path="/productListing" element={<ProductList />} />
        <Route path="/:productId" element={<About />} />
      </Routes>
    </div>
  );
}
