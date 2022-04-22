import React from "react";
import { Link } from "react-router-dom";

export default function Navitem({ title, to }) {
  return (
    <lu className="text-lavender-900 hover:text-blue m-0 ml-3 cursor-pointer">
      <Link to={to}>{title}</Link>
    </lu>
  );
}
