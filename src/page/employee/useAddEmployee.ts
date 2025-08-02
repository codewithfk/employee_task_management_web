import { useForm, yupResolver } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerValidationSchema } from "../../validation/loginValidation";
import { registerApi } from "../../api/login/login";
import { successNotification } from "../../utils/notification";

const useAddEmployee=(viewData?:TEmployeesResponse,
    handleClose?:VoidFunction)=>{
    const queryClient = useQueryClient()
    const form = useForm({
        initialValues: {
            name: viewData?.name ??'',
          email:viewData?.email ?? "",
          password: "",
          role:'employee'
        },
        validate: yupResolver(registerValidationSchema),
      });
      const { mutate, isPending } = useMutation({
        mutationFn: registerApi,
        onSuccess:async (response) => {
        await queryClient.invalidateQueries({queryKey:['employeesList']})
        successNotification({message:response?.message})
        handleClose && handleClose()
        },
      });
      const handleSubmit = form.onSubmit((data) => {
        mutate(data);
      });
      return { form, handleSubmit, isPending };
}
export default useAddEmployee