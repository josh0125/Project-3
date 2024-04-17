import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div class="hero">
                <picture>
                    <source srcset="/highlighter.jpg" media="(min-width: 901px)" height={100} />
                    <source srcset="/highlighter.jpg" media="(min-width: 501px)" height={100} />
                    <source srcset="/highlighter.jpg" media="(max-width: 500px)" height={100} />
                    <img src="/highlighter.jpg" alt="highlighters" />
                </picture>
                <div class="text-wrapper">
                    <div id="toggle">
                        <button id="toggleButton">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <h1>Welcome to Our Resume Highlighter</h1>
                    <p>By Joshua Allen</p>
                </div>
            </div>
            <div className="home-container">
                <p className="home-description">
                    We specialize in analyzing resumes and highlighting specific elements of resumes
                    to decrease the amount of time recruiters will spend looking through a resume.
                    In version 1 of our application, we will be focusing on highlighting the
                    following areas:
                </p>
                <ul className="home-description">
                    <li>GPA</li>
                    <li>SAT</li>
                    <li>Skills</li>
                    <li>Present Job</li>
                    <li>Education</li>
                    <li>Custom Search Seaction</li>
                </ul>
                <p className="home-description">
                    Checkout our <NavLink to="/evaluator">BETA</NavLink> right now to see what we
                    can do to help you! After checking out our resume evalutor, head over and join
                    our <NavLink to="/waitlist">waitlist</NavLink> today!
                </p>
            </div>
        </>
    );
};

export default Home;
