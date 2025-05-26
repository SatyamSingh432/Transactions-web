import React from "react";
import { useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FF9304", "#FDE006", "#A000FF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChartFig({
  fullData,
  pieChartData,
  setPieChartData,
}) {
  useEffect(() => {
    if (fullData.length > 0) {
      const newData = [
        { category: "travel", value: 0 },
        { category: "Food", value: 0 },
        { category: "Entertainment", value: 0 },
      ];

      fullData.forEach((ele) => {
        const match = newData.find((d) => d.category === ele.category);
        if (match) {
          match.value += Number(ele.amount);
        }
      });
      console.log(newData);
      setPieChartData(newData);
    }
  }, [fullData]);

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={pieChartData}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {pieChartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
