import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import React from "react";

const TuitionPost = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl font-bold">Tuition Post </h1>
      <TuitionPostCard></TuitionPostCard>
      <TuitionPostCard></TuitionPostCard>
      <TuitionPostCard></TuitionPostCard>
    </div>
  );
};

export default TuitionPost;
