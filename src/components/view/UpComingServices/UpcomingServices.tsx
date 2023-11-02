"use client";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../../ui/ServiceCard/ServiceCard";
import { Button } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";

const UpComingServices = () => {
  const query: Record<string, any> = {};

  const { data, isLoading, isSuccess } = useGetAllServiceQuery({
    status: "upComing",
  });

  if (isLoading || !isSuccess) {
    return <SmallSpinner></SmallSpinner>;
  }

  const services = data?.data;

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl">Our Upcoming Services</h1>
      <div className="my-6 min-h-[500px] bg-slate-50">
        <div className="grid  md:grid-cols-2   lg:grid-cols-3 justify-center">
          {services?.map((service: any, i: number) => {
            return <ServiceCard key={i} service={service}></ServiceCard>;
          })}
        </div>

        <Link
          className="flex justify-center md:ml-7"
          href={"/upcoming-services"}
        >
          <Button type="primary" ghost>
            <span className="text-black"> See All</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

// export default Services;

export default dynamic(() => Promise.resolve(UpComingServices), { ssr: false });
