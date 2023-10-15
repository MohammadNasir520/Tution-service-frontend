"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { authKey } from "@/constant/storage-key";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { storeUserInfo } from "@/services/authServices";

import { Button, Col, Row } from "antd";
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
      console.log(res);
      storeUserInfo({ accessToken: res?.data?.accessToken });
      console.log("res", res.data.accessToken);
    } catch (error) {}
  };
  return (
    <div>
      <Row justify={"center"} align={"middle"} className="h-screen ">
        <Col sm={12} md={16} lg={10}>
          <div className="lg:block hidden">Image</div>
        </Col>
        <Col sm={12} md={16} lg={10}>
          <div>
            <h1 className="text-2xl text-center">Login Here</h1>
            <Form submitHandler={onSubmit}>
              <div className="px-8 w-full ">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="email"
                />
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  label="password"
                />
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
