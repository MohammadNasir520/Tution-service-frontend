import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>someThing went wrong</h1>
      <div className="flex">
        <h1>back to </h1>
        <Link className="text-blue-600 underline" href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
