"use client";

import React from "react";

const HomePageTutorStatics = () => {
  const img =
    "data:image/jpeg;base64,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";
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "150px",
      }}
      className="flex text-2xl font-bold gap-32 my-36 justify-center items-center text-white "
    >
      <div className="flex flex-col justify-center items-center">
        <h1>Total Applied</h1>
        <h1>88787</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Total Tutors </h1>
        <h1>767677 </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Live Tuition Jobs</h1>
        <h1>87878</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>Average total rating</h1>
        <h1>4.7</h1>
      </div>
    </div>
  );
};

export default HomePageTutorStatics;
