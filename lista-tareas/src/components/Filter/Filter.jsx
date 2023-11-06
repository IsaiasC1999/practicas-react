// import { FILTER_DATE, FILTER_OPTIONS } from "../Const/Filter";
import { useState } from "react";
import "./Filter.css"
import { Button } from "@nextui-org/react";

function Filter({ filterComplete, filterPending, filterAll, setDate }) {

    // const [dateInput, setDateInput] = useState(null);

    function onSubmitFormFilter(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setDate({
            fromDate: formJson.fromDate,
            untilDate: formJson.untilDate

        })
    }

    return (
        <div className="filter">
            <ul className="filter__list">
                <li className="filter__item"><Button color="success" onClick={() => filterComplete()} >Completadas</Button></li>
                <li className="filter__item"><Button color="warning" onClick={() => filterPending()} >Pendientes</Button></li>
                <li className="filter__item"><Button color="primary" onClick={() => filterAll()}>Todas</Button></li>
            </ul>

            <ul className="filter__list">
                <form onSubmit={onSubmitFormFilter}>

                    <input name="fromDate" type="date" />
                    <input name="untilDate" type="date" />
                    <button>Buscar</button>
                </form>
            </ul>
        </div >
    );
}

export default Filter;