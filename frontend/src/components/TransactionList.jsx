import React from "react";
import { Button } from "./ui/button";
import Form from "./Form";
const TransactionList = ({ amount, date, description }) => {
  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr]  px-4 py-2 text-xs gap-y-1 ">
      <div className="rounded-lg flex justify-start gap-4 items-center ">
        <div>
          <span className="text-sm font-semibold ">Amount:</span>{" "}
          {`${amount} $`}
        </div>
        <div>
          <span className="text-sm font-semibold">Date:</span>
          {`${date}`}
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-semibold pr-2">Decription:</span>{" "}
        {`${description}`}
      </div>
      <div className="flex justify-center gap-4 items-center ">
        {/* <Button className="text-sm  ">EDIT</Button>
         */}
        <Form showbtn="EDIT" title="Edit Transaction" btnName="Save Changes" />
        <Button className="text-sm cursor-pointer">DELETE</Button>
      </div>
      <hr className="col-span-3  border-gray-400" />
    </div>
  );
};

export default TransactionList;
