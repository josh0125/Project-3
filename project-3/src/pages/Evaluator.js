import React, { useState, useCallback, useEffect } from "react";
import CheckboxSection from "../sections/CheckboxSection.js";
import Constants from "../Constants.js";
import ResumeControls from "./../components/ResumeControls.js";
import ResumeEvaluator from "../components/ResumeEvaluator.js";
import StatusSection from "../sections/StatusSection.js";
import postData from "../api/postData.js";
import updateData from "../api/updateData.js";
import "./Evaluator.css";

function highlightPattern(text, pattern) {
    return text.replace(pattern, (value) => `<mark>${value}</mark>`);
}

function Evaluator() {
    const [applicants, setApplicants] = useState([]);
    const [newCheck, setNewCheck] = useState({
        name: "",
    });
    const [checkedValues, setCheckedValues] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [resumeIndex, setResumeIndex] = useState(0);
    const [status, setStatus] = useState();

    useEffect(() => {
        fetch("http://localhost:8000/applicants")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((applicants) => {
                setApplicants(applicants);
                setIsPending(false);
                if (!status) {
                    setStatus(applicants[0].status);
                }
            })
            .catch((error) => {
                console.error("Error fetching applicants: ", error);
            });
    }, [status, resumeIndex]);

    const textRenderer = useCallback(
        (textItem) => {
            let newText = textItem.str;
            checkedValues.forEach((value) => {
                newText = highlightPattern(newText, value);
            });
            return newText;
        },
        [checkedValues]
    );

    async function handleCheckboxAdd(event) {
        event.preventDefault();

        if (newCheck.name === "") {
            return;
        }

        await postData("http://localhost:8000/checks", newCheck);

        setNewCheck({
            name: "",
        });
    }

    function handleCheckChange(e) {
        setNewCheck({
            name: e.target.value,
        });
    }

    function handleCheckboxChange(event) {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedValues([...checkedValues, value]);
        } else {
            setCheckedValues(checkedValues.filter((item) => item !== value));
        }
    }

    async function handleStatusChange(event) {
        const newStatus = event.target.innerText;

        const newData = {
            name: applicants[resumeIndex].name,
            email: applicants[resumeIndex].email,
            resume: applicants[resumeIndex].resume,
            status: newStatus !== "Accept" && newStatus !== "Reject" ? "Pending" : newStatus,
        };

        await updateData("http://localhost:8000/applicants/", resumeIndex + 1, newData);

        setStatus(newStatus !== "Accept" && newStatus !== "Reject" ? "Pending" : newStatus);
    }

    function onPreviousResume() {
        setResumeIndex((prevIndex) => (prevIndex - 1) % applicants.length);
        setStatus(applicants[resumeIndex - 1].status);
    }

    function onNextResume() {
        setResumeIndex((prevIndex) => (prevIndex + 1) % applicants.length);
        setStatus(
            applicants[resumeIndex + 1].status ? applicants[resumeIndex + 1].status : "Pending"
        );
    }

    return (
        <>
            <div className="resume-container">
                <aside className="sidebar">
                    <CheckboxSection
                        handleNewCheckChange={handleCheckChange}
                        handleCheckboxChange={handleCheckboxChange}
                        handleCheckboxAdd={handleCheckboxAdd}
                        newCheck={newCheck}
                    />
                </aside>
                <div className="content-container">
                    {isPending ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <div className="pdf-section">
                                <ResumeControls
                                    buttons={Constants.buttons}
                                    handleStatusChange={handleStatusChange}
                                    status={status ? status : ""}
                                />
                                <ResumeEvaluator
                                    file={applicants[resumeIndex].resume}
                                    textRenderer={textRenderer}
                                    resumeIndex={resumeIndex}
                                    onPreviousResume={onPreviousResume}
                                    onNextResume={onNextResume}
                                    resumeFileLength={applicants.length - 1}
                                />
                            </div>
                            <StatusSection data={applicants} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Evaluator;
