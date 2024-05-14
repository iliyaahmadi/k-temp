import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./components/pages/login";
import AppLayout from "./components/appLayout/AppLayout";
import Properties from "./pages/Properties";
import BankAccounts from "./pages/BankAccounts";
import PropertyDetails from "./pages/PropertyDetails";


function App() {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<dashboard />} />
          <Route path="/dashboard/properties" element={<Properties />} />
          <Route path="/dashboard/bank-accounts" element={<BankAccounts />} />
          <Route path="/dashboard/properties/1111" element={<PropertyDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
