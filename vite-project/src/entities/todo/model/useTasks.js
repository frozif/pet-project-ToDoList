import { useState, useRef, useMemo, useEffect, useCallback, useReducer } from 'react'
import taskApi from '@/shared/api/tasksApi'

export const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [valueAdd, setValueAdd] = useState('')
    const valueAddRef= useRef(null)
    const [valueSearch, setValueSearch] = useState('')
    const [touched, setTouched] = useState(false);
const tasksRef = useRef(tasks);

const deleteTask=useCallback((id)=>{
const snapshot = tasksRef.current;
taskApi.delete(id)
  .then(() => setTasks(prev => prev.filter(t => t.id !== id)))
  .catch(() => setTasks(snapshot));
}, [])


useEffect(() => { tasksRef.current = tasks; }, [tasks]);

const toggleTask = useCallback((id) => {
  const snapshot = tasksRef.current;
  const taskToUpdate = snapshot.find(t => t.id === id);
  if (!taskToUpdate) return;

  const updated = snapshot.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );

taskApi.toggle(id, taskToUpdate)
  .then((updatedTask) => {
    setTasks(prev =>
  prev.map(t =>
    t.id === id ? { ...t, ...updatedTask } : t
  )
    );
  })
  .catch(() => setTasks(snapshot));  ;

  }, 
  
  []);


useEffect(()=>{
    valueAddRef.current?.focus() 


},[])


const filteredTasks = useMemo(()=>{
return ( tasks.filter(task =>
  (task.title || '')
    .toLowerCase()
    .includes(valueSearch.trim().toLowerCase())
) )
}, [valueSearch, tasks])
const hasTask = tasks.length >0

  return {
    tasks,
    setTasks,
    deleteTask,
    toggleTask,
    valueSearch,
    setValueSearch,
    filteredTasks,
    hasTask,
    valueAdd,
    setValueAdd,
    touched,
    setTouched,
    valueAddRef
  }
}