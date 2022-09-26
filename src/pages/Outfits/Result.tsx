import React, { useEffect } from "react";
import styled from "styled-components";

import { UserSelectState } from "./Data/UserOutfitsData";
import OutfitsResult from "../../components/Outfits/OutfitsResult";
import TempChart from "./components/TempChart";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { OutfitsWeatherState } from "./Data/UserOutfitsData";
import { WeatherForcastState } from "./Data/WeatherForcastData";
// import { WeatherDataType } from "./types/WeatherDataType";

const Result = () => {
  // const navigate = useNavigate();
  const [userSelect] = useRecoilState(UserSelectState);
  const [weather] = useRecoilState(OutfitsWeatherState);

  const currentLocation = weather.coord;
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
  const [, setTodayWeatherForcast] = useRecoilState(WeatherForcastState);
  // / 왜 이거 또 안되는거야.......  하하하하
  // if (userSelect.userLocation.length === 0) {
  //   navigate("/outfits");
  // }
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLocation.lat}&lon=${currentLocation.lon}&appid=${apiKey}&units=metric`
      )
      .then(function (response) {
        setTodayWeatherForcast(response.data.list);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ResultWrapper>
      <ResultContents>
        <OutfitsResultWrap>
          <Title>오늘 이런 복장을 추천해요!</Title>
          <OutfitsResult />
        </OutfitsResultWrap>
        <ChartsWrap>
          <Title>{`${userSelect.userLocation}의 날씨 예보`}</Title>
          <TempChart />
        </ChartsWrap>
      </ResultContents>
    </ResultWrapper>
  );
};
const ResultWrapper = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
const ResultContents = styled.div`
  width: 1080px;
`;
const OutfitsResultWrap = styled.div`
  width: 100%;
  margin-top: 90px;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.mainColor};
`;

const ChartsWrap = styled.div`
  margin-top: 100px;
`;
export default Result;
