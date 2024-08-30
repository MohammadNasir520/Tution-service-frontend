"use client";

import TuitionPostForm from "@/components/Form/TuitionPostForm";

import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";

import { useCreateTuitionPostMutation } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import { getUserInfo } from "@/services/authServices";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const CreateTuitionPost = () => {
  const { userId, role } = getUserInfo() as any;
  const [createTuitionPost, { error, isLoading }] =
    useCreateTuitionPostMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log("tuition Data", data);
    try {
      message.loading("Creating");
      const res = await createTuitionPost(data).unwrap();
      //@ts-ignore
      if (res.id) {
        message.success("Tuition Post Created successfully");
        router.push(`/admin/tuition-post`);
      }
    } catch (error) {
      //@ts-ignore
      message.error(error.message);
      console.log(error);
    }
  };

  if (isLoading) {
    return <SmallSpinner />;
  }

  return (
    <div className="flex justify-center items-center w-full my-6">
      <div>
        <h1 className="font-bold text-2xl text-center">
          {" "}
          Input Details For Tuition Post
        </h1>
        <TuitionPostForm onSubmit={onSubmit}></TuitionPostForm>
      </div>
    </div>
  );
};

export default CreateTuitionPost;
