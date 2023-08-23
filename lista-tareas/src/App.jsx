import { useState } from 'react'
import './App.css'
import Task from './components/task/Task'
import Form from './components/Form/Form';


function App() {

  const [listTask, setListTask] = useState([]);

function deleteTask(id) {
      console.log(id);
      setListTask(listTask.filter(ele => 
             ele.id !== id 
        ))

}

  function onCompletetask(id) {

      let list = listTask.map(ele=>{ 
        if(ele.id===id)
        {    
             return { ...ele,state: !ele.state}    
        }
          return {...ele}
      } )
      console.log(list);
      setListTask(list)
  }

  return (
    <>
      <h2 className='title-app'>Listado de Tareas</h2>
      <div className='conteiner'>

        <Form setListTask={setListTask} listTask={listTask} />
        {
          listTask.map((ele) => <Task 
          key={ele.id}
          id={ele.id}
          content={ele.taskText} 
          state={ele.state} 
          completeTask={onCompletetask}
          deleteTask={deleteTask} />)
        }

      </div>
    </>
  )
}

export default App
