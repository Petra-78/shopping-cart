import { createContext, useState } from "react";

const QuantityContext = createContext();
export function QuantityProvider({ children }) {
  const [quantities, setQuantities] = useState({});
  const setQuantity = (bookId, value) => {
    setQuantities((prev) => ({ ...prev, [bookId]: value }));
  };
  return (
    <QuantityContext.Provider value={{ quantities, setQuantity }}>
      {" "}
      {children}{" "}
    </QuantityContext.Provider>
  );
}
export default QuantityContext;
