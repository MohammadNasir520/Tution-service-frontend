"use client";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";
import { useGetSingleTuitionPostQuery } from "@/redux/api/tuitionPostApi/tuitionPostApi";
import TuitionPostDetailsCard from "./TuitionPostDetailsCard";

const TuitionPostDetails = ({ params }: { params: { id: string } }) => {
  console.log(params.id);

  const { data, isLoading, isError } = useGetSingleTuitionPostQuery(params.id);

  if (isLoading) {
    return (
      <div>
        <SmallSpinner></SmallSpinner>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return <TuitionPostDetailsCard detailsData={data}></TuitionPostDetailsCard>;
};

export default TuitionPostDetails;
