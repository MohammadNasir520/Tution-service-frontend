"use client";

import BookDetailsCard from "@/components/ServiceDetails/ServiceDetailsCard";
import ReviewsSection from "@/components/ServiceDetails/ReviewsSectionCard";
import React from "react";
import ServiceDetailsCard from "@/components/ServiceDetails/ServiceDetailsCard";

const ServiceDetailsPage = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <div className="min-h-screen ">
      <ServiceDetailsCard params={params}></ServiceDetailsCard>
      <ReviewsSection params={params}></ReviewsSection>
    </div>
  );
};

export default ServiceDetailsPage;
