import React, { useEffect, useState } from "react";
import "./ListEmployees.css";
import axios from "axios";
import { priceFormat } from "../utils/priceFormat";
import EditForm from "./EditForm";

const ListEmployees = () => {
  const [users, setUsers] = useState([]);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = "http://localhost:8080/crud/empleados";

        const response = await axios.get(url);

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const deleteEmployee = async (user) => {
    const { idEmpleado, nombre } = user;
    const isTrue = confirm(`Esta seguro de eliminar ${nombre}?`);
    const url = `http://localhost:8080/crud/empleados/${idEmpleado}`;
    if (!isTrue) {
      return;
    }
    try {
      await axios.delete(url);
      setUsers(users.filter((userFil) => userFil.idEmpleado !== idEmpleado));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (employee) => {
    setEmployeeToEdit(employee);
  };

  return (
    <div className="container-list">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Sueldo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key}>
              <td>{user.idEmpleado}</td>
              <td>{user.nombre}</td>
              <td>{user.departamento}</td>
              <td>{priceFormat(user.sueldo)}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(user)}>
                  Editar
                </button>{" "}
                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(user)}
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {employeeToEdit && (
        <EditForm
          key={employeeToEdit.idEmpleado}
          employee={employeeToEdit}
          onClose={() => setEmployeeToEdit(null)}
        />
      )}
    </div>
  );
};

export default ListEmployees;
