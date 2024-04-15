import React, { useState, useEffect } from "react";
import "./FadeIn.css";

function FadeIn() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <>
            <div className="pulse">Pulse</div>
        </>
    );
}

export default FadeIn;
