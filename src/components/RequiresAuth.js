import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ProductContext } from "..";

export function RequiresAuth({ children }) {
  let location = useLocation();
  const { state } = useContext(ProductContext);
  return state.signedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
