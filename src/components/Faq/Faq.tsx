"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { useGetAllfaqQuery } from "@/redux/api/FAQApi/faqApi";

// const text = (
//   <p style={{ paddingLeft: 24 }}>
//     A dog is a type of domesticated animal. Known for its loyalty and
//     faithfulness, it can be found as a welcome guest in many households across
//     the world.
//   </p>
// );

// const items: CollapseProps["items"] = [
//   {
//     key: "1",
//     label: "This is panel header 1",
//     children: text,
//   },
//   {
//     key: "2",
//     label: "This is panel header 2",
//     children: text,
//   },
//   {
//     key: "3",
//     label: "This is panel header 3",
//     children: text,
//   },
// ];

const Faq = () => {
  const { data, error } = useGetAllfaqQuery({});
  const items: CollapseProps["items"] = data?.map((faq: any) => {
    return {
      key: faq?.id,
      label: faq?.question,
      children: faq?.answer,
    };
  });
  console.log(data);
  return (
    <div className="lg:w-9/12 mx-auto my-8">
      <p className="font-bold"> FreQuently Asked Question</p>
      <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
    </div>
  );
};

export default Faq;
