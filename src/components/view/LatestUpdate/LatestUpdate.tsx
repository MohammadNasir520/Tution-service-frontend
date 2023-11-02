import LatestUpdateCard from "@/components/ui/LatestUpdateCard/LatestUpdateCard";
import React from "react";

const LatestUpdate = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Our Latest Update</h1>
      <div className="grid md:grid-cols-2 ">
        <LatestUpdateCard></LatestUpdateCard>
        <LatestUpdateCard></LatestUpdateCard>
        <LatestUpdateCard></LatestUpdateCard>
      </div>
    </div>
  );
};

export default LatestUpdate;
