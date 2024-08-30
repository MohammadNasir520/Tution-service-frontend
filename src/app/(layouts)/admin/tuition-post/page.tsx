"use client";
import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import { useGetAllTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import React from "react";

const TuitionPost = () => {
  const {
    data: AllTuitionPost,
    isLoading,
    isError,
  } = useGetAllTuitionPostQuery(undefined);

  console.log(AllTuitionPost);
  return (
    <div>
      <h1 className="text-center font-bold">Total: {AllTuitionPost?.length}</h1>
      {AllTuitionPost?.map((tuitionPost: any) => {
        return (
          <div key={tuitionPost?.id}>
            <TuitionPostCard tuitionPost={tuitionPost}></TuitionPostCard>
          </div>
        );
      })}
    </div>
  );
};

export default TuitionPost;
