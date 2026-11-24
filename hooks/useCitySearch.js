import { fetchWeather, fetchCityCoords } from "../src/api/weather";
import { useQuery } from "@tanstack/react-query";

export const useCitySearch = (name) => {
  return useQuery({
    queryKey: ["weather", "city", name],
    queryFn: async () => {
      const coords = await fetchCityCoords(name);
      return await fetchWeather(coords.latitude, coords.longitude);
    },
    enabled: !!name,
  });
};
