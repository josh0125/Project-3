import React from "react";
import "./Status.css";

const Status = ({ statusType, data }) => {
    return (
        <div className="status-sections">
            <h3>{statusType}</h3>

            <ul className="status-list">
                {data.map((applicant) =>
                    applicant.status === statusType ? (
                        <li key={applicant.name}>{applicant.name}</li>
                    ) : null
                )}
            </ul>
        </div>
    );
};

export default Status;
