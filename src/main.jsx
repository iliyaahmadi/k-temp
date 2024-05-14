import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../public/styles/globals.scss";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import GlobalContextProvider from "./store/globalContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
