import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenuOnMobile = () => {
        if (window.innerWidth <= 1150) {
            setShowMenu(false);
        }
    };
    return (
        <header className="header">
            <nav className="nav container">
                <NavLink to="/" className="nav-logo">
                    Resume Highlighter
                </NavLink>
                <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" onClick={closeMenuOnMobile}>
                                Home
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/about" className="nav-link" onClick={closeMenuOnMobile}>
                                About
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink
                                to="/evaluator"
                                className="nav-link"
                                onClick={closeMenuOnMobile}
                            >
                                Demo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/waitlist"
                                className="nav-link nav-cta"
                                onClick={closeMenuOnMobile}
                                id="waitlist"
                            >
                                Waitlist
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-close" id="nav-close" onClick={toggleMenu}>
                        <IoClose />
                    </div>
                </div>

                <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}>
                    <IoMenu />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
