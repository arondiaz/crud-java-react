import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container-app">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
