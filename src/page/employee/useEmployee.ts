import { employeesListApi } from "../../api/employees/employees";
import usePaginatedQuery from "../../hook/usePaginatedQuery";

const useEmployee=()=>{
    const employeesListQuery = usePaginatedQuery({
        queryKeyBase: "employeesList",
        queryFn: employeesListApi,
      });
      return{...employeesListQuery}
}
export default useEmployee