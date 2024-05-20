"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { useCreateUserMutation } from "@/redux/api/authApi/authApi";
import { loginSchema } from "@/schemas/login";
import { signUpSchema } from "@/schemas/signupSchema";
import { getUserInfo, storeUserInfo } from "@/services/authServices";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  password: string;
};

const SignUp = () => {
  const [createUser, { data }] = useCreateUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("signup data", data);
    try {
      const res = await createUser({ ...data }).unwrap();

      if (res?.id) {
        message.success("Account Creation Success, Please login First ");
        router.push(`/login`);
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data.message);
    }
  };

  return (
    <div>
      <Row justify={"center"} align={"middle"} className="h-screen ">
        <Col sm={12} md={16} lg={10}>
          <div>
            <h1 className="text-2xl text-center"> Create Account</h1>
            <Form submitHandler={onSubmit} resolver={yupResolver(signUpSchema)}>
              <div className="px-8 w-full ">
                <FormInput name="name" type="text" size="large" label="Name" />
                <div className="my-1">
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    label="Email"
                  />
                </div>
                <div className="my-1">
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    label="password"
                  />
                </div>

                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="contactNo"
                />

                <div className="w-full flex justify-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-2 w-1/2 "
                  >
                    signUp
                  </Button>
                </div>
                <div className="flex space-x-2 justify-center items-center mt-2">
                  {" "}
                  <h1>Already Have account? </h1>{" "}
                  <Link href={"/login"}>login</Link>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
