import React, { useContext } from "react";
import Productos from "../components/Productos";
import { productosContext } from "../context/ProductosContext";

export default function Home() {
  const { productos } = useContext(productosContext);
  return (
    <div className="page">
      <Productos
        productos={productos}
        stilos={"grid grid-cols-3 gap-5 mt-10 pl-12"}
      />
    </div>
  );
}
