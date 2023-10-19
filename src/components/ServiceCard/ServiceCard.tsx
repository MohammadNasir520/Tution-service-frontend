import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const ServiceCard = ({ service }: any) => {
  const { image, title, price, description, id, category } = service;

  return (
    <div>
      <div className="px-2 ">
        <div
          id="skills"
          className="relative flex w-full md:min-h-[350px] my-3  md:max-w-[18rem] lg:max-w-[20rem]  lg:min-h-[450px] flex-col rounded-lg bg-gray-50 bg-clip-border text-gray-700 shadow-lg border"
        >
          <div className="relative    overflow-hidden rounded bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <div className="flex justify-center  rounded h-[200px] w-full">
              <Image
                src={image}
                width={200}
                height={250}
                alt="pic"
                layout="responsive"
              ></Image>
            </div>
          </div>
          <div className="">
            <div className="my-2 flex flex-col items-center justify-center">
              <h5 className="block hover:text-blue-500 font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {title}
              </h5>

              <h5 className="block  font-sans text-base font-semibold leading-snug tracking-normal text-black antialiased">
                <span className="hover:text-blue-500"> {category} </span>
              </h5>
            </div>
            <hr />
            <div className="px-2">
              <h4> {description}</h4>
            </div>
            <div className="my-4 flex gap-2 items-center justify-start mx-5">
              <h5 className="block flex  justify-center items-center gap- font-sans text-base font-semibold leading-snug tracking-normal text-black antialiased">
                <span className="hover:text-blue-500"> {price} </span>{" "}
                <TbCurrencyTaka className="w-5 h-5 " /> / month
              </h5>

              <div className="flex gap-1">
                <AiOutlineShoppingCart className="h-10 w-10  text-blue-500 font-semibold " />
              </div>
            </div>
          </div>
          <div className="mx-5 flex justify-center items-center">
            <Link href={`/serviceDetails/${id}`}>
              <button className="w-60 flex gap-2 justify-center items-center  font-sans font-semibold p-1   bg-white text-black hover:bg-blue-600 border border-blue-500 rounded-md hover:text-white mb-4">
                Go For Details
              </button>
            </Link>
          </div>
          <div className="mx-5 flex justify-center items-center">
            <Link href={`/Booking/${id}`}>
              <button className="w-60 flex gap-2 justify-center items-center  font-sans font-semibold p-1   bg-white text-black hover:bg-blue-600 border border-blue-500 rounded-md hover:text-white mb-4">
                Go For Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
