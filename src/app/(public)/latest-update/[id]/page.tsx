import LatestUpdateDetailsCard from "@/components/ui/LatestUpdateDetailsCard/LatestUpdateDetailsCard";

const LatestUpdateDetails = ({ params }: any) => {
  return (
    <div className="flex justify-center ">
      <LatestUpdateDetailsCard params={params}></LatestUpdateDetailsCard>
    </div>
  );
};

export default LatestUpdateDetails;
