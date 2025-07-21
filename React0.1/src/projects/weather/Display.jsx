import React from "react";

const Display = ({ weather }) => {
  const sunTime = (time) => {
    let mul = 1000;
    let h = new Date(time * mul).getHours();
    let m = new Date(time * mul).getMinutes();
    let s = new Date(time * mul).getSeconds();
    let t = h + ":" + m + ":" + s;
    return t;
  };

  const getTodayDate = (date)=>{
    let mul = 1000;
    let d = new Date(date*mul).getDate()
    let m = new Date(date*mul).getMonth()
    return d+'-'+m
  }
  return (
    <div>
      <div style={{
        display:"flex",
        gap:'5rem',
        alignItems:'center',
        marginLeft:'3rem'
      }}>
        <h1>{weather.name}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="icon"
      />
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Weather</th>
            <th>Description</th>
            <th>Temp</th>
            <th>MinTemp</th>
            <th>MaxTemp</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
            <th>Visibility</th>
            <th>Sunrise</th>
            <th>Sunset</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{getTodayDate(weather.dt)}</td>
            <td>{weather.weather[0].main}</td>
            <td>{weather.weather[0].description}</td>
            <td>{weather.main.temp}℃</td>
            <td>{weather.main.temp_min}℃</td>
            <td>{weather.main.temp_max}℃</td>
            <td>{weather.main.humidity}%</td>
            <td>{weather.wind.speed}m/s</td>
            <td>{weather.visibility/1000}km</td>
            <td>{sunTime(weather.sys.sunrise)}</td>
            <td>{sunTime(weather.sys.sunset)}</td>
          </tr>
        </tbody>
      </table>
      {/* <td>{weather.weather[0].main}</td>
      <td>{weather.weather[0].description}</td>
      <td>Temp: {weather.main.temp}℃</td>
      <td>Min Temp: {weather.main.temp_min}℃</td>
      <td>Max Temp: {weather.main.temp_max}℃</td>
      <td>Humidity: {weather.main.humidity}%</td>
      <td>Wind Speed: {weather.wind.speed}m/s</td>
      <td>Sunrise: {sunTime(weather.sys.sunrise)}</td>
      <td>Sunset: {sunTime(weather.sys.sunset)}</td> */}
    </div>
  );
};

export default Display;
