export const getWeatherApiUrl = (
  endpoint: string,
  params: Record<string, string | number>
) => {
  const baseUrl = "http://api.weatherapi.com/v1";
  const queryParams = new URLSearchParams({
    key: process.env.WEATHER_API_KEY || "",
    ...params,
  }).toString();

  return `${baseUrl}/${endpoint}?${queryParams}`;
};
