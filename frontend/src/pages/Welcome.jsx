import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TransactionList from "../components/TransactionList";
import BarCharts from "../components/BarCharts";
import Form from "../components/Form";
import SelectMonth from "../components/SelectMonth";
const Welcome = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen p-6">
      <h1 className="text-2xl pb-4">Expense Tracker</h1>
      <div className="w-full h-[25%]">
        <BarCharts />
      </div>
      <div className="py-4 bg-white flex justify-center items-center rounded-lg">
        <Form showbtn="+ Add Expense" title="Save Transaction" btnName="Save" />
      </div>
      <h1 className="text-2xl pb-4 pt-4">Transactions</h1>
      <div className="bg-white rounded-lg flex flex-col gap-4 p-4 ">
        <div className="w-full flex justify-end">
          <SelectMonth className="bg-white-500 " />
        </div>

        <ScrollArea className="h-60  rounded-md border ">
          {[...Array(10)].map((_, index) => {
            return <TransactionList key={index} />;
          })}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Welcome;
