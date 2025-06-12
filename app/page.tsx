import { CurrentWeather } from "@/components/CurrentWeather";
import { HourlyForecast } from "@/components/HourlyForecast";
import { Location } from "@/components/Location";
import { WeeklyForecast } from "@/components/WeeklyForecast";
import { getWeatherApiUrl } from "@/lib/api/base";
import { delay } from "@/utils/utils";
import React, { Suspense } from "react";

const fetchWeatherData = async (url: string) => {
  try {
    delay(2000);
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null; // Return null or handle fallback data
  }
};

export default async function Home() {
  const weatherUrl = getWeatherApiUrl("current.json", {
    q: "Ho Chi Minh",
    aqi: "no",
  });

  const forecastUrl = getWeatherApiUrl("forecast.json", {
    q: "Ho Chi Minh",
    days: 7,
    aqi: "no",
    alerts: "no",
  });

  // Fetch both APIs in parallel
  const [weather, forecast] = await Promise.all([
    fetchWeatherData(weatherUrl),
    fetchWeatherData(forecastUrl),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black text-white">
      <div>
        <Location />
        <div className="flex flex-col xl:flex-row items-center justify-between p-4">
          <Suspense fallback={<p>Loading current weather...</p>}>
            {weather ? (
              <CurrentWeather weather={weather} />
            ) : (
              <p>Error loading current weather.</p>
            )}
          </Suspense>
          <Suspense fallback={<p>Loading weekly forecast...</p>}>
            {forecast ? (
              <WeeklyForecast forecast={forecast} />
            ) : (
              <p>Error loading weekly forecast.</p>
            )}
          </Suspense>
        </div>
        <HourlyForecast />
      </div>
    </div>
  );
}
