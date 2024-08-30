"use client";

import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";
import { useGetAllTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const TuitionPost = () => {
  const {
    data: AllTuitionPost,
    isLoading,
    isError,
  } = useGetAllTuitionPostQuery(undefined);

  if (isLoading) {
    return (
      <div>
        <SmallSpinner></SmallSpinner>
      </div>
    );
  }

  console.log(AllTuitionPost);
  return (
    <div id="tuitionPost" className="my-10">
      <h1 className="text-center text-2xl font-bold">Tuition Post </h1>
      <div>
        {AllTuitionPost?.slice(0, 3)?.map((tuitionPost: any) => {
          return (
            <div key={tuitionPost?.id}>
              <TuitionPostCard tuitionPost={tuitionPost}></TuitionPostCard>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center my-4 w-full">
        {" "}
        <Link href={`/tuition-post`}>
          {" "}
          <Button type="primary">View All Tuition Post</Button>
        </Link>
      </div>
    </div>
  );
};

export default TuitionPost;
