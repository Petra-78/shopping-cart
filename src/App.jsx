import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CartContext from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartContext value={cart}>
        <NavBar />
        <Outlet />
      </CartContext>
    </div>
  );
}

export default App;
