import * as yup from "yup"

export const adminSchema = yup.object().shape({
    name:yup.string().required("name is required"),
    email:yup.string().email().required("email is required"),
    password:yup.string().min(6).max(20).required("password is required"),
    contactNo:yup.string().required("contactNo is required"),
    profileImg:yup.string().required("profileImg is required"),
})