"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi/reviewApi";
import { MdStarRate } from "react-icons/md";
import SmallSpinner from "@/components/ui/Spinner/SmallSpinner";

function Arrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const ClientReview = () => {
  const { data: Allreview, isLoading, error } = useGetAllReviewQuery({});

  if (isLoading) {
    return <SmallSpinner></SmallSpinner>;
  }

  // console.log(Allreview);
  // const renderCustomDots = (i: number) => {
  //   return (
  //     <div>
  //       <button
  //         style={{
  //           width: "10px",
  //           height: "10px",
  //           border: "1px solid black",

  //           background: "red",
  //           marginLeft: "5px",
  //           marginRight: "5px",
  //           cursor: "pointer",
  //         }}
  //       ></button>
  //     </div>
  //   );
  // };
  // const renderCustomDots = (i: number) => {
  //   return (
  //     <div style={{ display: "flex" }}>
  //       <div
  //         style={{
  //           width: "20px",
  //           height: "20px",
  //           border: "none",
  //           background: "red",
  //           marginLeft: "5px",
  //           marginRight: "5px",
  //           cursor: "pointer",
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       ></div>
  //     </div>
  //   );
  // };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    pauseOnHover: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    // customPaging: function (i: number) {
    //   return renderCustomDots(i);
    // },

    responsive: [
      {
        breakpoint: 1924,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starArray = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(
        <MdStarRate key={i} className="h-5 w-5 text-yellow-600" />
      );
    }

    if (hasHalfStar) {
      starArray.push(
        <MdStarRate key="half" className="h-5 w-4 text-yellow-600" />
      );
    }

    return starArray;
  };
  return (
    <div id="reviews" className="mx-10 py-24">
      <div className="flex flex-col justify-center items-center my-5 ">
        <h6 className="   text-black text-3xl font-bold uppercase mb-0  ">
          Students Review
        </h6>
        <h6
          style={{ lineHeight: "12px" }}
          className="   text-green-700 text-lg font-bold mt-0  "
        >
          Here are Students Reviews
        </h6>
      </div>

      <Slider {...settings}>
        {Allreview?.map((review: any, i: number) => (
          <div key={i} className="px-2 cursor-pointer">
            <div className=" flex w-full  max-w-[22rem] items-center gap-3  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div className=" mx-0 mt-4  flex  items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0  text-gray-700 shadow-none">
                <Image
                  width={40}
                  height={40}
                  src={review?.user?.profileImg}
                  alt="pic"
                  className=" inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
              </div>
              <div className="border-l-2  min-h-[50px] border-[#c0c2c7]"></div>
              <div className=" p-0 min-h-[60px]   ">
                <div className="flex">{renderStars(review?.rating)}</div>

                <p className="block  text-sm font-normal  leading-relaxed antialiased">
                  {review?.reviewText}
                </p>

                <small>{review?.user?.name}</small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientReview;
