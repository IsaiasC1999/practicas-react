import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { listTask as initialValue } from './Mocks/TaskMock'
import ListOfTask from './components/ListOfTask/ListOfTask';
import { FILTER_OPTIONS } from './components/Const/Filter';
import dayjs from "dayjs"

function App() {

  const [listTask, setListTask] = useState(initialValue);
  // const [taskComplete, setTaskComplete] = useState([]);}
  const [filterTask, setFilterTask] = useState({ filter: FILTER_OPTIONS.ALL });

  let dia = dayjs(); 
  console.log(dia.day);

  function deleteTask(id) {
    console.log(id);
    setListTask(listTask.filter(ele =>
      ele.id !== id
    ))

  }

  function onCompletetask(id) {

    let list = listTask.map(ele => {
      if (ele.id === id) {
        return { ...ele, state: !ele.state }
      }
      return { ...ele }
    })
    console.log(list);
    setListTask(list)
  }

  function filterComplete() {
    setFilterTask(
      { filter: FILTER_OPTIONS.COMPLETE }
    )
  }

  function filterPending() {
    
      setFilterTask(
        { filter: FILTER_OPTIONS.PENDING }
      )
    
  }  

  function filterAll() {
      setFilterTask({filter: FILTER_OPTIONS.ALL})
  }


  const listComplete =
    (filterTask.filter === FILTER_OPTIONS.PENDING) ? listTask.filter(ele => ele.state === false) :
    (filterTask.filter === FILTER_OPTIONS.COMPLETE) ? listTask.filter(ele => {
        return (ele.state === true)
      }) : listTask
                         
      
    

  return (
    <>
      <h2 className='title-app'>Listado de Tareas</h2>
      <Filter filterComplete={filterComplete} filterAll={filterAll} filterPending={filterPending} />
      <div className='conteiner'>

        <Form setListTask={setListTask} listTask={listTask} />



        <ListOfTask filter={filterTask} listTask={listComplete} completeTask={onCompletetask}
          deleteTask={deleteTask} />

      </div>
    </>
  )
}

export default App
