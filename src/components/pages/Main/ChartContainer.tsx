import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import "antd/dist/antd.min.css";

const ChartContainer = () => {
  const contentStyle: React.CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "300px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <ChartBox>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
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
