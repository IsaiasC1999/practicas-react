import { FILTER_DATE, FILTER_OPTIONS } from "../Const/Filter";
import { useState } from "react";
import "./Filter.css"

function Filter({ filterComplete, filterPending, filterAll, setDate }) {

    // const [dateInput, setDateInput] = useState(null);

    function onSubmitFormFilter(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setDate({
            dateSelect : formJson.dateInput,
            filterDate: formJson.selectFilterDate

        })        
    }

    return (
        <div className="filter">
            <ul className="filter__list">
                <li className="filter__item"><button onClick={() => filterComplete()} >Completadas</button></li>
                <li className="filter__item"><button onClick={() => filterPending()} >Pendientes</button></li>
                <li className="filter__item"><button onClick={() => filterAll()}>Todas</button></li>
            </ul>

            <ul className="filter__list">
                <form onSubmit={onSubmitFormFilter}>

                    <input name="dateInput" type="date" />
                    <select name="selectFilterDate">
                        <option value={FILTER_DATE.ALL}>Todas</option>
                        <option value={FILTER_DATE.BEFORE}>Anteriores</option>
                        <option value={FILTER_DATE.AFTER}>Posteriores</option>
                        <option value={FILTER_DATE.NOW}>Exacta</option>
                    </select>
                    <button>Buscar</button>
                </form>
            </ul>
        </div >
    );
}

export default Filter;