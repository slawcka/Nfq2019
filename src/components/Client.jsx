import React from 'react';

const Client = (props) => {
    const {state,calculateAverageTime,averageTimes}=props
    const showTime=()=>{
        
    }
    return (
        
  <div className="container">
    
  <button onClick={calculateAverageTime} type="submit" className="btn btn-primary">Submit</button>
  <button onClick={averageTimes}>filter</button>
  </div>
  
    );
};

export default Client;