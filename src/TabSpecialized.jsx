import React from "react";
import PropTypes from "prop-types";

const TabSpecialized = props => (
    <li className="nav-item">
        <button className={`nav-link${props.selected ? " active" : ""}`} onClick={props.onSelect}>
            {props.text}
        </button>
    </li>
);

TabSpecialized.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default TabSpecialized;
