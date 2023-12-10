// import { useState } from "react";
import "./App.css";
import { Nav } from "../common/Nav";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default App;
