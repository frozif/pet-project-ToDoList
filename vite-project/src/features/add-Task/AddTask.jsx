import taskApi from "@/shared/api/tasksApi";
const AddTask =({setValueAdd, setTasks, valueAdd, valueAddRef, hasTask, touched, setTouched})=>{
const addBtnTask =(event)=>{
           event.preventDefault()
  if (!valueAdd.trim()){
  setTouched(true);
       return;
  }


taskApi.add(valueAdd)
  .then((data) => {
    setTasks(tasks => [...tasks, data]);
  });

  setTouched(false);;
   setValueAdd('') 
       valueAddRef.current?.focus() 

}
  return(
        <form onSubmit={addBtnTask} className='ToDo_addTask  ToDo_input_Style'>
      <input  
      type="text"
        ref={valueAddRef}
       value={valueAdd}
        placeholder='New task title'
className={touched && !valueAdd.trim() ? 'error' : ''}
        onChange={(event)=>{
         setValueAdd( event.target.value)
           setTouched(true);
        }}
         />

      <button type='submit'
      disabled ={!valueAdd?.trim()}
      >Add</button>

        {touched && !valueAdd.trim() && (
  <span className="input__error">Заполните пустой Инпут</span>
)}
    </form>
  )
  
}

export  default  AddTask