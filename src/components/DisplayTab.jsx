import React from 'react';

const DisplayTab = (props) => {
    const { state, spec } = props
    const icon = (spec === "spec1") ? "fa-js" : (spec === "spec2") ? "fa-php" : "fa-python"
    const specialistName= (spec === "spec1") ? "Javascript" : (spec === "spec2") ? "Php" : "Python"
    return (
        <div className="display__column">
            <div className="display__specialist">
            <h2><i className={"fab " + icon}></i>{specialistName}</h2>
            </div>
            <ul className="display__list">
                {state.data[0][props.spec].map(e => <li key={e.number}><p>{e.number}</p></li>)}
            </ul>
        </div>
    );
};

export default DisplayTab;