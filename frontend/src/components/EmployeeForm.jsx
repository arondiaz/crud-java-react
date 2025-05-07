import React, { useState } from "react";
import "./EmployeeForm.css";
import axios from "axios";
import { useNavigate } from "react-router";
import Error from "./Error";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEmployee = async (e) => {
    e.preventDefault();
    const { nombre, departamento, sueldo } = formData;
    console.log(error);
    if (nombre == "" || departamento == "" || sueldo == "") {
      setError("Campos vacíos");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    try {
      const url = "http://localhost:8080/crud/empleados";
      const response = await axios.post(url, formData);

      if (response.status == 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Agregar empleado</h1>

      <form className="form-container" method="POST" onSubmit={addEmployee}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="departamento">Departamento</label>
        <input
          type="text"
          name="departamento"
          value={formData.departamento}
          onChange={handleChange}
        />

        <label htmlFor="sueldo">Sueldo</label>
        <input
          type="number"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
        />

        <input className="btn-submit" type="submit" value={"Agregar"} />
 
        {error && <Error error={error} />}
      </form>
    </div>
  );
};

export default EmployeeForm;
