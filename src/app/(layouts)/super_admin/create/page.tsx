"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateAdmin = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <div>
      create Admin Page
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput name="name" type="text" size="large"></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput name="email" type="text" size="large"></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput name="password" type="password" size="large"></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput name="contactNo" type="text" size="large"></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput name="ProfileImg" type="text" size="large"></FormInput>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
