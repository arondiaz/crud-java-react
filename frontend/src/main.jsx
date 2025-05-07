import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout.jsx";
import ListEmployees from "./components/listEmployees.jsx";
import EmployeeForm from "./components/EmployeeForm.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<ListEmployees/>}/>
        <Route path="/agregarEmpleado" element={<EmployeeForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
