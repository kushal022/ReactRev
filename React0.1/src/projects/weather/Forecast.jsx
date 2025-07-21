import React from "react";

const Forecast = React.memo(({forecast }) => {
  // console.log(Forecast)
  const dt = (d) => {
    let mul = 1000;
    let month = new Date(d * mul).getMonth();
    let year = new Date(d * mul).getFullYear();
    let day = new Date(d * mul).getDay();
    let date = new Date(d * mul).getDate();

    return date + "/" + month + "/" + Number(year);
  };

  return (
    <div>
      <h3 style={{color:'green'}}>5 Days Forecast ( {forecast.city.name} )</h3>
      <table>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Icon</th>
            <th>Weather</th>
            <th>Description</th>
            <th>Rain</th>
            <th>Day/Night</th>
            <th>Temp</th>
            <th>MinTemp</th>
            <th>MaxTemp</th>
            <th>Humidity</th>
            <th>Visibility</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          {forecast &&
            forecast.list.map((item) => (
              <tr key={item.dt}>
                <td>{item.dt_txt}</td>
                <td>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="icon"
                  />
                </td>
                <td>{item.weather[0].main}</td>
                <td>{item.weather[0].description}</td>
                <td>{(item.rain && item.rain["3h"] + "mm") || "-"}</td>
                <td>{item.sys.pod == "d" ? "Day" : "Night"}</td>
                <td>{item.main.temp}℃</td>
                <td>{item.main.temp_min}℃</td>
                <td>{item.main.temp_max}℃</td>
                <td>{item.main.humidity}%</td>
                <td>{item.visibility / 1000}km</td>
                <td>{item.wind.speed}m/s</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
})

export default Forecast;
