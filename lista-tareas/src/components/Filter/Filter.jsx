import "./Filter.css"

function Filter({filterComplete,filterPending,filterAll}) {

   

    return (
        <div className="filter">
            <ul className="filter__list">
                <li className="filter__item"><button onClick={()=>filterComplete()} >Completadas</button></li>
                <li className="filter__item"><button onClick={()=>filterPending()} >Pendientes</button></li>
                <li className="filter__item"><button onClick={()=>filterAll()}>Todas</button></li>
            </ul>
        </div>
    );
}

export default Filter;