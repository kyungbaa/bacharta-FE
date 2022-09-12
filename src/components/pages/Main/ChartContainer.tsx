import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import "antd/dist/antd.min.css";

const ChartContainer = () => {
  return (
    <>
      <ChartBox>
        <Carousel autoplay>
          <ChartContent>1</ChartContent>
          <ChartContent>2</ChartContent>
          <ChartContent>3</ChartContent>
        </Carousel>
      </ChartBox>
    </>
  );
};

export default ChartContainer;

const ChartBox = styled.div`
  width: 50%;
  background-color: red;
`;

const ChartContent = styled.div`
  width: 350px;
  height: 350px;
  background-color: green;
  color: white;
  font-size: 30px;
`;
