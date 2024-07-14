import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./home/index";
import ContactUs from "./contactUs";
import Navbar from "./component/navbar";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./component/default-error-page";
import Service from"./services/index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <ContactUs />,
    errorElement: <ErrorPage />
  },
  {
    path: "/services",
    element: <Service />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
