const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";
const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function fetchWeather(latitude, longitude) {
  const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Не удалось загрузить погоду");
  }

  const data = await response.json();
  return data.current_weather;
}

export async function fetchCityCoords(name) {
  const url = `${GEOCODING_URL}?name=${encodeURIComponent(
    name,
  )}&count=1&language=ru&format=json`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Не удалось найти город");
  }

  const data = await response.json();
  const city = data.results?.[0];
  if (!city) {
    throw new Error("Город не найден");
  }

  return {
    latitude: city.latitude,
    longitude: city.longitude,
    name: city.name,
    country: city.country,
  };
}
