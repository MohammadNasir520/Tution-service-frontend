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
};

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeHolder,
  validation,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="ReactDatepicker"
      render={({ field: { onChange, onBlur, value, ref } }) => <Input></Input>}
    />
  );
};

export default FormInput;
