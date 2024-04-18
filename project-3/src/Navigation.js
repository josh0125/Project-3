import { Route, Routes } from "react-router-dom";
// import "./Navigation.css";
import * as React from "react";
import SignUp from "./pages/Signup.js";
import Home from "./pages/Home.js";
import Evaluator from "./pages/Evaluator.js";

function Navigation() {
    return (
        <Routes>
            <Route path="*" element={<div></div>} />
            <Route path="/" element={<Home />} />
            <Route
                path="/evaluator"
                element={
                    <>
                        <Evaluator />
                    </>
                }
            />
            <Route path="/waitlist" element={<SignUp />} />
        </Routes>
    );
}

export default Navigation;
