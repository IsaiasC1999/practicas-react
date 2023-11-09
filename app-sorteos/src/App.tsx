
import { useState } from 'react';
import './App.css'
import FormPerson from './components/FormPerson'

interface Partipantes {
  id: number,
  name: string,

}


function App() {

  // const [participantes, setParticipantes] = useState<Partipantes[]>();

  // function AddParticipante(NewParticipante:Partipantes) {
  //   setParticipantes([...participantes,])
  // }

  return (
    <div>
      <h4>Sorteos Ya</h4>
      <div className='app-sorteos'>
        <FormPerson />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, unde? Sit quis unde hic repudiandae maxime laborum nemo at reprehenderit reiciendis modi, ab delectus, consectetur dolor excepturi soluta commodi tempora!
        </p>
      </div>
    </div>
  )
}

export default App
