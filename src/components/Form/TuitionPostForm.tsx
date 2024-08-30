import React from "react";
import Form from "./page";
import { Button, Col, Row } from "antd";
import FormInput from "./FormInput";
import FormSelectField from "./FormSelectField";
import {
  classNameSelectOptions,
  daysSelectOptions,
  genderSelectOptions,
  tuitionMediumSelectOptions,
  tuitionTypeSelectOptions,
} from "@/constant/options";
import FormTimePicker from "./FormTimePicker";

const TuitionPostForm = ({ onSubmit }: { onSubmit: any }) => {
  return (
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
          Create
        </Button>
      </Form>
    </div>
  );
};

export default TuitionPostForm;
