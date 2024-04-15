import React from "react";
import "./StatusButton.css";

const StatusButton = ({ handleStatusChange, statusType, classType }) => {
    return (
        <button className={classType} onClick={handleStatusChange}>
            {statusType}
        </button>
    );
};

export default StatusButton;
