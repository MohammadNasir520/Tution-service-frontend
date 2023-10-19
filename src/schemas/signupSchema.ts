import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  profileImg: yup.string().required("profileImg is required"),
  contactNo: yup.string().required("contactNo is required"),
  name: yup.string().required("name is required"),
  password: yup.string().min(6).max(20).required("password is required"),
});
