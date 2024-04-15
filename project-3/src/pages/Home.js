import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <img src="/highlighter.jpg" alt="highlighters" width={100} />
            <h2 className="home-heading">Welcome to Our Resume Highlighter</h2>
            <p className="home-description">
                We specialize in analyzing resumes and highlighting specific elements of resumes to
                decrease the amount of time recruiters will spend looking through a resume. In
                version 1 of our application, we will be focusing on highlighting the following
                areas:
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
                Checkout our <NavLink to="/evaluator">BETA</NavLink> right now to see what we can do
                to help you! After checking out our resume evalutor, head over and join our{" "}
                <NavLink to="/waitlist">waitlist</NavLink> today!
            </p>
        </div>
    );
};

export default Home;
