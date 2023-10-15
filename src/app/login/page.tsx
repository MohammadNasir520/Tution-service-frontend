"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;

  password: string;
};

const Login = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <div>
      login
      <Form submitHandler={onSubmit}>
        <div>
          <FormInput name="email" type="text" size="large" label="email" />
          <FormInput
            name="password"
            type="password"
            size="large"
            label="password"
          />
        </div>

        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
