import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DataPage from "./pages/user-data/data-page.tsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/user-data", element: <DataPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
