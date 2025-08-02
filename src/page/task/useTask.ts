import { useState } from "react";
import { getTaskListApi } from "../../api/task/task";
import usePaginatedQuery from "../../hook/usePaginatedQuery";
import { useDebouncedState } from "@mantine/hooks";

const  useTask=()=>{
  const [status,setStatus] = useState('')
  const [page,setPaginated] = useState(1)
  const [search, setTaskSearch] = useDebouncedState('', 500);
    const taskListQuery = usePaginatedQuery({
        queryKeyBase: "taskList",
        queryFn:()=> getTaskListApi({status,page,search}),
        params:status,
        initialPage:page,
        initialSearch:search
      });
      
      return{...taskListQuery,setStatus,setPaginated,setTaskSearch}
}
export default useTask