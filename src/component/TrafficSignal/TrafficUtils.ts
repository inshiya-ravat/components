import { Light } from "./TrafficSignal";

export function sortLights(lights:Light[]){
    return [...lights].sort((a,b)=>a.priority - b.priority)
}