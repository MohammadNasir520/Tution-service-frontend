"use client";

import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import { useGetAllTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import React from "react";

const TuitionPost = () => {
  const { data: allTuitionPost, isLoading } =
    useGetAllTuitionPostQuery(undefined);
  console.log(allTuitionPost);
  return (
    <div className="min-h-screen my-7">
      <h1 className="text-center text-2xl font-bold">All Tuition Posts</h1>
      <div>
        {allTuitionPost?.map((tuitionPost: any) => {
          return (
            <div key={tuitionPost.id}>
              {" "}
              <TuitionPostCard tuitionPost={tuitionPost}></TuitionPostCard>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TuitionPost;
