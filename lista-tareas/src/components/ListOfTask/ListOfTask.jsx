import Task from "../task/Task";

function ListOfTask({ listTask,completeTask,deleteTask,filter}) {

    return (
        <>
                <h2>{filter.filter}</h2>
            {
                listTask.map((ele) => <Task
                    key={ele.id}
                    id={ele.id}
                    content={ele.taskText}
                    state={ele.state}
                    completeTask={completeTask}
                    taskDate={ele.taskDate}    
                    deleteTask={deleteTask} />)
            }
        </>
    );
}

export default ListOfTask;