import React, { memo } from "react";
import RouterLink from '@/shared/components/RouterLink'
import { highLightCaseInsent } from "../../../../shared/utils/highLighted";
const Task=({ tasks, toggleTask, deleteTask,  valueSearch, XbtnIcon })=>{

 return tasks.map(liEl => {
 




    const highLightedTitle =  highLightCaseInsent(liEl.title, valueSearch)

return(
                <li key={liEl.id}  className="Task"> 
          <div className="Task_left">
          <label className="checkbox">
        <input type="checkbox"  className={`Task_checkbox `} checked={liEl.completed}onChange={()=>{
          toggleTask(liEl.id)
          
        }}  />
        <span ></span>
          </label>
          
        {/* <p  className={`Task_Txt ${liEl.completed ? "Task_TxtActive" : ''}`}>{liEl.title }</p> */}
 <RouterLink
  to={`task/${liEl.id}`}
  className={`Task_Txt ${liEl.completed ? "Task_TxtActive" : ""}`}
>
  {/* {liEl.title}  */}
  <span dangerouslySetInnerHTML={{__html: highLightedTitle}}></span>
</RouterLink>
          </div>
        <button className='Task_deleteBtn' onClick={() => deleteTask(liEl.id)}>
          <img src={XbtnIcon} alt="Кнопка X для удаления Таска" />
        </button>
        </li>
)


 })

}

  




export default memo(Task)
