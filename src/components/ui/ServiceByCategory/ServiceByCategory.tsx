// "use client";
// import React, { useState } from "react";
// import type { RadioChangeEvent } from "antd";
// import { Divider, Radio, Space, Tabs } from "antd";
// import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
// import ServiceCard from "../ServiceCard/ServiceCard";

// type TabPosition = "left" | "right" | "top" | "bottom";

// const ServiceByCategory = () => {
//   const query: Record<string, any> = {};

//   const { data, isLoading } = useGetAllServiceQuery({ ...query });
//   const services = data?.data;

//   const [tabPosition, setTabPosition] = useState<TabPosition>("left");

//   const changeTabPosition = (e: RadioChangeEvent) => {
//     setTabPosition(e.target.value);
//   };

//   // unique category getting

//   let filteredCategory = new Set();
//   services?.forEach((service: any) => {
//     filteredCategory.add(service.category);
//   });
//   const filteredCategoryArray = Array.from(filteredCategory) as string[];
//   console.log(filteredCategoryArray);

//   return (
//     <>
//       {/* <Space style={{ marginBottom: 24 }}>
//         Tab position:
//         <Radio.Group value={tabPosition} onChange={changeTabPosition}>
//           <Radio.Button value="top">top</Radio.Button>
//           <Radio.Button value="bottom">bottom</Radio.Button>
//           <Radio.Button value="left">left</Radio.Button>
//           <Radio.Button value="right">right</Radio.Button>
//         </Radio.Group>
//       </Space> */}
//       <Tabs
//         tabPosition={tabPosition}
//         {filteredCategoryArray?.map((category: any, i: number) => {
//           return (
//             <Tabs.TabPane tab={category} key={i}>
//               {services?.map((service: any, j: number) => (
//                 <ServiceCard key={j} service={service} />
//               ))}
//             </Tabs.TabPane>
//           );
//         })}
//       />
//     </>
//   );
// };

// export default ServiceByCategory;
"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Tabs } from "antd";
import { useGetAllServiceQuery } from "@/redux/api/serviceApi/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";

type TabPosition = "left" | "right" | "top" | "bottom";

const ServiceByCategory = () => {
  const query: Record<string, any> = {};

  const { data, isLoading } = useGetAllServiceQuery({ ...query });
  const services = data?.data;

  const [tabPosition, setTabPosition] = useState<TabPosition>("left");

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  // unique category getting

  let filteredCategory = new Set();
  services?.forEach((service: any) => {
    filteredCategory.add(service.category);
  });
  const filteredCategoryArray = Array.from(filteredCategory) as string[];

  return (
    <>
      <h1 className="font-bold text-xl text-center my-4">
        Check Our Services By Category
      </h1>
      <Tabs tabPosition={tabPosition}>
        {filteredCategoryArray?.map((category: string, i: number) => (
          <Tabs.TabPane tab={category} key={i}>
            <div
              key={i}
              className={`grid md:grid-cols-2 lg:grid-cols-3 lg:${() =>
                setTabPosition("left")}`}
            >
              {services
                ?.filter((s: any) => s.category == category)
                .map((service: any, j: number) => (
                  <ServiceCard key={j} service={service} />
                ))}
            </div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
};

export default ServiceByCategory;
