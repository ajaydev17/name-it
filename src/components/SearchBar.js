import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    return (
        <div className="search-container">
            <input
                onChange={props.onChangeHandler}
                placeholder="Type Keywords Here"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
