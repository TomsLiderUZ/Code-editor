import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import { Card, Add, Load } from "./../../components/Card/card";

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Projects</h1>
      <div className={styles.projects}>
        <Load />
        <Add />
        <Card />
      </div>
    </div>
  );
}

export default HomePage;
