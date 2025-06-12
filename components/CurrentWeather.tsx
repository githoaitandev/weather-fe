"use client";
import { WeatherResponse } from "@/utils/types/weather";
import currentWeather from "../lib/mock/currentWeather.json";
import { Wind, CloudFog } from "lucide-react";
import { WeatherAnimation } from "./WeatherAnimation";

export const CurrentWeather = (props: any) => {
  const { weather } = props;
  const weatherData: WeatherResponse = weather;
  return (
    <section
      id="current-weather"
      className="flex flex-col items-start sm:w-full lg:w-3/4 p-4"
    >
      <div className="current-weather-wrapper px-10 w-full flex">
        {currentWeather ? (
          <>
            <div className="weather-info flex flex-col justify-center items-center sm:w-full lg:w-2/5">
              <div>
                <p className="text-5xl md:text-6xl xl:text-8xl">
                  {weatherData.current.temp_c}&deg;C
                </p>
                <p
                  id="condition-of-weather"
                  className="mt-2 text-center sm:text-left text-xl xl:text-3xl font-medium"
                >
                  {weatherData.current.condition.text}
                </p>
              </div>

              <div className="flex justify-center gap-10 wind-and-humidity mt-6 w-full">
                <div className="wind-item flex flex-col">
                  <span className="text-sm flex">
                    <Wind size={"16px"} className="mr-0.5" />
                    Wind:{" "}
                  </span>
                  <span className="text-lg font-bold">
                    {weatherData.current.wind_kph} km/h
                  </span>
                </div>
                <div className="humidity-item flex flex-col sm:items-center lg:items-start">
                  <span className="text-sm flex">
                    <CloudFog size={"16px"} className="mr-0.5" />
                    Humidity:{" "}
                  </span>
                  <span className="text-lg font-bold">
                    {weatherData.current.humidity}%
                  </span>
                </div>
              </div>
            </div>
            <div className="image-weather w-full">
              <WeatherAnimation
                condition={weatherData.current.condition.text}
              />
            </div>
          </>
        ) : (
          <p className="text-gray-500">No weather data available.</p>
        )}
      </div>
    </section>
  );
};
