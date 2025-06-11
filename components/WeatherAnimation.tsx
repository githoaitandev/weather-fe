import React from "react";
import Lottie from "lottie-react";
// Import JSON animation files
import rain from "@/public/Animation - 1749393410865.json";

type WeatherCondition = "Clear" | "Rain" | "Thunderstorm" | "Snow" | "Clouds";

interface WeatherAnimationProps {
  condition: WeatherCondition;
}

const animationMap: Record<any, any> = {
  //   Clear: clearDay,
  Rain: rain,
  //   Thunderstorm: thunderstorm,
  //   Snow: snow,
  //   Clouds: cloud,
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
