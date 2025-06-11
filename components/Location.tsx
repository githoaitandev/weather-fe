import { WeatherResponse } from "@/utils/types/weather";
import currentWeather from "../lib/mock/currentWeather.json";

export const Location = () => {
  const weatherData: WeatherResponse = currentWeather;

  return (
    <section className="w-full h-[80px] flex items-center justify-center bg-transparent">
      <h1 className="font-medium">
        {weatherData.location.name}, {weatherData.location.country}
      </h1>
    </section>
  );
};
