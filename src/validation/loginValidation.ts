import * as yup from "yup";
export const loginValidationSchema=yup.object().shape({
    email:yup
    .string()
    .trim()
    .email("Please enter valid email")
    .required("Email address is required"),
    password: yup
    .string()
    .trim()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
})
export const registerValidationSchema=yup.object().shape({
    name:yup.string().trim().required('Name is required'),
    email:yup
    .string()
    .trim()
    .email("Please enter valid email")
    .required("Email address is required"),
    password: yup
    .string()
    .trim()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
})