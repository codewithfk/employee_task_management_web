import { useForm, yupResolver } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerApi } from "../../api/login/login";
import { registerValidationSchema } from "../../validation/loginValidation";
import { successNotification } from "../../utils/notification";

const useAddManager=(viewData?:TEmployeesResponse,
    handleClose?:VoidFunction)=>{
    const queryClient = useQueryClient()
    const form = useForm({
        initialValues: {
            name: viewData?.name ??'',
          email:viewData?.email ?? "",
          password: "",
          role:'manager'
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
export default useAddManager