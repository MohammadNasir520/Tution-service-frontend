"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";

import { useCreateTuitionPostMutation } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import { getUserInfo } from "@/services/authServices";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateTuitionPost = () => {
  const { userId, role } = getUserInfo() as any;
  const [createTuitionPost, { error, isLoading }] =
    useCreateTuitionPostMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("tuition Data", data);
    try {
      message.loading("Creating");
      const res = await createTuitionPost(data);
      //@ts-ignore
      if (res.id) {
        message.success("Tuition Post Created successfully");
        router.push(`/tuition-post`);
      }
    } catch (error) {
      //@ts-ignore
      message.error(error.message);
    }
  };

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div className="flex justify-center items-center w-full my-6">
      <div>
        <h1 className="font-bold text-2xl text-center">
          {" "}
          Input Details For Tuition Post
        </h1>
        <div className=" flex justify-center items-center lg:w-2/4 mx-auto">
          <Form submitHandler={onSubmit}>
            <Row className="mx-4 " gutter={{ xs: 8, sm: 16, md: 8 }}>
              <Col className="gutter-row  mb-4">
                <FormInput
                  name="jobId"
                  type="text"
                  size="large"
                  label="Job Id"
                ></FormInput>
                <FormInput
                  name="medium"
                  type="text"
                  size="large"
                  label="Medium"
                ></FormInput>

                <FormInput
                  name="location"
                  type="text"
                  size="large"
                  label="Location"
                ></FormInput>

                <FormInput
                  name="className"
                  type="text"
                  size="large"
                  label="ClassName"
                ></FormInput>

                <FormInput
                  name="studentGender"
                  type="text"
                  size="large"
                  label="Student Gender"
                ></FormInput>
                <FormInput
                  name="days"
                  type="text"
                  size="large"
                  label="days"
                ></FormInput>
                <FormInput
                  name="subject"
                  type="text"
                  size="large"
                  label="subject"
                ></FormInput>
                <FormInput
                  name="tutoringStartTime"
                  type="text"
                  size="large"
                  label="Tutoring StartTime"
                ></FormInput>
                <FormInput
                  name="tutoringEndTime"
                  type="text"
                  size="large"
                  label="Tutoring EndTime"
                ></FormInput>
                <FormInput
                  name="tutorGender"
                  type="text"
                  size="large"
                  label="Tutor Gender"
                ></FormInput>
                <FormInput
                  name="tuitionType"
                  type="text"
                  size="large"
                  label="Tuition Type"
                ></FormInput>
                <FormInput
                  name="salary"
                  type="text"
                  size="large"
                  label="Salary"
                ></FormInput>

                <FormInput
                  name="numberOfStudent"
                  type="text"
                  size="large"
                  label="Number Of Student"
                ></FormInput>
              </Col>
            </Row>

            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTuitionPost;
