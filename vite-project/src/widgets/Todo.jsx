// ------------
//  Jsx, Стейты

import DeleteAllTask from '@/shared/components/DeleteAllTask'
import Task from '@/entities/todo/ui/Tasks/Tasks'
import searchIcon from "@/shared/assets/icon/IconSearch.svg"
import XbtnIcon from "@/shared/assets/icon/XBtnIcon.svg"
import TodoSearch from '@/features/search-Task/TodoSearch'
import AddTask from '@/features/add-Task/AddTask'
import { MyContext } from '@/entities/todo/model/context'
import taskApi from '@/shared/api/tasksApi'
import { useTasks } from '@/entities/todo/model/useTasks'
// ------


const Todo =()=>{
   const { 
      tasks,
  deleteTask,
  toggleTask,
  valueSearch,
  setValueSearch,
  filteredTasks,
  valueAdd,
setValueAdd,
hasTask,
touched,
setTouched,
setTasks,
  valueAddRef
    } = useTasks()


    
 return(
<MyContext.Provider value={useTasks}>
   <div className='ToDo_list'>
  <h1>To Do List</h1>
   <div className='ToDo_main'>
    <AddTask 
     setValueAdd={setValueAdd}
     setTasks={setTasks}
     valueAdd={valueAdd}
     valueAddRef={valueAddRef}
     hasTask={hasTask}
     touched={touched}
     setTouched={setTouched}
    />

    <TodoSearch  
     valueSearch={valueSearch}
     setValueSearch={setValueSearch}
     searchIcon={searchIcon}
    />
    <div className="Task_info">
     <p className="Task_score">Total Tasks: <span>{tasks.length}</span></p>
     <DeleteAllTask  
     setTasks={setTasks}
     hasTask={hasTask}
     tasks={tasks}
     />
    </div>
    <div className="Tasks">
      <ul className="Tasks_main">
        {!hasTask ? (
  <li>{"Пусто :("}</li>
) : filteredTasks.length === 0 ? (
    <li>Ничего не найдено :(</li>
  ) : (<Task
    tasks={filteredTasks}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
    valueSearch={valueSearch}
    XbtnIcon={XbtnIcon}
  />)}

      </ul>
    </div>
   </div>
  </div>
</MyContext.Provider>
  )

}


export default Todo