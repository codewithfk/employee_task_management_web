import { useForm, yupResolver } from "@mantine/form";
import { loginValidationSchema } from "../../validation/loginValidation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { updateToken } from "../../redux/reducer/userReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../api/login/login";
const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state?.userReducer);
  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(loginValidationSchema),
  });
  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      if (response?.token) {
        dispatch(updateToken(response?.token));
        navigate("/", { replace: true });
      }
    },
  });
  const handleSubmit = form.onSubmit((data) => {
    mutate(data);
  });
  return { form, handleSubmit, isPending };
};
export default useLogin;
