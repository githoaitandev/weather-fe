import React from "react";
import Lottie from "lottie-react";
import rain from "@/public/Rain.json";
import cloud from "@/public/PartlyCloudy.json";
import patchyRain from "@/public/PatchyRain.json";

type WeatherCondition = "Rain" | "Thunderstorm" | "Clouds";

interface WeatherAnimationProps {
  condition: WeatherCondition;
}

const animationMap: Record<any, any> = {
  "Patchy rain nearby": patchyRain,
  "Patchy light rain": patchyRain,
  "Partly Cloudy": cloud,
  "Light rain shower": cloud,
  Cloudy: cloud,
  "Moderate rain": rain,
  "Moderate rain at times": rain,
  Overcast: rain,
};

export const WeatherAnimation: React.FC<any> = ({ condition }) => {
  const animationData = animationMap[condition] || rain;

  return (
    <div>
      <div className="sm:w-60 sm:h-60 lg:w-100 lg:h-100  mx-auto">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};
