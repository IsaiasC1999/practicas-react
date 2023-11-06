import "./Form.css"
import { useState } from "react";
import dayjs from "dayjs";
import { Button, Input} from "@nextui-org/react";

let nun = 0;

function Form({ setListTask, listTask }) {
    const [conten, setConten] = useState('');

    function Onsubmit(e) {
        
        e.preventDefault();
        setListTask([...listTask, { id: nun++, taskText: conten, state: false ,  taskDate: dayjs()}])
        setConten('')
        console.log("gola");    }

    return (

        <form className="form" action="">
            {/* <input className="form__caja" type="text" required value={conten} onChange={(e) => { setConten(e.target.value); }} placeholder="Ingrese la tarea" /> */}
            <Input type="text" className="input-next" placeholder="Ingrese su tarea por favor" required  value={conten} label="Tarea"  onChange={(e) => {setConten(e.target.value);console.log(e.target.value) }} />
            <Button className="btn-nextUI" onClick={Onsubmit} color="primary">Guardar</Button>
         </form>   
    );
}

export default Form;