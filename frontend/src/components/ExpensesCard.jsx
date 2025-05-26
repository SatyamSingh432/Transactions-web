import React from "react";

const ExpensesCard = ({ pieChartData }) => {
  return (
    <div className="bg-[#D3D3D3] rounded-lg flex flex-col  p-6 pt-8 h-[90%]">
      <div className="pb-4">
        <span className="text-2xl font-semibold ">Total Expense :</span>{" "}
        {pieChartData[0].value + pieChartData[1].value + pieChartData[2].value}$
      </div>
      <div>
        <span className="text-lg font-medium">Amount spent on Travel :</span>{" "}
        {pieChartData[0].value} $
      </div>
      <div>
        <span className="text-lg font-medium">Amount spent on Food :</span>{" "}
        {pieChartData[1].value}$
      </div>
      <div>
        <span className="text-lg font-medium">
          Amount spent on Entertainment :
        </span>{" "}
        {pieChartData[2].value} $
      </div>
    </div>
  );
};

export default ExpensesCard;
