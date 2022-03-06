import "./styles.css";
const date = new Date().toDateString();
const hour = new Date().getHours();
const min = new Date().getMinutes();
let minutes = min < 10 ? "0" + min : min;
let ampm = hour >= 12 ? "PM" : "AM";

function WeatherApp() {
  return (
    <div id="outerBox">
      <div id="additionalInfo">
        <div id="dateTime">
          <div id="time">
            <span id="time1">
              {hour}:{minutes}
            </span>
            <span>{ampm}</span>
          </div>
          <div id="date">
            <p id="date1">{date}</p>
          </div>
        </div>
        <div id="place">
          <p id="place1">Goteborg</p>
          <p>Sweden</p>
        </div>
      </div>
      <div id="todo">
        <div className="element">
          <div className="todoList task-gap">
            <p>8:00</p>
          </div>
          <p className="item">Do a task</p>
        </div>
        <div className="element">
          <div className="todoList task-gap">
            <p>12:00</p>
          </div>
          <p className="item">Do a task</p>
        </div>
        <div className="element">
          <div className="todoList task-gap">
            <p>21:00</p>
          </div>
          <p className="item">Do a task</p>
        </div>
      </div>
      <div id="weekBox">
        <div id="today">
          <div id="icon1">
            <img
              id="img1"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div id="weekday1">
            <div className="todoList">
              <p>TODAY</p>
            </div>
            <div>
              <p id="temp1">12°</p>
            </div>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>TUE</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>WED</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>THU</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>FRI</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>SAT</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
        <div className="daysBox">
          <div className="weekday">
            <div className="todoList">
              <p>SUN</p>
            </div>
          </div>
          <div className="icon">
            <img
              className="img"
              alt="unavailable"
              src={
                "https://static.meteoblue.com/assets/images/picto/03_iday.svg"
              }
            ></img>
          </div>
          <div className="temp">
            <p className="degree">12°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  return <WeatherApp />;
}
