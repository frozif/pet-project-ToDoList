import BASE_URL from "../constants"

const  RouterLink =({ to, children, ...rest })=>{


const handleClick = (event)=>{
  event.preventDefault()
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

return(
    <a href={`${BASE_URL}${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
)


}



export default RouterLink