import React from "react";
import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container-nav">
    <div className="navbar">
      <h1>CRUD REACT JAVA</h1>
      <ul>
        <li>
        <Link to={"/agregarEmpleado"} className="link">Agregar empleado</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
