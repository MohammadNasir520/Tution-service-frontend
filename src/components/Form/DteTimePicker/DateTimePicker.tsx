import React from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const onChange = (
  value: DatePickerProps["value"] | RangePickerProps["value"],
  dateString: [string, string] | string
) => {
  if (Array.isArray(value)) {
    const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    console.log("Selected Time: ", { start, end });
    console.log("Formatted Selected Time: ", dateString);
  } else {
    const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    console.log("Selected Time: ", formattedValue);
    console.log("Formatted Selected Time: ", dateString);
  }
};

const onOk = (value: DatePickerProps["value"] | RangePickerProps["value"]) => {
  if (Array.isArray(value)) {
    const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    console.log("onOk: ", { start, end });
  } else {
    const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    console.log("onOk: ", formattedValue);
  }
};

const BookingCard = () => {
  const defaultStartDate = dayjs("2023-10-15T10:00:00Z");
  const defaultEndDate = dayjs("2023-10-15T12:00:00Z");
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        showTime={{ format: "HH:mm" }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
        onOk={onOk}
        value={[defaultStartDate, defaultEndDate]}
      />
    </Space>
  );
};

export default BookingCard;
