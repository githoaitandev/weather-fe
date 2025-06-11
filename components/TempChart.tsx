"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import forecast from "@/lib/mock/forecast.json";
import { getFormattedDateTime } from "@/utils/formatDate";

const findForecastByTime = () => {
  const today = getFormattedDateTime(); // YYYY-MM-DD
  return forecast.forecast.forecastday.find((item) => item.date == today);
};

const filterForecastByHours = (forecastHours: any, targetHours: number[]) => {
  return forecastHours.filter((h: any) => {
    const hour = new Date(h.time).getHours();
    return targetHours.includes(hour);
  });
};

const getCurrentHourString = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate()
  )} ${pad(now.getHours())}:00`;
};

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  const currentHour = new Date(getCurrentHourString()).getHours();
  let target = new Date(payload.time).getHours();
  if (target == 0) {
    target = 24;
  }

  const isNow = currentHour - target > -2 && currentHour - target <= 0;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={isNow ? 6 : 3}
      fill={isNow ? "#d9b437" : "#8884d8"}
      stroke="white"
      strokeWidth={isNow ? 2 : 1}
    />
  );
};
const CustomLabel = ({ x, y, value, index, data }: any) => {
  const hour = new Date(data[index].time).getHours();
  return (
    <g>
      <text x={x} y={y - 15} fill="#fff" fontSize={16} textAnchor="middle">
        {value}°C
      </text>
      <text x={x} y={y + 20} fill="#ccc" fontSize={15} textAnchor="middle">
        {hour}h
      </text>
    </g>
  );
};

export const TempChart = () => {
  const dataForecast = findForecastByTime();
  const targetHours = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22];
  const filteredHours = filterForecastByHours(dataForecast?.hour, targetHours);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={filteredHours}
          margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
        >
          <Line
            type="monotone"
            dataKey="temp_c"
            name="Temperature (°C)"
            dot={(props) => <CustomDot {...props} />}
            stroke="#8884d8"
            strokeWidth={4}
            label={(props) => <CustomLabel {...props} data={filteredHours} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
