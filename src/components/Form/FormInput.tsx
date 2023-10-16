"use client";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
type IInput = {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeHolder?: string;
  validation?: object;
  label?: string;
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeHolder,
  validation,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessages = getErrorMessageByPropertyName(errors, name);
  console.log("m", errorMessages);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              {...field}
              type={type}
              size={size}
              placeholder={placeHolder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size}
              placeholder={placeHolder}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small className="text-red-500">{errorMessages}</small>
    </>
  );
};

export default FormInput;
