import React from "react";
import Status from "./../components/Status.js";
import "./StatusSection.css";

const StatusSection = ({ data }) => {
    return (
        <div className="results-section">
            <h2>APPLICANTS</h2>
            <Status statusType="Accept" data={data} />
            <Status statusType="Reject" data={data} />
            <Status statusType="Pending" data={data} />
            <div className="spacer"></div>
        </div>
    );
};

export default StatusSection;
