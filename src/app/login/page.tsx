"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;

  password: string;
};

const Login = () => {
  const [login, { data, isLoading, isError }] = useLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
      const res = await login({ ...data }).unwrap();
      console.log("res", res);
    } catch (error) {}
  };
  return (
    <div>
      login
      <Form submitHandler={onSubmit}>
        <div className="w-1/2">
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
