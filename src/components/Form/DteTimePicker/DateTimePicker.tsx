import React from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";

const DateTimePicker = ({
  setBookingData,
  bookingData,
  startTime,
  endTime,
}: any) => {
  const { RangePicker } = DatePicker;
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    if (Array.isArray(value)) {
      const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";

      setBookingData({ ...bookingData, startTime: start, endTime: end });
    } else {
      const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    }
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    if (Array.isArray(value)) {
      const start = dayjs(value[0]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
      const end = dayjs(value[1]).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    } else {
      const formattedValue = dayjs(value).format("YYYY-MM-DDTHH:mm:ss") + "Z";
    }
  };
  const defaultStartDate = dayjs(startTime);
  const defaultEndDate = dayjs(endTime);

  return (
    <Space direction="horizontal" size={8}>
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

export default DateTimePicker;
