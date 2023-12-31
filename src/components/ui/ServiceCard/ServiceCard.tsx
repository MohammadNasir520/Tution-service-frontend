import { useAddToCartMutation } from "@/redux/api/cartApi/cartApi";
import { getUserInfo } from "@/services/authServices";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";

const ServiceCard = ({ service }: any) => {
  const { userId } = getUserInfo() as any;

  const [AddToCart] = useAddToCartMutation();

  const { image, title, price, description, id, category, bookings } = service;

  const isBooked = bookings?.filter((bookedService: any) => {
    return bookedService.userId == userId && bookedService.serviceId == id;
  });

  const handleAddToCard = async (id: string) => {
    try {
      const res = await AddToCart({ serviceId: id }).unwrap();

      if (res?.id) {
        message.success("service added to cart to successfully");
      }
    } catch (error) {
      // @ts-ignore
      message.error(error?.data?.message);
    }
  };
  return (
    <div>
      <div className="px-2 flex justify-center">
        <div className="relative flex w-full md:min-h-[350px] my-3  md:max-w-[18rem] lg:max-w-[20rem]  lg:min-h-[450px] flex-col rounded-lg bg-gray-100 border text-gray-700  ">
          <div className="relative    overflow-hidden  bg-blue-gray-500 bg-clip-border text-white  ">
            <div className="flex justify-center   h-[200px] w-full">
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
              <h5 className="block hover:text-blue-500   text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {title}
              </h5>

              <h5 className="block  my-1   text-base font-semibold leading-snug tracking-normal text-black antialiased">
                <span className="hover:text-blue-500">
                  {" "}
                  Category : {category}{" "}
                </span>
              </h5>
            </div>
            <hr />
            <div className="px-2 h-6 mb-2 hidden">
              <h4>
                {" "}
                {description.slice(0, 50)}{" "}
                {description.length > 50 ? ".... " : ""}
              </h4>
            </div>
            <div className="my-4 flex gap-2 items-center justify-start mx-5">
              <h5 className="block flex  justify-center items-center gap-   text-base font-semibold leading-snug tracking-normal text-black antialiased">
                <span className="hover:text-blue-500"> {price} </span>{" "}
                <TbCurrencyTaka className="w-5 h-5 " /> / month
              </h5>

              <div
                onClick={() => handleAddToCard(id)}
                className="flex gap-1 cursor-pointer"
              >
                <AiOutlineShoppingCart className="h-8 w-8  text-blue-500 font-semibold " />
              </div>
            </div>
          </div>
          <div className="mx-5 flex justify-center items-center">
            <Link href={`/serviceDetails/${id}`}>
              <button className="w-60 flex gap-2 justify-center items-center    font-semibold p-1   bg-white text-black hover:bg-blue-600 border border-blue-500 rounded hover:text-white mb-4">
                Go For Details
              </button>
            </Link>
          </div>

          {isBooked.length <= 0 ? (
            <div className="mx-5 flex justify-center items-center">
              <Link href={`/Booking/${id}`}>
                <button className="w-60 flex gap-2 justify-center items-center    font-semibold p-1    text-white bg-blue-600 border border-blue-500 rounded-md hover:text-white mb-4">
                  Go For Booking
                </button>
              </Link>
            </div>
          ) : (
            <div className="h-5">
              {isBooked[0]?.status === "accepted" ? (
                <p className="text-green-600 text-center">Already booked</p>
              ) : (
                <div>
                  {isBooked[0]?.status === "pending" ? (
                    <p className="text-center text-cyan-500">
                      your booking on {isBooked[0]?.status}
                    </p>
                  ) : (
                    <div>
                      <p className="text-center text-base text-red-500">
                        Your booking {isBooked[0]?.status}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
