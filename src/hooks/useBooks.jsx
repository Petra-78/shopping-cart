import { useContext } from "react";
import BooksContext from "../context/BooksContext";

export const useBooks = () => useContext(BooksContext);
