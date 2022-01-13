import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import DataTicket from "../pages/DataTicket/DataTicket";
import TiketSuppport from "../pages/TiketSupport/TiketSuppport";

const Routee = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<DataTicket />} />
      <Route path="/tiket/support" element={<TiketSuppport />} />
    </Routes>
  );
};

export default Routee;
