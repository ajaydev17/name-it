import React from "react";
import "./ResultContainer.css";
import NameCard from "./NameCard";

const ResultContainer = (props) => {
    const nameGeneratedJSX = props.nameGenerated.map((name) => {
        return <NameCard key={name} name={name} />;
    });

    return <div className="result-container">{nameGeneratedJSX}</div>;
};

export default ResultContainer;
