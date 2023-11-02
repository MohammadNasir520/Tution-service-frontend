import { getUserInfo } from "@/services/authServices";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const LatestUpdateCard = ({ service }: any) => {
  const description = "kaslkfas";
  return (
    <div className=" md:px-20">
      <div className="relative flex flex-col    my-3    lg:min-h-[450px] w-full   rounded-lg bg-gray-100 border text-gray-700  ">
        <div className="relative    overflow-hidden  bg-blue-gray-500 bg-clip-border text-white  ">
          <div className="flex justify-center h-[300px]   ">
            <Image
              src={"/breakingNews.jpeg"}
              width={300}
              height={350}
              alt="pic"
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="">
          <div className="my-2 flex flex-col ">
            <h5 className="block hover:text-blue-500   text-xl font-bold leading-snug tracking-normal text-black antialiased">
              Title
            </h5>
          </div>
          <hr />
          <div className="px-2 h-6 mb-2">
            <h4>
              {" "}
              {description.slice(0, 50)}{" "}
              {description.length > 50 ? ".... " : ""}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdateCard;
