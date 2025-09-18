import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import Layout from "../components/Layout";
import NotFoundPage from "../pages/notFound/index";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {navbar.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}

        <Route index element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Index;
