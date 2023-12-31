import * as yup from "yup"

export const loginSchema = yup.object().shape({
    
    email:yup.string().email().required("email is required"),
    password:yup.string().min(6).max(20).required("password is required"),
   
})