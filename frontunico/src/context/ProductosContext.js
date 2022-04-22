import React, { createContext, useEffect, useReducer, useState } from "react";
import productosReducer, {
  productosInitialState,
} from "../reducers/productosReducer";
import { get } from "../api/index";

export const productosContext = createContext();

export default function ProductosContext({ children }) {
  const [productos, setProductos] = useReducer(
    productosReducer,
    productosInitialState
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/productos").then((res) => {
      setProductos({ type: "addProductos", productos: res.data });
      setLoading(false);
    });
    /* .then((data) => {
        console.log("hola");
        setProductos({ type: "addProductos", productos: data });
        setLoading(false);
      })
      .catch((error) => setLoading(false)); */
  }, []);

  return (
    <productosContext.Provider
      value={{
        loading,
        productos: productos.productos,
      }}
    >
      {children}
    </productosContext.Provider>
  );
}
