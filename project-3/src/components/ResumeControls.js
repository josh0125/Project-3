import React from "react";
import StatusButton from "./../components/StatusButton.js";
import "./ResumeControls.css";

function ResumeEvaluater({ buttons, handleStatusChange, status }) {
    return (
        <div className="pdf-controls">
            <div className="status-bar">
                <div className="status">
                    <h2>
                        Status:<span>{status}</span>
                    </h2>
                </div>
            </div>

            <div className="status-buttons">
                {buttons.map((e) => {
                    return (
                        <StatusButton
                            key={e.statusType}
                            handleStatusChange={handleStatusChange}
                            statusType={e.statusType}
                            classType={e.classType}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ResumeEvaluater;
