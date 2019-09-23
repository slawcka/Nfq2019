import React from 'react';
import { useEffect, useState } from "react";
const Admin = (props) => {

    const { state, addClient, toLocalStorage, sessionTimes } = props;
    const [number] = useState(state.registeringNumber);

    const flashTicket = () => {
        if (number === '') {
            return
        } else {
            const ticket = document.querySelector('.ticket');
            ticket.classList.toggle('visible');
            setTimeout(() => {
                ticket.classList.toggle('visible')
            }, 1000);
        }
    }

    useEffect(() => {
        flashTicket()
    }, [number]);

    return (
        <section className="admin flex">
            <div className="header flex center mb-5">
                <h1>Registruotis</h1>
                <button className="btn admin__save" onClick={toLocalStorage}><i className="fas fa-save"></i>save</button>
                <button className="btn admin__save" onClick={sessionTimes}><i className="fas fa-save"></i>save times</button>
            </div>
            <button className="btn-xl mb-5" onClick={addClient} data-specialist="spec1">Javascript</button>
            <button className="btn-xl mb-5" onClick={addClient} data-specialist="spec2">Php</button>
            <button className="btn-xl mb-5" onClick={addClient} data-specialist="spec3">Python</button>
            <div className="ticket"><p>{(state.registeringNumber === '') ? 'nepasirinktas' : `kliento numeris: ${state.registeringNumber}`}</p></div>
        </section>
    );
};

export default Admin;