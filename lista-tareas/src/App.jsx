import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { listTask as initialValue } from './Mocks/TaskMock'
import ListOfTask from './components/ListOfTask/ListOfTask';
import { FILTER_OPTIONS } from './components/Const/Filter';
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween)
// import customParseFormat from 'dayjs/plugin/customParseFormat'
 
function App() {

  const [listTask, setListTask] = useState(initialValue);
  const [filterTask, setFilterTask] = useState({ filter: FILTER_OPTIONS.ALL });
  const [date, setDate] = useState({
    fromDate : "",
    untilDate:""

  });

 

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



//#region FILTROS POR ESTADO

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

//#endregion 


  let listRender =
    (filterTask.filter === FILTER_OPTIONS.PENDING) ? listTask.filter(ele => ele.state === false) :
    (filterTask.filter === FILTER_OPTIONS.COMPLETE) ? listTask.filter(ele => {
        return (ele.state === true)
      }) : listTask
             
   
      listRender = date.fromDate != "" && date.untilDate != "" ? listRender.filter(ele =>{
        return dayjs(ele.taskDate).isBetween(date.fromDate,date.untilDate,'day',[])
      })  : listRender


        // console.log(dayjs('2018-04-13 19:18').isBetween(date.fromDate,date.untilDate,'day',[]));

  //  function filterDate(listTask) {
      
  //     return listTask.filter((ele)=>{
  //       return()
  //     })

  //  }  
    
  // const newFilteredNotifications = Datos.filter(notification => {
  //   return dayjs(notification.date_notification).isBetween(filters.desde, filters.hasta, 'day', '[]');
  // });



  return (
    <>
      <h2 className='title-app'>Listado de Tareas</h2>
      <Filter filterComplete={filterComplete} setDate={setDate} filterAll={filterAll} filterPending={filterPending} />
      <div className='conteiner'>

        <Form setListTask={setListTask} listTask={listTask} />

        <ListOfTask filter={filterTask} listTask={listRender} completeTask={onCompletetask}
          deleteTask={deleteTask} />

      </div>
    </>
  )
}

export default App
