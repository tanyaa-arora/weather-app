import "./styles.css";
import Weather from "./Weather";
const date = new Date().toDateString();

const hour = new Date().getHours();

const min = new Date().getMinutes();
let hours = hour < 10 ? "0" + hour : hour;
let minutes = min < 10 ? "0" + min : min;

let ampm = hour >= 12 ? "PM" : "AM";

function WeatherApp() {
  return (
    <div id="outerBox">
      <div id="additionalInfo">
        <div id="dateTime">
          <div id="time">
            <span id="time1">
              {hours}:{minutes}
            </span>
            <span>{ampm}</span>
          </div>
          <div id="date">
            <p id="date1">{date}</p>
          </div>
        </div>
        <div id="place">
          <p id="place1">Bangalore</p>
          <p>India</p>
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
      <Weather />
    </div>
  );
}
export default function App() {
  return <WeatherApp />;
}
