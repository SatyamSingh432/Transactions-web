import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SelectMonth = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px] border border-black">
        <SelectValue placeholder="Select a month" />
      </SelectTrigger>
      <SelectContent className="max-h-48 overflow-y-auto">
        {months.map((month, index) => (
          <SelectItem key={index} value={month.toLowerCase()}>
            {month}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMonth;
