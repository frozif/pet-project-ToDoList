const   STORAGE_KEY = 'tasks'

const read = () =>{
try{
return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}
catch (error){
return []
}
}

const write = (tasks)=>{
localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

const delay = (ms= 150)=>{
return new Promise((resolve)=>setTimeout(resolve, ms))
}


const localAPI = {
  getAll: async() => {
     await delay 

  return  read()
  },

add: async(title) => {
await delay()
 
 const newTask = {
  title,
  id: crypto?.randomUUID() ?? Date.now().toString(),
  completed: false
 }

 write([...read(), newTask])

 return newTask
},


 getById: async(id) => {
await delay()

  return read()
  .find((task) => task.id === id) ??  null
},


  delete: async(id)=>{
 await delay()

     const tasks = read().filter((task)=>  task.id  !== id)

write(tasks)

    },


 deleteAll: async () => {
  await delay()
  write([])
},

toggle: async (id) => {
  await delay()

  const tasks = read().map(task =>
    String(task.id) === String(id)
      ? { ...task, completed: !task.completed }
      : task
  )

  write(tasks)

  return tasks.find(task => String(task.id) === String(id))
},
}

export default localAPI