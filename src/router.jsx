import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Home from "./pages/home/Home";
import BookPage from "./components/BookPage/BookPage";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/books/:bookId", element: <BookPage /> },
    ],
  },
];

export default routes;
