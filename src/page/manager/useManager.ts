import { employeesListApi } from "../../api/employees/employees";
import usePaginatedQuery from "../../hook/usePaginatedQuery";

const useManager=()=>{
    const employeesListQuery = usePaginatedQuery({
        queryKeyBase: "employeesList",
        queryFn: employeesListApi,
        type:'manager'
      });
      return{...employeesListQuery}
}
export default useManager