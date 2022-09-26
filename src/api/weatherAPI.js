<<<<<<< HEAD
import axios from 'axios';
=======
import { instance } from "./api";
>>>>>>> eadcae5 (feat: 지역명 입력 날씨API 요청)

const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

export const getWeather = async (lat, lng) => {
  const response = await instance.get(
    `weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
  );
  return response.data;
};
