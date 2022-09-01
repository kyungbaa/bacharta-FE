import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
const lineChartData = {
  labels: ["October", "November", "December"],
  datasets: [
    {
      data: [8137119, 9431691, 10266674],
      label: "Infected",
      borderColor: "#3333ff",
      fill: true,
      lineTension: 0.5,
    },
    {
      data: [1216410, 1371390, 1477380],
      label: "Deaths",
      borderColor: "#ff3333",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      fill: true,
      lineTension: 0.5,
    },
  ],
};

interface LineProps {
  type: string;
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const TodayChartBox = () => {
  return (
    <>
      <ChartContainer>
        <ChartCanvas />
        <ChartCanvas />
        <ChartCanvas />
      </ChartContainer>
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Chart = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 300px;
  height: 300px;
`;

const ChartCanvas = styled.canvas`
  margin: 30px 20px;
  background-color: red;
  width: 550px;
  height: 400px;
`;
