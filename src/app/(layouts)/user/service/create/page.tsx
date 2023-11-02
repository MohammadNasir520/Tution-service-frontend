"use client";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import Form from "@/components/Form/page";
import { categoryOptions } from "@/constant/options";
import { useCreateServiceMutation } from "@/redux/api/serviceApi/serviceApi";
import { serviceSchema } from "@/schemas/service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateAdmin = () => {
  const [createService, { error }] = useCreateServiceMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      message.loading("creating");
      const res = await createService(data);

      if (res) {
        message.success("service created successfully");
        router.push("/admin/service");
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">create Service</h1>
      <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="title"
              type="text"
              size="large"
              label="Title of Service"
            ></FormInput>
          </Col>

          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="price"
              type="Number"
              size="large"
              label="Price"
            ></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="description"
              type="text"
              size="large"
              label="Set description"
            ></FormInput>
          </Col>
          <Col className="gutter-row mb-2" span={20} lg={8}>
            <FormInput
              name="image"
              type="text"
              size="large"
              label="image"
            ></FormInput>
          </Col>
          <Col className="min-w-[40px]">
            <FormSelectField
              options={categoryOptions}
              name="category"
              size="large"
              label="category"
            ></FormSelectField>
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
