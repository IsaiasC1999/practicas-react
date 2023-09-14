import "./Form.css"
import { useState } from "react";
import dayjs from "dayjs";

let nun = 0;

function Form({ setListTask, listTask }) {
    const [conten, setConten] = useState('');

    function Onsubmit(e) {
        let time = dayjs(new Date());
        e.preventDefault();
        setListTask([...listTask, { id: nun++, taskText: conten, state: false ,  taskDate: dayjs()}])
        setConten('')

    }

    return (

        <form className="form" onSubmit={Onsubmit} action="">
            <input className="form__caja" type="text" required value={conten} onChange={(e) => { setConten(e.target.value); console.log(e.target.value) }} placeholder="Ingrese la tarea" />
            <button className="form__btn" >Guardar</button>
        </form>

    );
}

export default Form;