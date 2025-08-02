import { useForm, yupResolver } from "@mantine/form";
import { taskValidationSchema } from "../../validation/taskValidation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  employeeManagerListApi,
  employeesListApi,
} from "../../api/employees/employees";
import { useMemo } from "react";
import { createTaskApi, updateTaskApi } from "../../api/task/task";

const useAddTask = (
  handleClose?: VoidFunction,
  viewData?: TTaskListResponse
) => {
  const queryClient = useQueryClient();
  const form = useForm({
    initialValues: {
      title: viewData?.title ?? "",
      description: viewData?.description ?? "",
      deadline: viewData?.deadline ?? null,
      assignedTo:
        viewData?.assignedTo?.length! > 0
          ? viewData?.assignedTo?.map((item) => item?._id)
          : [],
      note: viewData?.notes ?? "",
      status: viewData?.status ?? "",
      assignedBy: viewData?.assignedBy?._id ?? "",
    },
    validate: yupResolver(taskValidationSchema),
  });
  const { data, isLoading } = useQuery({
    queryKey: ["manager"],
    queryFn: () => employeesListApi({ type: "manager" }),
  });
  const { data: employeesData, isLoading: employeesLoading } = useQuery({
    queryKey: ["employees", form?.values?.assignedBy],
    queryFn: () => employeeManagerListApi(form?.values?.assignedBy),
    enabled: form?.values?.assignedBy ? true : false,
  });

  const employeesList = useMemo(() => {
    return employeesData?.data?.map((item) => {
      return { value: item?.id, label: item?.name };
    });
  }, [employeesData, employeesLoading]);
  const managerList = useMemo(() => {
    return data?.data?.map((item) => {
      return { value: item?.id, label: item?.name };
    });
  }, [data, isLoading]);
  const { mutate, isPending } = useMutation({
    mutationFn: createTaskApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["taskList"] });
      handleClose && handleClose();
    },
  });
  const { mutate:updateMutate, isPending:updatePending } = useMutation({
    mutationFn: updateTaskApi,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["taskList"] });
      handleClose && handleClose();
    },
  });
  const handleSubmit = form.onSubmit((data) => {
    viewData?._id ?updateMutate({...data,id:viewData?._id }):
    mutate(data);
  });
  return { form, handleSubmit, managerList, isPending, employeesList };
};
export default useAddTask;
