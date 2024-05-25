import TuitionPostCard from "@/components/tuitionPost/TuitionPostCard";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const TuitionPost = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-2xl font-bold">Tuition Post </h1>
      <TuitionPostCard></TuitionPostCard>
      <TuitionPostCard></TuitionPostCard>
      <TuitionPostCard></TuitionPostCard>

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
