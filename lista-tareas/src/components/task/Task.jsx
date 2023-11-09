import { Button, Checkbox } from '@nextui-org/react';
import './Task.css'

function Task({content,deleteTask,id,state,completeTask,taskDate}) {



  return (
    <article className={`task-item ${state ? 'task-item--complete' :''}`}>
      <Checkbox className='task-item__state' defaultSelected={state} onChange={ ()=>completeTask(id)} type="checkbox" />   
      <p className={`task-item__text ${state?'task-item__text--complete': ''}`}>{content}</p>
       <span>{taskDate.format('HH:mm DD/MM ')}</span>
      <Button onClick={()=>deleteTask(id)} color='danger' className='task-item__btn'>Borrar</Button>
    </article>
  );
}


// //   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
export default Task;