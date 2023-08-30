import Task from "../task/Task";

function ListOfTask({ listTask,completeTask,deleteTask,filter}) {

    return (
        <>
            {
                listTask.map((ele) => <Task
                    key={ele.id}
                    id={ele.id}
                    content={ele.taskText}
                    state={ele.state}
                    completeTask={completeTask}
                    deleteTask={deleteTask} />)
            }
        </>
    );
}

export default ListOfTask;