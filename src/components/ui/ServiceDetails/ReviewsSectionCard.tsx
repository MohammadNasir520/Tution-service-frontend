"use client";
import { message } from "antd";
import SingleReviewCard from "./SingleReviewCard";

import { getUserInfo } from "@/services/authServices";
import {
  useCreateReviewMutation,
  useGetAllReviewQuery,
} from "@/redux/api/reviewApi/reviewApi";
import { useState } from "react";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import Link from "next/link";

const ReviewsSection = ({ params }: any) => {
  const { userId } = getUserInfo() as any;
  const [rating, setRating] = useState(0);

  const { data: service, error: singleServiceError } = useGetSingleServiceQuery(
    params?.id
  );

  // console.log("service", service);

  const [createReview, { error: createReviewError }] =
    useCreateReviewMutation();
  // console.log(createReviewError);

  const { data: reviews, error } = useGetAllReviewQuery({});
  // console.log("review", reviews);

  const handleRatingChange = (event: any) => {
    setRating(event.target.value);
    event.target.value = 0;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!userId) {
      return message.error("please signIn to review");
    }

    const reviewText = event.target.elements.review.value;
    if (!reviewText) {
      return message.error("please type your review to review");
    }
    const rate = Number(rating);
    console.log(rate);
    if (rate < 1) {
      return message.error("select rating first");
    }
    const res = await createReview({
      serviceId: params?.id,
      reviewText,
      rating: rate,
    });

    // @ts-ignore
    if (res?.data?.id) {
      message.success("review added");
    }
    event.target.elements.review.value = "";
    // console.log(res);
  };

  const isBooked = service?.bookings?.filter((bookedService: any) => {
    // bookedService.userId = userId;
    return (
      bookedService.userId == userId && bookedService.serviceId == params.id
    );
  });

  // console.log(isBooked[0]?.status);

  return (
    <div className="mt-7">
      {/* create reviews */}

      {isBooked && isBooked[0]?.status === "accepted" ? (
        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col  items-center "
        >
          <div className="flex items-center">
            {/* text area */}
            <div className="w-[60%]  lg:w-96  ">
              <div className="relative w-full min-w-[200px]">
                <textarea
                  className="peer h-[35px]  w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5   text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-300 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="review"
                ></textarea>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blacke peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  write your review
                </label>
              </div>
            </div>

            {/* post button */}
            <button type="submit" className={`disabled:opacity-50`}>
              <span className="  text-white  text-sm font-bold rounded-lg h-8 bg-blue-500 flex items-center px-4 cursor-pointer">
                add review
              </span>
            </button>
          </div>
          {/* rating Star */}

          <div className="mb-4 flex space-x-4">
            <label className="block mb-1">Your Rating</label>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                id="rating1"
                value={1}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleRatingChange}
              />
              <label htmlFor="rating1">1</label>
              <input
                type="radio"
                name="rating"
                id="rating2"
                value={2}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleRatingChange}
              />
              <label htmlFor="rating2">2</label>
              <input
                type="radio"
                name="rating"
                id="rating3"
                value={3}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleRatingChange}
              />
              <label htmlFor="rating3">3</label>
              <input
                type="radio"
                name="rating"
                id="rating4"
                value={4}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleRatingChange}
              />
              <label htmlFor="rating4">4</label>
              <input
                type="radio"
                name="rating"
                id="rating5"
                value={5}
                className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleRatingChange}
              />
              <label htmlFor="rating5">5</label>
            </div>
          </div>

          {/* ....... */}
        </form>
      ) : (
        <>
          <p className="text-center">
            For review You have to booke and must be accepted
          </p>
          <p className="text-center">
            Only booking accepted user can post review
          </p>
          {(isBooked && isBooked[0])?.status != "accepted" &&
            isBooked &&
            isBooked[0]?.status != "pending" && (
              <div className="mx-5 flex justify-center items-center">
                <Link href={`/Booking/${params?.id}`}>
                  <button className="w-60 flex gap-2 justify-center items-center    font-semibold p-1   bg-white text-black hover:bg-blue-600 border border-blue-500 rounded-md hover:text-white mb-4">
                    Go For Booking
                  </button>
                </Link>
              </div>
            )}
        </>
      )}

      {/* review show card  */}
      {reviews?.length > 0 ? (
        reviews?.map((review: any, i: number) => {
          return <SingleReviewCard key={i} review={review}></SingleReviewCard>;
        })
      ) : (
        <div className=" flex justify-center mt-5 text-2xl   font-bold">
          <h1>No Review Yet, Please add</h1>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
