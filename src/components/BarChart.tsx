"use client";
import React from "react";
import {
  BarChart as Graph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
interface Props {}

const data = [
  {
    month: "Jan",
    totalWeight: 2,
  },
  {
    month: "Feb",
    totalWeight: 0.5,
  },
  {
    month: "Mar",
    totalWeight: 6,
  },
  {
    month: "Apr",
    totalWeight: 1,
  },
  {
    month: "May",
    totalWeight: 5,
  },
  {
    month: "Jun",
    totalWeight: 3,
  },
  {
    month: "Jul",
    totalWeight: 0.2,
  },
];
export default function BarChart(props: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <Graph data={data}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          color="#7B1FA2"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          color="#7B1FA2"
          fontSize={12}
        />
        <Bar dataKey={"totalWeight"} radius={[4, 4, 0, 0]} />
      </Graph>
    </ResponsiveContainer>
  );
}
