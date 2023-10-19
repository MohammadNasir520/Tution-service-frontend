"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Button } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";

const UpComingServices = () => {
  const query: Record<string, any> = {};

  const { data } = useGetAllServiceQuery({ status: "upComing" });

  const services = data?.data;
  console.log("service", services);
  return (
    <div>
      <div className="my-6">
        <h1 className="text-center text-2xl">Our Upcoming Services</h1>
        <div className="grid  lg:grid-cols-3 justify-center">
          {services?.map((service: any, i: number) => {
            return <ServiceCard key={i} service={service}></ServiceCard>;
          })}
        </div>

        <Link className="flex justify-end md:ml-7" href={"/upcomingservices"}>
          <Button type="primary">See All</Button>
        </Link>
      </div>
    </div>
  );
};

// export default Services;

export default dynamic(() => Promise.resolve(UpComingServices), { ssr: false });
