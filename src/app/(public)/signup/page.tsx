"use client";
import React from "react";

import { Button, Col, Row, Tabs, message } from "antd";
import Link from "next/link";
import FormInput from "@/components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { parentsSignUpSchema, tutorSignUpSchema } from "@/schemas/signupSchema";
import { SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSendVerificationEmailMutation } from "@/redux/api/authApi/authApi";
import Form from "@/components/Form/page";

type FormValues = {
  name: string;
  password: string;
  role: string;
};

const SignUp = () => {
  const [sendVerificationEmail, { data }] = useSendVerificationEmailMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("formValue", data);
      const res = await sendVerificationEmail({ ...data }).unwrap();
      console.log(res);

      message.success(
        "Check your email and verify and create account successfully"
      );
    } catch (error) {
      console.log(error);
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  const items = ["Parents", "Tutor"];
  return (
    <>
      <Row justify={"center"} align={"middle"}>
        <Col sm={12} md={16} lg={10}>
          <h1 className="text-2xl text-center"> Create Account as__</h1>
          <Tabs tabPosition={"top"}>
            {items?.map((item, i) => (
              <Tabs.TabPane tab={item} key={i}>
                <div>
                  <div>
                    <div>
                      <Form
                        submitHandler={onSubmit}
                        resolver={yupResolver(
                          item === "Parents"
                            ? parentsSignUpSchema
                            : tutorSignUpSchema
                        )}
                      >
                        <div className="px-8 w-full space-y-1">
                          <FormInput
                            name="name"
                            type="text"
                            size="large"
                            label="Full Name"
                          />
                          <div className="">
                            <FormInput
                              name="email"
                              type="email"
                              size="large"
                              label="Verification Email"
                            />
                          </div>
                          <div className="">
                            <FormInput
                              name="password"
                              type="password"
                              size="large"
                              label="password"
                            />
                          </div>
                          <div>
                            <FormInput
                              name="contactNo"
                              type="text"
                              size="large"
                              label="contactNo"
                            />
                          </div>
                          <div className="">
                            <FormInput
                              name="profileImg"
                              type="text"
                              size="large"
                              label={`Profile Picture ${
                                item == "Parents" ? "(optional)" : "(Required)"
                              }`}
                            />
                          </div>

                          <FormInput
                            name="role"
                            type="hidden"
                            size="large"
                            defaultValue={`${
                              item == "Tutor" ? "tutor" : "parents"
                            }`}
                          />

                          <div className="w-full flex justify-center">
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="mt-2 w-1/2 "
                            >
                              Get Verification Email
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
                  </div>
                </div>
              </Tabs.TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default SignUp;
