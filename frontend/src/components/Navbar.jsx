import React from "react";
import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="container-nav">
      <div className="navbar">
        <Link to={"/"}>
          <h1>CRUD REACT JAVA</h1>
        </Link>
        <ul>
          <li>
            <Link to={"/"} className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={"/agregarEmpleado"} className="link">
              Agregar empleado
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
