import React from "react";
import { Button } from "./ui/button";
import Form from "./Form";
const TransactionList = () => {
  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr] px-4 py-2 text-xs gap-1 ">
      <div className="rounded-lg flex justify-start gap-4 items-center ">
        <div>
          <span className="text-sm font-semibold ">Amount:</span> 30$
        </div>
        <div>
          <span className="text-sm font-semibold">Date:</span>01/03/2025
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm font-semibold pr-2">Decription:</span> Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ipsa ab minima,
        dicta, voluptates molestiae
      </div>
      <div className="flex justify-center gap-4 items-center ">
        {/* <Button className="text-sm  ">EDIT</Button>
         */}
        <Form showbtn="EDIT" title="Edit Transaction" btnName="Save Changes" />
        <Button className="text-sm ">DELETE</Button>
      </div>
      <hr className="col-span-3  border-gray-400" />
    </div>
  );
};

export default TransactionList;
