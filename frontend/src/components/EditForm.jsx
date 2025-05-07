import axios from "axios";
import React from "react";
import { useState } from "react";
import "./EditForm.css"

const EditForm = ({ employee, onClose }) => {
  const [editForm, setEditForm] = useState({ ...employee });

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/crud/empleados/${employee.idEmpleado}`;

      await axios.put(url, editForm);
      onClose(editForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Editar empleado</h2>
        <form action="" method="PUT" onSubmit={handleSave} className="edit-form">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={editForm.nombre}
            onChange={handleChange}
          />

          <label htmlFor="departamento">Departamento</label>
          <input
            type="text"
            name="departamento"
            value={editForm.departamento}
            onChange={handleChange}
          />

          <label htmlFor="sueldo">Sueldo</label>
          <input
            type="number"
            name="sueldo"
            value={editForm.sueldo}
            onChange={handleChange}
          />

          <div className="btn-modal">
            <input
              onClick={handleSave}
              className="btn-edit"
              type="submit"
              value={"Editar"}
            />

            <button onClick={onClose} className="btn-cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
