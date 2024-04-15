import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-heading">About Us</h2>
            <p className="about-text">
                Welcome to our website! We are a team of passionate individuals dedicated to
                providing high-quality products/services to our customers.
            </p>
            <p className="about-text">Our mission is to...</p>
            <p className="about-contact">
                Contact us at:{" "}
                <a href="mailto:example@example.com" className="contact-link">
                    example@example.com
                </a>
            </p>
        </div>
    );
};

export default About;
