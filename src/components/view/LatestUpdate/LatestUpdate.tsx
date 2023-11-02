"use client";
import LatestUpdateCard from "@/components/ui/LatestUpdateCard/LatestUpdateCard";
import { useGetAlllatestUpdateQuery } from "@/redux/api/latestUpdateApi/latestUpdateApi";
import React from "react";

const LatestUpdate = () => {
  const { data: latestUpdates } = useGetAlllatestUpdateQuery(undefined);
  console.log(latestUpdates);

  return (
    <div className="my-12">
      <h1 className="text-xl font-bold text-center">Our Latest Update</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
        {latestUpdates?.map((latestUpdate: any) => {
          return (
            <div
              key={latestUpdate?.id}
              className="flex justify-center items-center w-full"
            >
              <LatestUpdateCard latestUpdate={latestUpdate}></LatestUpdateCard>;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestUpdate;
