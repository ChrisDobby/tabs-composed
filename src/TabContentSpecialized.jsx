import React from "react";
import PropTypes from "prop-types";

const TabContentSpecialized = props => (
    <>
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
    </>
);

TabContentSpecialized.propTypes = {
    header: PropTypes.string.isRequired,
    paragraph: PropTypes.string,
};

export default TabContentSpecialized;
