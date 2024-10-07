import React from "react";
import MaineNavbar from "../../components/MainNavbar/MaineNavbar";
import { Outlet } from "react-router-dom";

export default function Root_layout() {
  return (
    <div>
      <MaineNavbar />
      <Outlet />
    </div>
  );
}
