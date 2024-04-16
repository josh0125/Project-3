import React from "react";
import "./StatusButton.css";

const StatusButton = ({ handleStatusChange, statusType, classType }) => {
    return (
        <button className={classType} onClick={handleStatusChange}>
            {statusType === "Reset" ? (
                <img src="/reset.svg" alt="reset logo" width="25s" />
            ) : (
                statusType
            )}
        </button>
    );
};

export default StatusButton;
