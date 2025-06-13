import { useEffect, useState } from "react";
import "./TrafficSignal.css";
import { sortLights } from "./TrafficUtils";

export type Light = {
  colour:string,
  duration:number,
  priority:number
}
const lights:Light[] = [
    {
        colour:'red',
        duration: 2,
        priority:3,
    },
    {
        colour:'yellow',
        duration: 4,
        priority: 2,
    },
    {
        colour:'green',
        duration: 3,
        priority: 1,
    },
]
const sortedLights = sortLights(lights);
const TrafficSignal = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex((prev) => {
        return (prev+1) % lights.length ;
      });
    }, sortedLights[activeIndex].duration * 1000);
  }, [activeIndex]);

  return (
    <div className="container">
      {lights.map((light) => (
        <div
          key={light.colour}
          className={`light ${light.colour === sortedLights[activeIndex].colour ? light.colour : "off"}`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficSignal;
