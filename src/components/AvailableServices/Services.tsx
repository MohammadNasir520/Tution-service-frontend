"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const query: Record<string, any> = { status: "notAvailable" };

  const { data } = useGetAllServiceQuery({ ...query });

  const services = data?.data;
  console.log(services);
  return (
    <div>
      {services?.map((service: any, i: number) => {
        return <ServiceCard key={i} service={service}></ServiceCard>;
      })}
    </div>
  );
};

export default Services;
