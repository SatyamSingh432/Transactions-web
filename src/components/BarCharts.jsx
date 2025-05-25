import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "MAY",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "JUN",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "JUL",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "AUG",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "SEP",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "OCT",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "NOV",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "DEC",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarCharts = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={50} height={40} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCharts;
