import React, { useState } from "react";
import "./Form.css";
import postData from "../api/postData";

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        position: "",
        company: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData("http://localhost:8000/waitlist", formData);

        setFormData({
            name: "",
            email: "",
            phone: "",
            position: "",
            company: "",
        });

        setSubmitted(true);
    };

    return (
        <div className="form-container">
            {submitted ? (
                <>
                    <p>Form submitted successfully!</p>
                    <p>Thank you for joining the waitlist. We will contact you soon.</p>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>NAME:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>EMAIL:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>NUMBER:</label>
                        <input
                            type="tel"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>POSITION:</label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>COMPANY:</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            )}
        </div>
    );
};

export default Form;
