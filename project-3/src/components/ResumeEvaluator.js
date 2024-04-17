import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./ResumeEvaluator.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// This is neeeded to handle the react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const maxWidth = 800;

function ResumeEvaluator({
    onLoadSuccess,
    file,
    numPages,
    textRenderer,
    resumeIndex,
    onPreviousResume,
    onNextResume,
    resumeFileLength,
}) {
    return (
        <div className="pdf-container">
            <span>
                {resumeIndex !== 0 && (
                    <button className="previous-resume-button" onClick={onPreviousResume}>
                        <img
                            src="/right-arrow.svg"
                            alt="Previous Resume"
                            width="10"
                            className="arrow"
                        />
                    </button>
                )}
            </span>

            <Document file={file} onLoadSuccess={onLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={maxWidth}
                        customTextRenderer={textRenderer}
                    />
                ))}
            </Document>

            <span>
                {resumeIndex !== resumeFileLength && (
                    <button className="next-resume-button" onClick={onNextResume}>
                        <img src="/right-arrow.svg" alt="Previous Resume" width="10" />
                    </button>
                )}
            </span>
        </div>
    );
}

export default ResumeEvaluator;
