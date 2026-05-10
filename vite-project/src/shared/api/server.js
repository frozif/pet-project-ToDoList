const URL ='http://localhost:3001/tasks'

const headers = { "Content-Type": "application/json" }



const serverApi = {
getAll: () => fetch(URL).then(r => r.json()),
add: (title) => {
  return fetch(URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ title, completed: false })
  }).then(r => r.json());
},

 getById: (id) => {
  return fetch(`${URL}/${id}`)
  .then((response)=> response.json())
},

  delete: (id)=>{
    return(
          fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })
    ).then(res => res.json())
  },
  deleteAll: (tasks)=>{
    return(
            Promise.all(
   tasks.map((task)=>{
    return(
serverApi.delete(task.id)
)
   })
      )
    )
  },
toggle: (id, taskToUpdate) => {
  return fetch(`${URL}/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ ...taskToUpdate, completed: !taskToUpdate.completed }),
  }).then(r => r.json())
},
}


export  default serverApi