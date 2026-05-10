import localAPI from "./local";
import serverApi from "./server";


const isLocal =import.meta.env.VITE_STATIC_BACKEND === 'true'


const taskApi =  isLocal ? localAPI :serverApi


export default taskApi