import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Skill from "./Component/Skill.jsx";
import Project from "./Component/Project.jsx";
import Contact from "./Component/Contact.jsx";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    { path: "", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/skill", element: <Skill /> },
    { path: "/project", element: <Project /> },
    { path: "/contact", element: <Contact /> },
  ],
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
