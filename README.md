# Weather Forecast Application

This is a weather forecast application built with [Next.js](https://nextjs.org), designed to display current weather conditions and weekly forecasts. The project uses mock data and includes responsive components for a seamless user experience.

## Features

- **Current Weather**: Displays the current weather conditions, including temperature, humidity, and wind speed.
- **Weekly Forecast**: Provides a detailed forecast for the upcoming week.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Custom Components**: Includes reusable components such as `WeeklyForecast` and `TempChart`.

## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/your-repo/weather-fe.git
cd weather-fe
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- **`components/`**: Contains reusable React components such as `WeeklyForecast` and `TempChart`.
- **`lib/mock/forecast.json`**: Mock data for weather forecasts.
- **`utils/types/weather.ts`**: Type definitions for the forecast data.
- **`pages/`**: Next.js pages for routing.

## Technologies Used

- [Next.js](https://nextjs.org) - React framework for building web applications.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for styling.
- [Recharts](https://recharts.org) - Charting library for visualizing temperature data.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to style your application.
- [Recharts Documentation](https://recharts.org/en-US/guide) - Learn how to create charts.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Feedback and Contributions

Feel free to open issues or submit pull requests to improve the project. Your feedback is welcome!
