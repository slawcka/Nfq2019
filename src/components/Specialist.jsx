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
        return <div className="specialist__queue">
            <h2 className="mb-3">Šiuo metu aptarnaujamas: {state.activeSpec}</h2>
            {(currentClientNumber > 0) && <p className="mb-3">aptarnaujamas numeris: {currentClientNumber}</p>}
            {(currentQueue < 1) ? <p>eilėje nėra klientų</p> : <button className="btn" onClick={deleteClient}>aptarnauta</button>}
        </div>
    }
    return (
        <div className="specialist flex">
            <div className="header flex center">
                <h1>Specialisto puslapis</h1>
            </div>
            <section className="specialist__panel">
                <button className="btn specialist__btn" onClick={changeSpec} data-specialist="spec1">aptarnauti <br/>JS</button>
                <button className="btn specialist__btn" onClick={changeSpec} data-specialist="spec2">aptarnauti <br/>PhP</button>
                <button className="btn specialist__btn" onClick={changeSpec} data-specialist="spec3">aptarnauti <br/>Swift</button>
            </section>
            {(state.activeSpec === '') ? <p>nepasirinktas specialistas</p> : showClient()}
        </div>
    );
};

export default Specialist;

