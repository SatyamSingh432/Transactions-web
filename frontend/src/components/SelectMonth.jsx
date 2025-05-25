import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { getTransactions } from "../utils/Apis";
const months = [
  ["January", 1],
  ["February", 2],
  ["March", 3],
  ["April", 4],
  ["May", 5],
  ["June", 6],
  ["July", 7],
  ["August", 8],
  ["September", 9],
  ["October", 10],
  ["November", 11],
  ["December", 12],
];

const SelectMonth = ({ setMonth }) => {
  const changeHandler = async (val) => {
    setMonth(val);
    // try {
    //   const res = await getTransactions(val);
    //   setListData(res);
    //   console.log(res);
    // } catch (error) {
    //   console.error(`somenting went wrong in select month ${error}`);
    // }
  };
  return (
    <Select onValueChange={changeHandler}>
      <SelectTrigger className="w-[200px] border border-black cursor-pointer">
        <SelectValue placeholder="Select a month" />
      </SelectTrigger>
      <SelectContent className="max-h-48 overflow-y-auto ">
        {months.map((month, index) => (
          <SelectItem key={index} value={month[1]}>
            {month[0]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectMonth;
