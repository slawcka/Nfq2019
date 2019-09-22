import React from 'react';

const Admin = (props) => {
    return (
        <div>
            <h1>registruotis pas speca</h1>
            <button onClick={props.addClient} data-specialist="spec1">spec1</button>
            <button onClick={props.addClient} data-specialist="spec2">spec2</button>
            <button onClick={props.addClient} data-specialist="spec3">spec3</button>
            <button onClick={props.toLocalStorage}>išsaugoti duomenis</button>
        </div>
    );
};

export default Admin;