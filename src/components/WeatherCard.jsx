function WeatherCard({ city, temperature, windspeed }) {
  return (
    <div className="card">
      <h1 className="card__title">Погода: {city}</h1>
      <div className="card__row">
        <span className="card__label">Температура</span>
        <span className="card__value">{temperature}°C</span>
      </div>
      <div className="card__row">
        <span className="card__label">Вітер</span>
        <span className="card__value">{windspeed} км/год</span>
      </div>
    </div>
  );
}

export default WeatherCard;
