import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <p className="text-green-600">
          Your email is verified and account creation successful{" "}
        </p>
        <Link
          className="text-blue-700 font-bold text-center mx-auto"
          href={"/login"}
        >
          Now Login
        </Link>
      </div>
    </div>
  );
};

export default page;
