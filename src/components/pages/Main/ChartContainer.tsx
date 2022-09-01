import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
  const date = new Date();
  const fullDay = `${date.getFullYear()}${
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
  console.log(fullDay);

  useEffect(() => {
    axios
      .get(
        `https://unipass.customs.go.kr:38010/ext/rest/trifFxrtInfoQry/retrieveTrifFxrtInfo?crkyCn=${process.env.REACT_APP_EXCHANGE_KEY}&qryYymmDd=${fullDay}&imexTp=2`
      )
      .then((res) => console.log(res.data));
  }, []);

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
          <div>
            <h3 style={contentStyle}>3</h3>
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
