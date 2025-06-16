import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const BarCharts = ({ listData }) => {
  const monthlyTotals = [
    { name: "Jan", amt: 0 },
    { name: "Feb", amt: 0 },
    { name: "Mar", amt: 0 },
    { name: "Apr", amt: 0 },
    { name: "May", amt: 0 },
    { name: "Jun", amt: 0 },
    { name: "Jul", amt: 0 },
    { name: "Aug", amt: 0 },
    { name: "Sept", amt: 0 },
    { name: "Oct", amt: 0 },
    { name: "Nov", amt: 0 },
    { name: "Dec", amt: 0 },
  ];

  const [chartData, setChartData] = useState(monthlyTotals);
  useEffect(() => {
    const getMonthlyTotals = (listData) => {
      listData.forEach((item) => {
        const date = new Date(item.date);
        const month = date.toLocaleString("default", { month: "short" });
        monthlyTotals.map((ele) => {
          if (month === ele.name) {
            ele.amt += Number(item.amount);
          }
        });
      });
      return monthlyTotals;
    };
    const data1 = getMonthlyTotals(listData);
    setChartData(data1);
  }, [listData]);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={50} height={40} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="amt" fill="#A000FF" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
