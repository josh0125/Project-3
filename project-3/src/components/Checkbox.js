import React from "react";
import "./Checkbox.css";

const Checkbox = ({ value, handleCheckboxChange }) => {
    return (
        <div className="checkbox-item box_1">
            <label htmlFor={value}>{value}</label>
            <input
                type="checkbox"
                className="switch_1"
                id={value}
                onChange={handleCheckboxChange}
                value={value}
            />
        </div>
    );
};

export default Checkbox;
