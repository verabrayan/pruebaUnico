import React from "react";
import { Link } from "react-router-dom";

export default function Producto({ producto, stilos }) {
  return (
    <article key={producto.id} className={stilos}>
      <Link to={"/productos/" + producto.id}>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="\#">
            <img
              className="h-48 w-full p-2 rounded-2xl object-cover object-center transition-all hover:object-bottom duration-1000 rounded-b-md"
              src={producto.imagen}
              alt={producto.nombre}
            />
          </a>
          <div className="p-5">
            <a href="#\">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {producto.nombre}
              </h5>
            </a>
            <h6 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
              ${producto.precio}
            </h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {producto.descripcion}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
