import React from "react";

const Specialist = (props) => {

    const { state, changeSpec, deleteClient } = props
    let currentClientNumber, currentQueue
    const showClient = (e) => {

        if (state.data[0][state.activeSpec].length === 0) {
            currentClientNumber = 0
        } else {
            currentClientNumber = state.data[0][state.activeSpec][0].number
        }

        currentQueue = state.data[0][state.activeSpec].length
        return <div>
            <h2>siuo metu aptarnaujamas: {state.activeSpec}</h2>
            <p>aptarnaujamas numeris: {currentClientNumber}</p>
            {(currentQueue < 1) ? <p>no clients in the queue</p> : <button onClick={deleteClient}>aptarnauta</button>}
        </div>
    }
    return (
        <div>
            <h1>pasirinkite, kuriuos klientus aptarnauti</h1>
            <button onClick={changeSpec} data-specialist="spec1">aptarnauti 1</button>
            <button onClick={changeSpec} data-specialist="spec2">aptarnauti 2</button>
            <button onClick={changeSpec} data-specialist="spec3">aptarnauti 3</button>
            {(state.activeSpec === '') ? <p>neaptarnaujama</p> : showClient()}
        </div>
    );
};

export default Specialist;

