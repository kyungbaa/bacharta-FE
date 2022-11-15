import axios from 'axios';

const WEATHER_URL = process.env.REACT_APP_OPEN_WEATHER_URL;

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const instance = axios.create({
  baseURL: WEATHER_URL,
});

export const getLocationWeather = async (userLocation: string | null) => {
  const response = await instance.get(
    `/weather?q=${userLocation}&appid=${apiKey}&units=metric`
  );
  return response;
};

export const getTodayWeather = async (lat: number, lon: number) => {
  const response = await instance.get(
    `/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  return response;
};
