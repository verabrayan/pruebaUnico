import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Producto from "../components/Producto";
import Productos from "../components/Productos";
import { productosContext } from "../context/ProductosContext";
//import NotFound from './NotFound';

export default function Details() {
  const { id } = useParams();
  const { productos, loading } = useContext(productosContext);

  // eslint-disable-next-line eqeqeq
  const producto = productos.filter((producto) => producto.id == id)[0];

  return loading ? (
    <p>Loading...</p>
  ) : (
    <main className="grid grid-cols-2 flex">
      <section>
        <div className="bg-red">
          <Producto
            producto={producto}
            stilos={"bg-white rounded-md p-12"}
          ></Producto>
        </div>
      </section>
      <section>
        <Productos
          productos={productos}
          stilos={"grid grid-cols-2 gap-5 mt-10 pr-6"}
        />
      </section>
    </main>
  );
}
