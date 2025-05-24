import React from "react";
import { Button } from "../components/ui/button";
import TransactionList from "../components/TransactionList";
import BarCharts from "../components/BarCharts";
import Form from "../components/Form";
const Welcome = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen p-6">
      <h1 className="text-2xl pb-4">Expense Tracker</h1>
      <div className="w-full h-[25%]">
        <BarCharts />
      </div>
      <div className="py-4 bg-white flex justify-center items-center rounded-lg">
        <Form />
      </div>
      <h1 className="text-2xl pb-4 pt-4">Transactions</h1>

      <div className="bg-white rounded-lg">
        <TransactionList />
        <TransactionList />
        <TransactionList />
        <TransactionList />
        <TransactionList />
      </div>
    </div>
  );
};

export default Welcome;
