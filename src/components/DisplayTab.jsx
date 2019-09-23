import React from 'react';

const DisplayTab = (props) => {

    const { state, spec } = props;
    const icon = (spec === "spec1") ? "fa-js" : (spec === "spec2") ? "fa-php" : "fa-python";
    const specialistName = (spec === "spec1") ? "Javascript" : (spec === "spec2") ? "Php" : "Python";

    const calculateAverageTime = (spec,e) => {

        let totalTime = 0;
        let totalServedClients = 0
        state.SpecSessionTime[spec].forEach(e => {
            totalTime += e
            totalServedClients++
        })
        if (state.data[0][props.spec].indexOf(e) === 0){
            return
        } else {
            return <span>laukti: {totalTime / totalServedClients * state.data[0][props.spec].indexOf(e)} minučių</span> 
        }
    }
    return (
        <div className="display__column">
            <div className="display__specialist">
                <h2><i className={"fab " + icon}></i>{specialistName}</h2>
            </div>
            <ul className="display__list">
                {state.data[0][props.spec].map(e =>
                    <li key={e.number}><p>{e.number} 
                        {calculateAverageTime(spec,e)}</p>
                    </li>)}
            </ul>
        </div>
    );
};

export default DisplayTab;