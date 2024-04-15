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

function ResumeEvaluater({ onLoadSuccess, file, numPages, textRenderer }) {
    function onFileChange(event) {
        file = event.target;
    }

    return (
        <div className="pdf-container">
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
            {/* <div className="Example__container__load">
                <label htmlFor="file">Load from file:</label>{" "}
                <input onChange={onFileChange} type="file" />
            </div> */}
        </div>
    );
}

export default ResumeEvaluater;
