"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import SmallSpinner from "@/components/Spinner/SmallSpinner";

import {
  useGetSingleAdminQuery,
  useUpdateSingleAdminMutation,
} from "@/redux/api/adminApi/adminApi";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/profleApi/profileApi";
import { getUserInfo } from "@/services/authServices";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const EditProfilePage = () => {
  const { userId, role } = getUserInfo() as any;

  const router = useRouter();
  const { data: admin, isLoading } = useGetProfileQuery(undefined);

  const [updateProfile, { error }] = useUpdateProfileMutation();

  const onSubmit = async (data: any) => {
    try {
      const res = await updateProfile({ data, id: userId }).unwrap();

      if (res) {
        message.success("profile updated successfully");
        router.push(`/${role}`);
      }
    } catch (error) {
      console.log(error);
      //@ts-ignore
      message.error(error.message);
    }
  };

  if (isLoading) {
    return <SmallSpinner />;
  }

  const defaultValues = {
    name: admin?.name || "",
    email: admin?.email || "",
    contactNo: admin?.contactNo || "",
    profileImg: admin?.profileImg || "",
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

export default EditProfilePage;
