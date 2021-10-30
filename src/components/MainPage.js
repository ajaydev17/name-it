import React, { useState } from "react";
import "./MainPage.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultContainer from "./ResultContainer";

const names = require("@rstacruz/startup-name-generator");

const MainPage = (props) => {
    const [headerExpanded, setHeaderExpanded] = useState(true);
    const [nameGenerated, setNameGenerated] = useState([]);

    const inputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setHeaderExpanded(false);
            setNameGenerated(names(event.target.value));
        } else {
            setHeaderExpanded(true);
            setNameGenerated([]);
        }
    };

    return (
        <div>
            <Header headerExpanded={headerExpanded} />
            <SearchBar onChangeHandler={inputChangeHandler} />
            <ResultContainer nameGenerated={nameGenerated} />
        </div>
    );
};

export default MainPage;
