import React, { useEffect, useState } from "react";
import "./ListEmployees.css";
import axios from "axios";
import { priceFormat } from "../utils/priceFormat";

const ListEmployees = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = "http://localhost:8080/crud/empleados";

        const response = await axios.get(url);

        console.log(response.data);

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="container-list">
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Sueldo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) =>(
            <tr key={key}>
              <td>{user.idEmpleado}</td>
              <td>{user.nombre}</td>
              <td>{user.departamento}</td>
              <td>{priceFormat(user.sueldo)}</td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployees;
