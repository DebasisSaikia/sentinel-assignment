import React from "react";
import { Bar } from "react-chartjs-2";
import { BarChartContainer, ChartHeading } from "./styles";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { graphData } from "@/data/graphData";

Chart.register(CategoryScale);

const headingData: { name: string; value: string }[] = [
  {
    name: "1D",
    value: "1D",
  },
  {
    name: "1M",
    value: "1M",
  },
  {
    name: "1Y",
    value: "1Y",
  },
];

const BarChart = () => {
  return (
    <BarChartContainer>
      <ChartHeading>
        <h1>Session Activity</h1>
        <div className="right-container">
          {headingData?.map((item, index) => {
            return (
              <div key={index} className="heading-box">
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>
      </ChartHeading>
      <Bar
        data={graphData}
        options={{
          animation: { delay: 0.5 },
          scales: { y: { beginAtZero: false } },
          datasets:{bar:{maxBarThickness: 20}}
        }}
      />
    </BarChartContainer>
  );
};

export default BarChart;
