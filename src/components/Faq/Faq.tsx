"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useGetAllfaqQuery } from "@/redux/api/FAQApi/faqApi";

const Faq = () => {
  const { data, error } = useGetAllfaqQuery({});
  const items: CollapseProps["items"] = data?.map((faq: any) => {
    return {
      key: faq?.id,
      label: faq?.question,
      children: faq?.answer,
    };
  });
  // console.log(data);
  return (
    <div className="lg:w-9/12 mx-auto my-10">
      <div>
        <p className="font-bold my-3 text-lg text-center">
          {" "}
          FreQuently Asked Question
        </p>
        <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
      </div>
    </div>
  );
};

export default Faq;
