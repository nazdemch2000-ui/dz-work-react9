import { useState } from "react";

function SearchByCoords({ onSearch }) {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lat !== "" && lon !== "") {
      onSearch({ latitude: Number(lat), longitude: Number(lon) });
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__label">Введіть координати</label>
      <div className="search-form__row">
        <input
          className="search-form__input"
          type="number"
          placeholder="Широта"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          className="search-form__input"
          type="number"
          placeholder="Довгота"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
        />
        <button className="search-form__button" type="submit">
          Знайти
        </button>
      </div>
    </form>
  );
}

export default SearchByCoords;
