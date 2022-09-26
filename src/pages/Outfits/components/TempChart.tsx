import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { WeatherForcastState } from "../Data/WeatherForcastData";
import { Line } from "react-chartjs-2";
import { TempChartProps } from "../types/TempChartType";
import { lineOptions, lineData } from "../Data/TempChartData";

const TempChart = ({
  TempChartProps,
}: {
  TempChartProps: TempChartProps[];
}) => {
  const [todayWeatherForcast] = useRecoilState(WeatherForcastState);
  console.log(todayWeatherForcast);

  return (
    <Wrap>
      <Line data={lineData} options={lineOptions} />
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => theme.flexMixin("center", "space-between")}
  background-color: ${(props) => props.theme.white};
  padding: 40px 70px;
  width: 100%;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.lowModalShadow};
`;

export default TempChart;
