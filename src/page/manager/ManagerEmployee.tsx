import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { employeeManagerListApi } from '../../api/employees/employees';
import CustomAvatarGroup from '../../components/customAvatarGroup/CustomAvatarGroup';
import { Loader } from '@mantine/core';
interface TManagerEmployee{
    id:string
}
function ManagerEmployee({id}:TManagerEmployee) {
    const { data:employeesData, isLoading:employeesLoading } = useQuery({
        queryKey: ["employees",id],
        queryFn:()=> employeeManagerListApi(id),
        enabled:id?true:false
      });
  return (
    <>
    {
 employeesLoading?<Loader/>:
 employeesData?.data?.length! > 0 ? <CustomAvatarGroup
     data={employeesData?.data?.map((ele) => ({
       src: "",
       name: ele?.name,
     }))}
   />:'Not Assign' 
    }
    </>
   
  )
}

export default ManagerEmployee