import './Task.css'

function Task({content,deleteTask,id}) {



  return (
    <article className="task-item">
         
      <p className="task-item__text">{content} {}</p>
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