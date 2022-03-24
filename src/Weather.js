import { useState, useEffect } from "react";
function WeatherBox() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const [state, setState] = useState([]);
  const forecast = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=hourly,minutely&units=metric&&appid=6322f73fff5d520738ef29d4dc21abcd"
    )
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    forecast();
  }, []);
  const today = state.daily ? state.daily[0].temp.day : 0;
  const todayIcon = state.daily ? state.daily[0].weather[0].icon : "";
  const forecastArray = state.daily ? state.daily.slice(1, 7) : [];
  console.log(forecastArray);
  return (
    <div id="weekBox">
      <div id="today">
        <div id="icon1">
          <img
            id="img1"
            alt="unavailable"
            src={" http://openweathermap.org/img/wn/" + todayIcon + "@2x.png"}
          ></img>
        </div>
        <div id="weekday1">
          <div className="todoList">
            <p>TODAY</p>
          </div>
          <div>
            <p id="temp1">{Math.round(today)}°</p>
          </div>
        </div>
      </div>
      {(forecastArray || []).map(function (item, index) {
        const d = new Date(forecastArray[index].dt * 1000);
        return (
          <div className="daysBox">
            <div className="weekday">
              <div className="todoList">
                <p>{days[d.getDay()].substring(0, 3)}</p>
              </div>
            </div>
            <div className="icon">
              <img
                className="img"
                alt="unavailable"
                src={
                  " http://openweathermap.org/img/wn/" +
                  forecastArray[index].weather[0].icon +
                  "@2x.png"
                }
              ></img>
            </div>
            <div className="temp">
              <p className="degree">
                {Math.round(forecastArray[index].temp.day)}°
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Weather() {
  return <WeatherBox />;
}
