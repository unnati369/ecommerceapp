import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "..";
import { Auth } from "./Auth";
export const UserProfile = () => {
  const { dispatch, state } = useContext(ProductContext);
  return (
    <>
      <h1>Welcome User !</h1>
      {state.signedIn ? (
        <NavLink to="/">
          <button onClick={() => dispatch({ type: "signOut" })}>
            Sign Out
          </button>
        </NavLink>
      ) : (
        <Auth />
      )}
    </>
  );
};
