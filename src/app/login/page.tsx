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
      <Row justify={"center"} align={"middle"} className="h-screen">
        <Col sm={12} md={16} lg={10}>
          Image
        </Col>
        <Col sm={12} md={16} lg={10}>
          <div>
            <Form submitHandler={onSubmit}>
              <div className="px-8 ">
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
                <Button type="primary" htmlType="submit" className="mt-2">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
