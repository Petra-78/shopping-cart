import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import routes from "./router.jsx";
import { BooksProvider } from "./context/BooksContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </BooksProvider>
  </StrictMode>
);
