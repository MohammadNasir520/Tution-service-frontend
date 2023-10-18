import * as yup from "yup"

export const serviceSchema = yup.object().shape({
    title:yup.string().required("title is required"),
    price:yup.number().required("price is required"),
    category:yup.string().required("category is required"),
    description:yup.string().required("description is required"),
    image:yup.string().required("image is required"),
})