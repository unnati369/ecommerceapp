import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import {
  ProductContext,
  ProductContextProvider
} from "./components/context/ProductContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </Router>
  </StrictMode>
);
export { ProductContext };
