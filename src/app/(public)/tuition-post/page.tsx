import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import React from "react";

const TuitionPost = () => {
  return (
    <div className="min-h-screen my-7">
      <h1 className="text-center text-2xl font-bold">All Tuition Posts</h1>
      <TuitionPostCard></TuitionPostCard>
    </div>
  );
};

export default TuitionPost;
