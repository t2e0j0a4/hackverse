import React from 'react';
import "./RegisterSection.css";

const RegisterSection = ({firstSectionInfo, secondSectionInfo, thirdSectionInfo}) => {

    return (
        <div className="section__progress">
            <span className={`progress__bar ${firstSectionInfo && 'make__progress'}`}></span>
            <span className={`progress__bar ${secondSectionInfo && 'make__progress'}`}></span>
            <span className={`progress__bar ${thirdSectionInfo && 'make__progress'}`}></span>
        </div>
    )
}

export default RegisterSection