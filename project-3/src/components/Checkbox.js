import React from "react";
import "./Checkbox.css";

const Checkbox = ({ value, handleCheckboxChange }) => {
    return (
        <div className="checkbox-item box_1">
            <input
                type="checkbox"
                class="switch_1"
                id={value}
                onChange={handleCheckboxChange}
                value={value}
            />
            <label htmlFor={value}>{value}</label>
        </div>
    );
};

export default Checkbox;
