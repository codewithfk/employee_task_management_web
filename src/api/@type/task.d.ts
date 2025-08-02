interface TTaskListResponse{
    title:string,
    description:string
    assignedTo:TUser[]
    _id:string
    assignedBy:TUser
    type:string
    status:string
    deadline:string
    notes:string
    submittedAt:string
    createdAt:string
}
interface TUser{
    _id:string
    name:string
    email:string 
}
interface TTaskPayload{
    title:string,
    description:string
    assignedTo:string [] | undefined
    deadline:string | null
    notes?:string
    status?:string
    assignedBy:string
    id?:string
}
interface TTaskPage{
    data:TTaskListResponse[]
    page:number
    limit:number
    total:number
    totalPages:number
}
interface TTaskListParams{
    page?:number
    limit?:number
    search?:string
    status?:string
    id?:string
}