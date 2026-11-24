import { fetchWeather } from "../src/api/weather";
import { useQuery } from "@tanstack/react-query";

export const useWeather = (coords) => {
  return useQuery({
    queryKey: ["weather", coords?.latitude, coords?.longitude],
    queryFn: () => fetchWeather(coords.latitude, coords.longitude),
    enabled: !!coords,
  });
};
