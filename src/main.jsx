import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>,
            },
            {
                path: "/:id",
                element: <h1>Edit Task</h1>,
            },
            {
                path: "/search",
                element: <h1>Search</h1>,
            },
            {
                path: "/info",
                element: <h1>Info</h1>,
            },
            {
                path: "/settings",
                element: <h1>Settings</h1>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
