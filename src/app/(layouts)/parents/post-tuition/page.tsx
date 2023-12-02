"use client";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import Form from "@/components/Form/page";
import { Button, Col, Row } from "antd";
import React from "react";

const PostTuition = () => {
  const onsubmit = async (data: any) => {
    console.log(data);
  };

  const TutorsGenderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Male/Female Any",
      value: "Any",
    },
  ];

  const mediumOptions = [
    {
      label: "Bangla",
      value: "bangla",
    },
    {
      label: "English",
      value: "english",
    },
  ];

  const daysPerWeekOptions = [
    {
      label: "1 day",
      value: "1",
    },
    {
      label: "2 day",
      value: "2",
    },
    {
      label: "3 day",
      value: "3",
    },
    {
      label: "4 day",
      value: "4",
    },
    {
      label: "5 day",
      value: "5",
    },
    {
      label: "6 day",
      value: "6",
    },
    {
      label: "7 day",
      value: "7",
    },
  ];

  return (
    <div className="grid justify-center  ">
      <div>
        <h1 className="text-xl  text-center font-semibold">
          Post a Tuition For Getting The Best Tutor
        </h1>
      </div>

      <div className="lg:w-[600px]">
        <Form submitHandler={onsubmit}>
          <Row gutter={{ xs: 24, sm: 24, md: 24, lg: 20 }}>
            <Col span={20}>
              <div className="mt-2">
                <FormInput name="title" label="Title" size="large"></FormInput>
              </div>

              <div className="mt-2">
                <FormSelectField
                  options={TutorsGenderOptions}
                  name="tutorGender"
                  label="Tutors' Gender"
                  size="large"
                ></FormSelectField>
              </div>

              <div className="mt-2">
                <FormInput
                  name="salary"
                  label="salary"
                  type="number"
                  size="large"
                ></FormInput>
              </div>
              <div className="mt-2">
                <FormSelectField
                  options={mediumOptions}
                  name="Medium"
                  label="medium"
                  size="large"
                ></FormSelectField>
              </div>
              <div className="mt-2">
                <FormSelectField
                  options={daysPerWeekOptions}
                  name="days"
                  label="Days per week"
                  size="large"
                ></FormSelectField>
              </div>
            </Col>
          </Row>

          <Button className="mt-2" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostTuition;
