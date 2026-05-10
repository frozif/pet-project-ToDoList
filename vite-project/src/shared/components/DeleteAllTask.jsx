import { useCallback } from "react";
import taskApi from  '../api/tasksApi'   
const DeleteAllTask = ({hasTask, setTasks, tasks})=>{
const deleteAll = useCallback(()=>{
     if (!hasTask) return;
     const confirm =  window.confirm("Вы точно хотите удалить все задачи?");
          if (confirm === true) {
  const snapshot = tasks;

  taskApi.deleteAll(tasks)
    .then(() => setTasks([]))
    .catch(() => setTasks(snapshot));

     }
}, [hasTask, setTasks, tasks])
return(
         <button className='DeleteAll_TaskButton' type='button' onClick={deleteAll}>Delete All</button>

)
}
export default DeleteAllTask