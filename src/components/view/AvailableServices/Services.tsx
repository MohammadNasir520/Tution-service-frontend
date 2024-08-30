"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../../ui/ServiceCard/ServiceCard";
import { Button, Pagination } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import SmallSpinner from "../../ui/Spinner/SmallSpinner";

const Services = () => {
  const query: Record<string, any> = {};

  const { data, isLoading, error } = useGetAllServiceQuery({
    status: "available",
  });

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }

  const services = data?.data;

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl my-3 font-bold">
        Our Available Services
      </h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 justify-center ">
        {services?.map((service: any, i: number) => {
          return (
            <div key={i}>
              <ServiceCard service={service}></ServiceCard>;
            </div>
          );
        })}
      </div>

      <Link className="flex justify-center md:ml-7" href={"/services"}>
        <Button type="primary" ghost>
          <span className="text-black"> See All</span>
        </Button>
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Services), { ssr: false });
