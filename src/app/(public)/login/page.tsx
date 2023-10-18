"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { loginSchema } from "@/schemas/login";
import { getUserInfo, storeUserInfo } from "@/services/authServices";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  password: string;
};

const Login = () => {
  const [login, { data }] = useLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await login({ ...data }).unwrap();
      console.log(res);
      if (res.accessToken) {
        message.success("login successful");
        storeUserInfo({ accessToken: res?.accessToken });
        router.push(`/profile`);
      }
    } catch (error) {
      console.log(error);
      // @ts-ignore
      message.error(error?.data.message);
      console.log(error);
    }
  };
  const { role } = getUserInfo() as any;
  return (
    <div>
      <Row justify={"center"} align={"middle"} className="h-screen ">
        <Col sm={12} md={16} lg={10}>
          <div className="lg:block hidden">Image</div>
        </Col>
        <Col sm={12} md={16} lg={10}>
          <div>
            <h1 className="text-2xl text-center">Login Here</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
              <div className="px-8 w-full ">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="email"
                />
                <div className="my-1">
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="password"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-2 w-1/2 "
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
