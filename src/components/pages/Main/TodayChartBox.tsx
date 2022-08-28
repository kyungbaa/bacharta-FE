import React from "react";
import styled from "styled-components";

const TodayChartBox = () => {
  return (
    <>
      <ChartContainer>
        <Chart></Chart>
        <Chart></Chart>
        <Chart></Chart>
      </ChartContainer>
    </>
  );
};

export default TodayChartBox;

const ChartContainer = styled.div``;

const Chart = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  width: 300px;
  height: 300px;
`;
