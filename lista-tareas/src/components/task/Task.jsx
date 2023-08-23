import './Task.css'

function Task({content,deleteTask,id,state,completeTask}) {



  return (
    <article className={`task-item ${state ? 'task-item--complete' :''}`}>
      <input className='task-item__state' defaultChecked={state} onChange={ ()=>completeTask(id)} type="checkbox" />   
      <p className="task-item__text">{content}</p>
      {/* <span className="task-item__date">
        {`${date.getDate()}/${date.getMonth()}`}
      </span> */}
      <button onClick={()=>deleteTask(id)} className='task-item__btn'>Borrar</button>
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