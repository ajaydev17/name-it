import React from "react";
import "./NameCard.css";

const nameCheapUrl =
    "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = (props) => {
    return (
        <a
            className="card-link"
            href={`${nameCheapUrl}${props.name}`}
            target="_blank"
            rel="noreferrer"
        >
            <div className="result-card">
                <p className="result-name">{props.name}</p>
            </div>
        </a>
    );
};

export default NameCard;
