import "./Filter.css"

function Filter({FilterComplete ,filterPendientes, filterAll}) {
    return ( 
        <div className="filter">
            <ul className="filter__list">
                <li className="filter__item"><button onClick={()=> FilterComplete()} >Completadas</button></li>
                <li className="filter__item"><button onClick={()=> filterPendientes()}>Pendientes</button></li>
                <li className="filter__item"><button onClick={()=>filterAll()}>Todas</button></li>
            </ul>
        </div>
     );
}

export default Filter;