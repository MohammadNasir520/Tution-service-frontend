"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";

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
    <div className="flex justify-center items-center w-full my-6">
      <div>
        <h1 className="font-bold text-2xl text-center">
          {" "}
          Update Your Information
        </h1>
        <div className=" flex justify-center items-center lg:w-2/4 mx-auto">
          <Form submitHandler={onSubmit} defaultValues={defaultValues}>
            <Row className="mx-4" gutter={{ xs: 8, sm: 16, md: 8 }}>
              <Col className="gutter-row mb-2">
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  label="Name"
                ></FormInput>

                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  label="Email"
                ></FormInput>

                <FormInput
                  name="contactNo"
                  type="text"
                  size="large"
                  label="Contact No"
                ></FormInput>

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
      </div>
    </div>
  );
};

export default EditProfilePage;
