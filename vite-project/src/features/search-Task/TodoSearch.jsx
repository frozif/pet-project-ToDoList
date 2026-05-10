

const TodoSearch =({valueSearch, setValueSearch, searchIcon})=>{
return(
        <form  className="ToDo_searchTask ToDo_input_Style"       onSubmit={(event) => {
        event.preventDefault()
      }}> 
          
        <input 
         type="search"
          placeholder='Search task'
          value={valueSearch}
              onChange={(event)=>{
            setValueSearch(event.target.value)
      
          }}
                autoComplete="off" 
          />
        
        <img src={searchIcon} alt="search" aria-hidden="true"/>

      </form>
)
}

export default TodoSearch