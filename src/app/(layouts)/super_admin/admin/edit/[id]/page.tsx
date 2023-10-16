"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import {
  useCreateAdminMutation,
  useGetSingleAdminQuery,
  useUpdateSingleAdminMutation,
} from "@/redux/api/adminApi/adminApi";
import { adminSchema } from "@/schemas/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const EditPage = ({ params }: any) => {
  const id = params?.id;
  console.log(params.id);
  const [updateSingleAdmin, { error }] = useUpdateSingleAdminMutation();
  const { data: adminData } = useGetSingleAdminQuery(id);
  const admin = adminData?.data;
  console.log("ad", admin);
  console.log(error);

  const onSubmit = async (data: any) => {
    try {
      const res = await updateSingleAdmin({ data, id });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: admin?.name || "",
    email: admin?.email || "",
    contactNo: admin?.contactNo || "",
    profileImg: admin?.profileImg || "",
    password: admin?.password || "",
  };
  return (
    <div>
      Update Admin Information
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(adminSchema)}
        defaultValues={defaultValues}
      >
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
