import { useMemo } from "react";
import {
  assignToManagerApi,
  employeeManagerListApi,
  employeesListApi,
} from "../../api/employees/employees";
import usePaginatedQuery from "../../hook/usePaginatedQuery";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useAssignEmployee = (
  handleClose?: VoidFunction,
  selectData?: TEmployeesResponse
) => {
  const queryClient = useQueryClient();
  const {
    query: { data, isLoading },
  } = usePaginatedQuery({
    queryKeyBase: "employeesList",
    queryFn: () => employeesListApi({ limit: 500 }),
  });
  const { data:employeesData, isLoading:employeesLoading } = useQuery({
    queryKey: ["employees",selectData?.id],
    queryFn:()=> employeeManagerListApi(selectData?.id!),
    enabled:selectData?.id?true:false
  });
  const employeesList = useMemo(() => {
    return data?.data?.map((item) => {
      return { value: item?.id, label: item?.name };
    });
  }, [data, isLoading]);
  const form = useForm({ initialValues: { emploiesId:employeesData?.data?.length!>0? employeesData?.data?.map(item=>item?.id):[] } });
  const { mutate, isPending } = useMutation({
    mutationFn: assignToManagerApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["employeesList"] });
      handleClose && handleClose();
    },
  });
  const handleSubmit = form.onSubmit((data) => {
    mutate({ managerId: selectData?.id!, emploiesId: data?.emploiesId });
  });

  return { employeesList, form, handleSubmit, isPending };
};
export default useAssignEmployee;
