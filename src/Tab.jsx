import React from "react";
import PropTypes from "prop-types";

const Tab = props => (
    <li className="nav-item">
        <button className={`nav-link${props.selected ? " active" : ""}`} onClick={props.onSelect}>
            {props.text}
            {props.children}
        </button>
    </li>
);

Tab.propTypes = {
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Tab;
