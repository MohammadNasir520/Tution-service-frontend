"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { useCreateAdminMutation } from "@/redux/api/adminApi/adminApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateAdmin = () => {
  const [createAdmin, { error }] = useCreateAdminMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      message.loading("creating");
      const res = await createAdmin(data);
      if (res) {
        message.success("admin created successfully");
        router.push("/super_admin/admin");
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  return (
    <div>
      create Admin Page
      <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
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
              name="password"
              type="password"
              size="large"
              label="Set Password"
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
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
