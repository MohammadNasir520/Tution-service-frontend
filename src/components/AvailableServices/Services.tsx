"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const query: Record<string, any> = {};

  const { data } = useGetAllServiceQuery({ status: "available" });

  const services = data?.data;
  console.log("service", services);
  return (
    <div className="grid  lg:grid-cols-3 justify-center">
      {services?.map((service: any, i: number) => {
        return <ServiceCard key={i} service={service}></ServiceCard>;
      })}
    </div>
  );
};

export default Services;
