"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import Spinner from "@/components/Spinner/Spinner";
import {
  useGetSingleAdminQuery,
  useUpdateSingleAdminMutation,
} from "@/redux/api/adminApi/adminApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const EditPage = ({ params }: any) => {
  const router = useRouter();
  const {
    data: admin,
    isLoading,
    error: getSingleAdminError,
  } = useGetSingleAdminQuery(params?.id);

  if (isLoading) {
    <Spinner></Spinner>;
  }

  const [updateSingleAdmin, { error }] = useUpdateSingleAdminMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await updateSingleAdmin({ data, id: params?.id });
      console.log(res);
      if (res) {
        // @ts-ignore
        message.success(res?.data.message);
        // router.push("/super_admin/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: admin?.data?.name || "",
    email: admin?.data?.email || "",
    contactNo: admin?.data?.contactNo || "",
    profileImg: admin?.data?.profileImg || "",
    password: admin?.data?.password || "",
  };
  return (
    <div>
      Update Admin Information
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
