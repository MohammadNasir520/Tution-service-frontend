"use client";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import FormTimePicker from "@/components/Form/FormTimePicker";
import Form from "@/components/Form/page";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";
import {
  classNameSelectOptions,
  daysSelectOptions,
  genderSelectOptions,
  tuitionMediumSelectOptions,
  tuitionTypeSelectOptions,
} from "@/constant/options";

import {
  useCreateTuitionPostMutation,
  useGetSingleTuitionPostQuery,
  useUpdateTuitionPostMutation,
} from "@/redux/api/tuitionPostApi/tuitionPostApi";
import { getUserInfo } from "@/services/authServices";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateTuitionPost = ({ params }: { params: { id: string } }) => {
  console.log("tuition edit params:", params);
  const { data: tuitionPost } = useGetSingleTuitionPostQuery(params?.id);

  const { userId, role } = getUserInfo() as any;
  const [updateTuitionPost, { error, isLoading }] =
    useUpdateTuitionPostMutation();
  console.log(error);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("tuition Data", data);
    try {
      message.loading("Updating");
      const res = await updateTuitionPost({ id: params?.id, data }).unwrap();
      //@ts-ignore
      if (res.id) {
        message.success("Tuition Post updated successfully");
        router.push(`/admin/tuition-post`);
      }
    } catch (error) {
      //@ts-ignore
      message.error(error.message);
      console.log(error);
    }
  };

  if (isLoading) {
    return <SmallSpinner />;
  }

  const defaultValues = {
    medium: tuitionPost?.medium || "",
    jobId: tuitionPost?.jobId || "",
    location: tuitionPost?.location || "",
    className: tuitionPost?.className || "",
    studentGender: tuitionPost?.studentGender || "",
    days: tuitionPost?.days || "",
    subject: tuitionPost?.subject || "",
    tutoringStartTime: tuitionPost?.tutoringStartTime || "",
    tutoringEndTime: tuitionPost?.tutoringEndTime || "",
    tutorGender: tuitionPost?.tutorGender || "",
    numberOfStudent: tuitionPost?.numberOfStudent || "",
    tuitionType: tuitionPost?.tuitionType || "",
    salary: tuitionPost?.salary || "",
  };

  return (
    <div className="flex justify-center items-center w-full my-6">
      <div>
        <h1 className="font-bold text-2xl text-center">
          {" "}
          Update Tuition Post Details
        </h1>
        <div className=" flex justify-center items-center lg:w-2/4 mx-auto">
          <Form submitHandler={onSubmit} defaultValues={defaultValues}>
            <Row className="mx-4 " gutter={{ xs: 8, sm: 16, md: 8 }}>
              <Col className="gutter-row  mb-4">
                <FormInput
                  name="jobId"
                  type="text"
                  size="large"
                  label="Job Id"
                ></FormInput>
                <FormSelectField
                  name="medium"
                  options={tuitionMediumSelectOptions}
                  size="large"
                  label="Select Medium"
                ></FormSelectField>

                <FormInput
                  name="location"
                  type="text"
                  size="large"
                  label="Location"
                ></FormInput>

                <FormSelectField
                  name="className"
                  options={classNameSelectOptions}
                  size="large"
                  label="Select  Class Name/Equivalent Grade"
                ></FormSelectField>

                <FormSelectField
                  name="studentGender"
                  options={genderSelectOptions}
                  size="large"
                  label="Student Gender"
                ></FormSelectField>
                <FormSelectField
                  name="days"
                  options={daysSelectOptions}
                  size="large"
                  label="days"
                ></FormSelectField>
                <FormInput
                  name="subject"
                  type="text"
                  size="large"
                  label="subject"
                ></FormInput>
                <FormTimePicker
                  name="tutoringStartTime"
                  label="Tutoring StartTime"
                ></FormTimePicker>
                <FormTimePicker
                  name="tutoringEndTime"
                  label="Tutoring EndTime"
                ></FormTimePicker>
                <FormSelectField
                  name="tutorGender"
                  options={genderSelectOptions}
                  size="large"
                  label="Tutor Gender"
                ></FormSelectField>
                <FormSelectField
                  name="tuitionType"
                  options={tuitionTypeSelectOptions}
                  size="large"
                  label="Tuition Type"
                ></FormSelectField>
                <FormInput
                  name="salary"
                  type="text"
                  size="large"
                  label="Salary/Month"
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
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTuitionPost;
