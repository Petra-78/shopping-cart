import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./router.jsx";
import { createBrowserRouter } from "react-router";
import BooksProvider from "./context/BooksProvider.jsx";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  </StrictMode>
);
