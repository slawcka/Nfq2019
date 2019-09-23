import React from 'react';
import DisplayTab from './DisplayTab'
const Display = (props) => {
  const { state } = props;

  return (
    
      <section className="display flex">
        <div className="header flex center mb-5">
          <h1>Šiuo metu aptarnaujami:</h1>
        </div>
     
      <div className="display__columns">
        <DisplayTab state={state} spec="spec1" />
        <DisplayTab state={state} spec="spec2" />
        <DisplayTab state={state} spec="spec3" />
      </div>
      </section>
  );
};

export default Display;