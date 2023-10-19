"use client";
import BookingCard from "@/components/BookingCard/BookingCard";
import React from "react";

const Booking = ({ params }: any) => {
  return (
    <div className="text-lg h-screen">
      <h1>Select Your Time slot to Booking</h1>
      <div>
        <BookingCard></BookingCard>
      </div>
    </div>
  );
};

export default Booking;
