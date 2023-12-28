"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { useLoginMutation } from "@/redux/api/authApi/authApi";
import { loginSchema } from "@/schemas/login";
import { getUserInfo, storeUserInfo } from "@/services/authServices";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import lockImage from "../../../../public/lock.jpg";

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

      if (res.accessToken) {
        message.success("login successful");
        storeUserInfo({ accessToken: res?.accessToken });
        router.push(`/profile`);
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data.message);
    }
  };
  const { role } = getUserInfo() as any;
  return (
    <div>
      <Row justify={"center"} align={"middle"} className="h-screen ">
        <Col>
          <Image
            className="hidden md:block"
            src={lockImage}
            height={600}
            width={300}
            alt=""
          ></Image>
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
                <div className="flex space-x-2 justify-center items-center mt-2">
                  {" "}
                  <h1>Have no account? </h1>{" "}
                  <Link href={"/signup"}>SignUp</Link>
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
