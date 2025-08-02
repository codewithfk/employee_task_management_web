import { delete_api, get_api, post_api, put_api } from "../root_api";

const getTaskListApi=(params:TTaskListParams):Promise<TTaskPage>=>get_api('tasks',{params})
const createTaskApi=(data:TTaskPayload)=>post_api('tasks',data)
const deleteTaskApi=(data: {id:string,close?:VoidFunction})=>delete_api(`tasks/${data?.id}`)
const updateTaskApi=(data:TTaskPayload)=>put_api(`tasks/${data.id}`,data)
export{getTaskListApi,createTaskApi,deleteTaskApi,updateTaskApi}