import { Button } from "antd/es/radio";

const VerifyEmail = ({ params }: any) => {
  console.log(params.id);
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Button>Click Here to Email Verify</Button>
    </div>
  );
};

export default VerifyEmail;
