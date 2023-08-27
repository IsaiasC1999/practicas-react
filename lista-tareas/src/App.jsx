import {useState } from 'react'
import './App.css'
import Task from './components/task/Task'
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { listTask as initialValue } from './Mocks/TaskMock'


function App() {

  const [listTask, setListTask] = useState(initialValue);
  // const [taskComplete, setTaskComplete] = useState([]);}
  const [filterTask, setFilterTask] = useState({filter : 'all'});

function deleteTask(id) {
      console.log(id);
      setListTask(listTask.filter(ele => 
             ele.id !== id 
        ))

}

  function filterComplete() {
    setListTask( listTask.filter(ele => {

      if(ele.state === true)
      {
        return {...ele}              
      }
      
        }))
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

  function filterPendientes(){
    setListTask( listTask.filter(ele => {

      if(ele.state === false)
      {
        return {...ele}              
      }
      
        }))
  }
 
  function filterAll(){
      setListTask( [...listTask] )
  }

  return (
    <>
      <h2 className='title-app'>Listado de Tareas</h2>
      <Filter FilterComplete={filterComplete}  filterPendientes={filterPendientes} filterAll={filterAll} />
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
