interface TEmployeesResponse{
    id:string
    name:string
    email:string
    role:string
    createdAt:string
}
interface TPage{
    data:TEmployeesResponse[]
    page:number
    limit:number
    total:number
    totalPages:number
}
interface TEmployeesParams{
    page?:number
    limit?:number
    search?:number
    type?:string
}
interface TAssignToEmployee{
    managerId:string
    emploiesId:string[] | undefined
}