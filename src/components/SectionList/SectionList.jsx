import React from "react";
import PropTypes from 'prop-types';
import { sectionList, vertLine } from "./_sectionList.scss";
import Section from "components/Section/Section.jsx";
import sections from "data/experience.js";

const SectionList = () => {
    return (
        <div className={sectionList}>
            {sections.map(s => <Section key={s.title} {...s} />)}
            <div className={vertLine}></div>
        </div>
    );
};

SectionList.prototype = {
    sections: PropTypes.array
}

SectionList.defaultProps = {
    sections: []
};


export default SectionList;