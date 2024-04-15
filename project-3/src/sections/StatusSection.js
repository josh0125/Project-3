import React from "react";
import Status from "./../components/Status.js";
import "./StatusSection.css";

const StatusSection = ({ data }) => {
    return (
        <div className="results-section">
            <h2>Applicants</h2>
            <Status statusType="Accept" data={data} />
            <Status statusType="Reject" data={data} />
            <Status statusType="Pending" data={data} />
        </div>
    );
};

export default StatusSection;
