import React from "react";
import PropTypes from "prop-types";

const TabContent = props => (
    <>
        <h2>{props.header}</h2>
        {props.children}
    </>
);

TabContent.propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default TabContent;
