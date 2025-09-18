import React from "react";
import styles from "./layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function index() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default index;
