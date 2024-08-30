// "use client";

// import TutorCard from "@/components/ui/TutorCard/TutorCard";
// import { useGetAllTutorQuery } from "@/redux/api/tutorApi/tutorApi";
// import { Button } from "antd";

// const Tutor = () => {
//   const { data } = useGetAllTutorQuery(undefined);
//   console.log("tutor", data);
//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mb-3">Our Tutors</h1>
//       <div className="  grid lg:grid-cols-4 justify-center min-h-screen space-y-5 items-center">
//         <TutorCard></TutorCard>
//       </div>

//       <div className="flex justify-end">
//         <Button type="primary">View More Teacher</Button>
//       </div>
//     </div>
//   );
// };

// export default Tutor;

"use client";

import TutorCard from "@/components/ui/TutorCard/TutorCard";
import { useGetAllTutorQuery } from "@/redux/api/tutorApi/tutorApi";
import { Button, Spin } from "antd";

const Tutor = () => {
  const { data, error, isLoading } = useGetAllTutorQuery(undefined);

  // Debugging output
  console.log("tutor ", data);
  console.log("tutor error:", error);

  // Loading state
  if (isLoading) {
    return <Spin tip="Loading Tutors..." />;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-3">Our Tutors</h1>
      <div className="grid lg:grid-cols-4 justify-center min-h-screen space-y-5 items-center">
        {data?.map((tutor: any) => (
          <TutorCard key={tutor?.id} tutor={tutor} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button type="primary">View More Teachers</Button>
      </div>
    </div>
  );
};

export default Tutor;
