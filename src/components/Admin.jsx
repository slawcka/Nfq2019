import React from 'react';

const Admin = (props) => {
    return (
        <div>
            <h1>registruotis pas speca</h1>
            <button onClick={props.addClient} data-specialistas="spec1">spec1</button>
            <button onClick={props.addClient} data-specialistas="spec2">spec2</button>
            <button onClick={props.addClient} data-specialistas="spec3">spec3</button>
            <button onClick={props.toLocalStorage}>išsaugoti duomenis</button>
        </div>
    );
};

export default Admin;