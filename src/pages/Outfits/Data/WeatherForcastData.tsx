import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

const Main = {
  temp: 0,
  feels_like: 0,
  temp_min: 0,
  temp_max: 0,
  pressure: 0,
  sea_level: 0,
  grnd_level: 0,
  humidity: 0,
  temp_kf: 0,
};
const Weather = [
  {
    id: 0,
    main: "",
    description: "",
    icon: "",
  },
];
const Clouds = {
  all: 0,
};

const Wind = {
  speed: 0,
  deg: 0,
  gust: 0,
};

const Sys = {
  pod: "",
};

export const WeatherForcastState = atom({
  key: `userState/${uuidv4()}`,
  default: {
    dt: 0,
    main: Main,
    weather: Weather,
    clouds: Clouds,
    wind: Wind,
    from: 0,
    pop: 0,
    sys: Sys,
    dt_txt: "",
  },
});
