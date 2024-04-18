import React, { useEffect, useState } from "react";
import Checkbox from "./../components/Checkbox.js";
import "./CheckboxSection.css";

const CheckboxSection = ({
    handleCheckboxChange,
    handleCheckboxAdd,
    newCheck,
    handleNewCheckChange,
}) => {
    const [checks, setChecks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/checks")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((checks) => {
                setChecks(checks);
                console.log(checks);
            })
            .catch((error) => {
                console.error("Error fetching applicants: ", error);
            });
    }, [newCheck]);

    return (
        <div className="checkbox-section">
            <h2>CHECKS</h2>
            <div className="checkboxes">
                {checks.map((check) => {
                    return (
                        <Checkbox
                            value={check.name}
                            key={check.id}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    );
                })}
            </div>

            <div className="add-check-section">
                <h3>Add Your Own Check</h3>
                <input
                    type="text"
                    name="newCheck"
                    value={newCheck.name}
                    onChange={handleNewCheckChange}
                    required
                />
                <button type="button" onClick={handleCheckboxAdd}>
                    ADD
                </button>
            </div>
        </div>
    );
};

export default CheckboxSection;
