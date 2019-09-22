import React from 'react';
import DisplayTab from './DisplayTab'
const Display = (props) => {
  const {state}=props;

    return (
        <div>
          <h1>Šiuo metu aptarnaujami:</h1> 
          <div>
           <DisplayTab state={state} spec="spec1" />
           <DisplayTab state={state} spec="spec2" />
           <DisplayTab state={state} spec="spec3" />
          </div>
        </div>
    );
};

export default Display;