import React from "react";

import { Link } from "react-router-dom";

import Navitem from "./Navitem";
import { FaUserCircle } from "react-icons/fa";
import { GiCondorEmblem } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className=" max-w-screen-2xl mx-auto py-2 flex justify-around bg-white shadow-md">
      <div className="flex items-center">
        <Link className="text-xl font-medium text-blue-800" to="/">
          <GiCondorEmblem className="h-9 w-9" />
        </Link>
      </div>
      {/*<!-- left header section -->*/}
      <div className="items-center  space-x-8 lg:flex">
        <Navitem to="/" title={"Home"} />
        <Navitem to="*" title={"Categorias"} />
        <Navitem to="*" title={"Visitanos"} />
        <Navitem to="*" title={"Acerca de"} />
        <Navitem to="*" title={"Contactanos"} />
      </div>
      {/*<!-- right header section -->*/}
      <div className="flex items-center space-x-2">
        <Link
          to="*"
          className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="*"
          className="px-4 py-2 text-blue-100 bg-blue-800 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Registrarme
        </Link>
        <FaUserCircle className="h-9 w-9 text-blue-800" />
      </div>
    </nav>
  );
}
