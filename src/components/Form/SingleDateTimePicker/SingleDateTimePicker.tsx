import React from "react";
import { DatePicker, Space, message } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import { useUpdateSingleBookingMutation } from "@/redux/api/bookingApi/bookingApi";

const { RangePicker } = DatePicker;

const SingleDateTimePicker = ({
  defaultValue,

  field,
  id,
}: any) => {
  const [updateSingleBooking] = useUpdateSingleBookingMutation();

  const handleUpdateDate = async (value: any, field: string, id: string) => {
    const res = await updateSingleBooking({ data: { [field]: value }, id: id });
    console.log("func", value, field, id);
    console.log("res", res);
    // @ts-ignore
    if (res?.data?.id) {
      message.success("date time updated successfully");
    }
  };

  const defaultDateTime = dayjs(defaultValue);
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    if (Array.isArray(value)) {
      const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      console.log("Selected Time: ", { start, end });
    } else {
      const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      console.log("Selected Time: ", formattedValue);
    }
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    if (Array.isArray(value)) {
      const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      console.log("onOk: ", { start, end });
    } else {
      const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      handleUpdateDate(formattedValue, field, id);
      console.log("onOk: ", formattedValue);
    }
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        showTime
        onChange={onChange}
        onOk={onOk}
        defaultValue={defaultDateTime}
        style={{ width: "160px" }}
      />
    </Space>
  );
};

export default SingleDateTimePicker;
