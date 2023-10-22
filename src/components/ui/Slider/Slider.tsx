"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import { useGetAllReviewQuery } from "@/redux/api/reviewApi/reviewApi";

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

  const reviews = [
    {
      id: 1,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
    {
      id: 2,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
    {
      id: 3,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
    {
      id: 4,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
    {
      id: 5,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
    {
      id: 6,
      title: "This organization has best tutor",
      image: "",
      href: "/",
    },
  ];
  return (
    <div id="reviews" className="mx-10 py-24">
      <div className="flex flex-col justify-center items-center my-5 ">
        <h6 className="font-sans  text-black text-3xl font-bold uppercase mb-0  ">
          Students Review
        </h6>
        <h6
          style={{ lineHeight: "12px" }}
          className="font-sans  text-green-700 text-lg font-bold mt-0  "
        >
          Here are Students Reviews
        </h6>
      </div>

      <Slider {...settings}>
        {Allreview?.map((review: any, i: number) => (
          <div key={i} className="px-2 cursor-pointer">
            <div className="relative flex w-full max-w-[22rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                <Image
                  width={40}
                  height={40}
                  src={review?.user?.profileImg}
                  alt="tania andrew"
                  className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <p>Rating: {review?.rating}</p>
              </div>
              <div className="mb-6 p-0">
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
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
