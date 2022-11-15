import React, { useEffect } from 'react';
import styled from 'styled-components';
import OutfitsResult from '../../components/Outfits/OutfitsResult';
import TempChart from './components/TempChart';
import TempIcon from './components/TempIcon';
import { useRecoilState } from 'recoil';
import { OutfitsWeatherState } from './Data/UserOutfitsData';
import { WeatherForcastState } from './Data/WeatherForcastData';
import { tokenStorage } from '../../storage/storage';
import { useQuery } from '@tanstack/react-query';
import { getTodayWeather } from '../../api/weatherAPI';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';

const Result = () => {
  const [weather] = useRecoilState(OutfitsWeatherState);
  const currentLocation = weather.coord;
  const [, setWeatherForcast] = useRecoilState(WeatherForcastState);
  const userLocation = tokenStorage.get('location');
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    if (!tokenStorage.get('access_token')) {
      window.location.href = KAKAO_AUTH_URL;
    }
  });

  const { isLoading, isError } = useQuery(['gettodayweather'], () => {
    getTodayWeather(currentLocation.lat, currentLocation.lon).then(function (
      response
    ) {
      setWeatherForcast({
        city: response.data.city.name,
        list: response.data.list,
      });
    });
  });

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  return (
    <ResultWrapper>
      <ResultContents>
        <OutfitsResultWrap>
          <Title>오늘 이런 복장을 추천해요!</Title>
          <OutfitsResult />
        </OutfitsResultWrap>
        <ChartsWrap>
          <Title>{`${userLocation}의 날씨 예보`}</Title>
          <TempIcon />
          <TempChart />
        </ChartsWrap>
      </ResultContents>
    </ResultWrapper>
  );
};
const ResultWrapper = styled.div`
  ${({ theme }) => theme.flexMixin('', 'center')}
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
