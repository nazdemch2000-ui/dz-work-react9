import { useState } from "react";

function SearchByCity({ onSearch }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSearch(name.trim());
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-form__label">Введіть місто</label>
      <div className="search-form__row">
        <input
          className="search-form__input"
          type="text"
          placeholder="Назва міста"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="search-form__button" type="submit">
          Знайти
        </button>
      </div>
    </form>
  );
}

export default SearchByCity;
