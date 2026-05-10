import { useEffect, useState } from "react";
import Todo from "@/widgets/Todo.jsx"
import taskApi from "@/shared/api/tasksApi.js"
const TaskPagee =(props)=>{
const {params} = props

const TaskId = params?.id
const [task, setTask] = useState(null)
const  [isloading, setIsLoading] = useState(true)
const  [hasError, setHasError] = useState(false)

useEffect(() => {
  setIsLoading(true);
  setHasError(false);

  taskApi.getById(TaskId)
    .then((taskData) => {
      setTask(taskData);
      setHasError(false);
    })
    .catch(() => {
      setHasError(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
}, [TaskId]);



if (isloading) return <p>Loading...</p>;
if (hasError) return <p>Error loading task</p>;
if (!task) return <p>Task not found</p>;
return (
<>
<h1>{task?.title}</h1>
{task?.completed ? 'задача выполнена' : 'задача не выполнена'}
</>
)
}


export default TaskPagee