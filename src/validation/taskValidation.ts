import * as yup from "yup";
export const taskValidationSchema=yup.object().shape({
    title:yup.string().trim().required('Title is required'),
    description:yup.string().trim().required('Title is required'),
    deadline:yup.string().trim().required('Title is required'),
    assignedTo:yup.array()
    .of(yup.string())
    .min(1, 'Select at least 1 employees'),
})