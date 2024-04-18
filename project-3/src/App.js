import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <main className="main-content">
                    <Navigation />
                </main>
            </Router>
        </>
    );
}

export default App;
