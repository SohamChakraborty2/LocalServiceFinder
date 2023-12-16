import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Sign Up Page/login.jsx";
import SignUp from "./components/Sign Up Page/signup.jsx";
import Provider_SignUp from "./components/Sign Up Page/provider_signup.jsx";
import Application from "./components/Application/Application.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "application",
    element: <Application />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "provider_signup",
    element: <Provider_SignUp />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
