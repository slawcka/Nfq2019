import React from 'react';

const Client = (props) => {
    const {state}=props
    const showTime=()=>{
        
    }
    return (
        
  <div className="container">
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Iveskite savo numerį</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="numeris" />
  </div>
 
  <button onClick={showTime} type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
  
    );
};

export default Client;