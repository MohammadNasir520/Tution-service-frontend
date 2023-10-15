"use client";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/page";
import { Button } from "antd";
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
        <FormInput name="name" type="text" size="large"></FormInput>
        <FormInput name="name" type="text" size="large"></FormInput>
        <FormInput name="name" type="text" size="large"></FormInput>
        <FormInput name="name" type="text" size="large"></FormInput>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default CreateAdmin;
