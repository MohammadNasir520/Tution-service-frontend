import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  contactNo: yup.string().required("contactNo is required"),
  name: yup.string().required("name is required"),
  password: yup.string().min(6).max(20).required("password is required"),
});

export const parentsSignUpSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  profileImg: yup.string(),
  contactNo: yup.string().required("contactNo is required"),
  name: yup.string().required("name is required"),
  password: yup.string().min(6).max(20).required("password is required"),
  role: yup.string(),
});
export const tutorSignUpSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  contactNo: yup.string().required("contactNo is required"),
  name: yup.string().required("name is required"),
  password: yup.string().min(6).max(20).required("password is required"),
  role: yup.string(),
});
