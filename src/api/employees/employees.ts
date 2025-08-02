import { delete_api, get_api, post_api } from "../root_api";

const employeesListApi=(params:TEmployeesParams):Promise<TPage>=>get_api('employees',{params})
const employeesDeleteApi=(data:{ id:string,close?:VoidFunction})=>delete_api(`employees/${data?.id}`)
const employeeManagerListApi=(id:string):Promise<{data:TEmployeesResponse[]}>=>get_api(`employees/${id}`)
const assignToManagerApi=(data:TAssignToEmployee)=>post_api('employees',data)
export{employeesListApi,employeesDeleteApi,employeeManagerListApi,assignToManagerApi}