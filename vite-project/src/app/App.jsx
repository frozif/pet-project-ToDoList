// Стили

import './App.css'
import './style/main.css'
import './style/font.css'
import './style/addTask.css'
import './style/searchTask.css'
import './style/scoreTask.css'
import './style/deleteAllTask.css'
import './style/tasks.css'
// // ------------
// //  Jsx, Стейты
import Todo from "@/widgets/Todo.jsx"
import Router from  './router/Router'
import TasksPage from '@/pages/TasksPage/TasksPage'
import TaskPagee from '@/pages/TaskPagee/TaskPagee'
// // ------
const routes ={
  '/': TasksPage,
  '/tasks/:id': TaskPagee,
  '*': ()=><div>404 Page Not found</div>,
}
function App(){

return (
  <Router routes={routes} />
)
}

export default App


