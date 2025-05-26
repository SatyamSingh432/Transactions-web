import React from "react";

const ExpensesCard = ({ pieChartData }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col  p-6 pt-4 h-[90%] gap-2">
      <div className="pb-2">
        <span className="text-2xl font-semibold ">Total Expense :</span>{" "}
        {pieChartData[0].value + pieChartData[1].value + pieChartData[2].value}$
      </div>
      <div className="border-2 rounded-sm">
        <span className="text-lg font-medium ">Amount spent on Travel :</span>{" "}
        {pieChartData[0].value} $
      </div>
      <div className="border-2 rounded-sm">
        <span className="text-lg font-medium">Amount spent on Food :</span>{" "}
        {pieChartData[1].value}$
      </div>
      <div className="border-2 rounded-sm">
        <span className="text-lg font-medium">
          Amount spent on Entertainment :
        </span>{" "}
        {pieChartData[2].value} $
      </div>
    </div>
  );
};

export default ExpensesCard;
