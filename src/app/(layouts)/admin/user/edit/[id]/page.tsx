"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";

import { useGetSingleAdminQuery } from "@/redux/api/adminApi/adminApi";
import { useUpdateSingleUserMutation } from "@/redux/api/userApi/userApi";

import { Button, Col, Row, message } from "antd";

import React from "react";

const EditPage = ({ params }: any) => {
  const { data: user, isLoading } = useGetSingleAdminQuery(params?.id);

  const [updateSingleUser, { error }] = useUpdateSingleUserMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await updateSingleUser({ data, id: params?.id });
      if (res) {
        // @ts-ignore
        message.success("user information updated successfully");
      }
    } catch (error) {}
  };

  // if (isLoading) {
  //   return <SmallSpinner />;
  // }

  const defaultValues = {
    name: user?.name || "",
    email: user?.email || "",
    contactNo: user?.contactNo || "",
    profileImg: user?.profileImg || "",
  };
  return (
    <div>
      <h1 className="text-xl font-medium"> Update Users Information</h1>
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="name"
              type="text"
              size="large"
              label="Name"
            ></FormInput>
          </Col>

          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="email"
              type="text"
              size="large"
              label="Email"
            ></FormInput>
          </Col>

          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="contactNo"
              type="text"
              size="large"
              label="Contact No"
            ></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="profileImg"
              type="text"
              size="large"
              label="Profile Image"
            ></FormInput>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
