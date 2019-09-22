import React from 'react';

const DisplayTab = (props) => {
    const {state,spec}=props
    return (
        <div>
             <h2>{spec}</h2>
            <ul>
              {state.data[0][props.spec].map(e=> <li key={e.number}>{e.number}</li>)}
            </ul>
        </div>
    );
};

export default DisplayTab;