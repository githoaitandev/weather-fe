import { CurrentWeather } from "@/components/CurrentWeather";
import { HourlyForecast } from "@/components/HourlyForecast";
import { Location } from "@/components/Location";
import { WeeklyForecast } from "@/components/WeeklyForecast";

export default async function Home() {
  const weatherRes = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Ho Chi Minh&aqi=no`,
    { cache: "default" }
  );
  const forecastRes = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=Ho Chi Minh&days=7&aqi=no&alerts=no
`,
    { cache: "default" }
  );

  const weather = await weatherRes.json();
  const forecast = await forecastRes.json();
  console.log(weather);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black text-white">
      <div className=" ">
        <Location />
        <div className="flex flex-col xl:flex-row items-center justify-between p-4">
          <CurrentWeather weather={weather} />
          <WeeklyForecast forecast={forecast} />
        </div>
        <HourlyForecast />
      </div>
    </div>
  );
}
