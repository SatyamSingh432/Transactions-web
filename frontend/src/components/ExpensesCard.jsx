import React from "react";

const ExpensesCard = ({ pieChartData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border flex flex-col  p-6 pt-2 h-[90%] gap-2">
      <div className="pb-2">
        <span className="text-xl font-semibold ">Total Expense :</span>{" "}
        {pieChartData[0].value + pieChartData[1].value + pieChartData[2].value}$
      </div>
      <div className="border-2 rounded-sm p-1">
        <span className="text-sm md:text-md font-medium ">
          Amount spent on Travel:
        </span>{" "}
        {pieChartData[0].value}$
      </div>
      <div className="border-2 rounded-sm p-1">
        <span className="text-sm md:text-md font-medium">
          Amount spent on Food:
        </span>{" "}
        {pieChartData[1].value}$
      </div>
      <div className="border-2 rounded-sm p-1">
        <span className="text-sm md:text-md font-medium">
          Amount spent on Entertainment:
        </span>{" "}
        {pieChartData[2].value} $
      </div>
    </div>
  );
};

export default ExpensesCard;
