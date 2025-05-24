import React from "react";
import { Button } from "./ui/button";
const TransactionList = () => {
  return (
    <div className=" grid grid-cols-[1fr_2fr_1fr] px-4 py-2 text-xs ">
      <div className="rounded-lg flex justify-center flex-col ">
        <div>
          <span className="text-base font-semibold">Amount:</span> 30$
        </div>
        <div>
          <span className="text-base font-semibold">Date:</span>01/03/2025
        </div>
      </div>
      <div className="">
        <span className="text-base font-semibold">Decription:</span> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ipsa ab minima, dicta,
        voluptates molestiae
      </div>
      <div className="flex justify-center gap-4 items-center ">
        <Button className="text-sm ">EDIT</Button>
        <Button className="text-sm ">DELETE</Button>
      </div>
      <hr className="col-span-3  border-gray-400" />
    </div>
  );
};

export default TransactionList;
