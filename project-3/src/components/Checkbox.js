import React from "react";
import "./Checkbox.css";

const Checkbox = ({ value, handleCheckboxChange }) => {
    return (
        <div className="checkbox-item">
            <input type="checkbox" id={value} onChange={handleCheckboxChange} value={value} />
            <label htmlFor={value}>{value}</label>
        </div>
    );
};

export default Checkbox;
