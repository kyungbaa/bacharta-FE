import React from "react";
import styled from "styled-components";
import CharContainer from "./ChartContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TodayChartBox from "./TodayChartBox";

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainBorder>
          <MainBox>
            <MainBoxTitle>
              <BoxText>원하시는 통계를 차트로 확인하세요!</BoxText>
              <BoxText>수치로써 확인할 수 있습니다!</BoxText>
              <BoxText>날씨별 옷차림도 추천받아보세요!</BoxText>
              <BoxText style={{ fontSize: "20px" }}>
                {
                  "여러분들이 원하는 차트가 있습니다! \n원하시는 통계를 차트로 확인하세요!"
                }
              </BoxText>
            </MainBoxTitle>
            <CharContainer />
          </MainBox>
        </MainBorder>
        <TodayChartContainer>
          <TodayChartTitle>오늘의 차트 구경</TodayChartTitle>
          <TodayChartBox />
        </TodayChartContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.sideColor};
`;

const MainBorder = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  margin: 0 5%;
`;

const MainBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.mainColor};
  margin: 0 20%;
  height: 50%;
`;

const MainBoxTitle = styled.div`
  color: white;
  padding: 20px;
  margin-top: 100px;
  width: 50%;
  height: 680px;
  white-space: pre-wrap;
`;

const BoxText = styled.p`
  color: white;
  margin-bottom: 25px;
  font-size: 28px;
`;

const TodayChartContainer = styled.div`
  height: 650px;
  margin: 150px 0;
  background-color: ${(props) => props.theme.sideColor};
`;

const TodayChartTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-left: 300px;
`;
export default Main;
