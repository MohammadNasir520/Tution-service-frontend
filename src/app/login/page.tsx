import { type } from "os";
import React, { ReactElement, ReactNode } from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  submitHandler: SubmitHandler<any>;
  children: ReactNode | ReactElement;
} & FormConfig;

const Form = () => {
  const methods = useForm();
  const formConfig: FormConfig = {};

  const onSubmit = ({
    children,
    submitHandler,
    defaultValues,
  }: FormProps) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
};

export default Form;
