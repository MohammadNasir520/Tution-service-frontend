"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi/reviewApi";
import { MdStarRate } from "react-icons/md";

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
  const { data: Allreview, error } = useGetAllReviewQuery({});
  console.log(Allreview);

  const settings = {
    dots: true,
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
            <div className="relative flex w-full max-w-[22rem] items-center gap-5  rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <Image
                  width={40}
                  height={40}
                  src={review?.user?.profileImg}
                  alt="tania andrew"
                  className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
              </div>
              <div className="mb-6 p-0  border-l-2 border-[#c0c2c7] px-2">
                <div className="flex">{renderStars(review?.rating)}</div>
                <p>Rating: {review?.rating}</p>

                <p className="block  text-base font-normal  leading-relaxed antialiased">
                  {review?.reviewText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientReview;
