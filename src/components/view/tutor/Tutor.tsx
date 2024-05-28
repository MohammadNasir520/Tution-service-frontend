import TutorCard from "@/components/ui/TutorCard/TutorCard";
import { Button } from "antd";

const Tutor = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-3">
        Our Top Rated Tutor
      </h1>
      <div className="  grid lg:grid-cols-4 justify-center min-h-screen space-y-5 items-center">
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
        <TutorCard></TutorCard>
      </div>

      <div className="flex justify-end">
        <Button type="primary">View More Teacher</Button>
      </div>
    </div>
  );
};

export default Tutor;
