import React from "react";
import Producto from "./Producto";

export default function Productos({ productos, stilos }) {
  return (
    <section className={stilos}>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          stilos={"bg-white rounded-md"}
        />
      ))}
    </section>
  );
}
