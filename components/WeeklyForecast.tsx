import Image from "next/image";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WeeklyForecast = (props: any) => {
  const { forecast } = props;
  return (
    <section
      id="weekly-forecast"
      className="flex flex-col items-end w-full xl:w-1/4 p-4"
    >
      <div className="bg-gray-700 opacity-90 p-5 rounded-lg shadow-md w-full max-w-6xl mx-auto">
        <h1 className="text-lg lg:text-xl xl:text-2xl font-bold mb-6 text-center text-white">
          Weekly Forecast
        </h1>
        <div className="list-forecast">
          <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-3 gap-6">
            {forecast.forecast?.forecastday ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              forecast.forecast.forecastday.map((item: any, index: any) => {
                return (
                  <li
                    key={index}
                    className="flex flex-col items-center bg-gray-800 p-4 rounded-lg lg:rounded-xl shadow-md text-center"
                  >
                    <Image
                      src={item.day.condition.icon}
                      alt={item.day.condition.text}
                      className="w-8 h-8 md:w-14 md:h-14 mb-2"
                    />
                    <span className="text-white font-semibold text-xs xl:text-sm mb-1 truncate w-full">
                      {item.date}
                    </span>
                    <p className="text-gray-300 text-xs md:text-sm  mb-1 whitespace-nowrap truncate w-full">
                      {item.day.condition.text}
                    </p>
                    <span className="text-white font-bold text-sm xl:text-lg">
                      {item.day.maxtemp_c}&deg;C
                    </span>
                  </li>
                );
              })
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No forecast data available.
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
