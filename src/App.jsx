import { useState } from "react";
import { useCitySearch } from "../hooks/useCitySearch";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import SearchByCity from "./components/SearchByCity";
import SearchByCoords from "./components/SearchByCoords";
import "./App.css";

function App() {
  const [mode, setMode] = useState("city");
  const [city, setCity] = useState("Київ");
  const [coords, setCoords] = useState(null);

  const cityQuery = useCitySearch(mode === "city" ? city : "");
  const coordsQuery = useWeather(mode === "coords" ? coords : null);

  const { data, isLoading, isError } = mode === "city" ? cityQuery : coordsQuery;

  const handleCity = (name) => {
    setCity(name);
    setMode("city");
  };

  const handleCoords = (value) => {
    setCoords(value);
    setMode("coords");
  };

  const title =
    mode === "city" ? city : `${coords?.latitude}, ${coords?.longitude}`;

  return (
    <div className="app">
      <h1 className="app__title">Погода</h1>

      <div className="app__forms">
        <SearchByCity onSearch={handleCity} />
        <SearchByCoords onSearch={handleCoords} />
      </div>

      {isLoading && <p className="app__status">Завантаження...</p>}
      {isError && (
        <p className="app__status app__status--error">
          Помилка завантаження погоди
        </p>
      )}
      {data && (
        <WeatherCard
          city={title}
          temperature={data.temperature}
          windspeed={data.windspeed}
        />
      )}
    </div>
  );
}

export default App;
