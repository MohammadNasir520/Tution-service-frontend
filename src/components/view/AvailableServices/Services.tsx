"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { Button, Pagination } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import SmallSpinner from "../../ui/Spinner/SmallSpinner";

const Services = () => {
  const query: Record<string, any> = {};

  const { data, isLoading } = useGetAllServiceQuery({ status: "available" });

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }

  const services = data?.data;
  console.log("service", services);
  return (
    <div className="h-screen">
      <div className="grid  lg:grid-cols-3 justify-center ">
        {services?.map((service: any, i: number) => {
          return <ServiceCard key={i} service={service}></ServiceCard>;
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

// export default Services;

export default dynamic(() => Promise.resolve(Services), { ssr: false });
