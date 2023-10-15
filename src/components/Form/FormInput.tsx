"use client";
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
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            size={size}
            placeholder={placeHolder}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default FormInput;
