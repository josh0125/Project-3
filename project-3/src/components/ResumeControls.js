import React from "react";
import StatusButton from "./../components/StatusButton.js";
import "./ResumeControls.css";

function ResumeEvaluater({
    buttons,
    handleStatusChange,
    status,
    resumeIndex,
    onPreviousResume,
    onNextResume,
    resumeFileLength,
}) {
    return (
        <div className="pdf-controls">
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
            <div className="status-bar">
                <span>
                    {resumeIndex !== 0 && (
                        <button className="next-resume-button" onClick={onPreviousResume}>
                            ←
                        </button>
                    )}
                </span>
                <div className="status">
                    <h2>Status:</h2>
                    <p>{status}</p>
                </div>
                <span>
                    {resumeIndex !== resumeFileLength && (
                        <button className="next-resume-button" onClick={onNextResume}>
                            →
                        </button>
                    )}
                </span>
            </div>
        </div>
    );
}

export default ResumeEvaluater;
