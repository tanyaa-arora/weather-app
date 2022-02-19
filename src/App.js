import "./styles.css";
function WeatherApp() {
  return (
    <div id="outerBox">
      <div id="weekBox">
        <div className="daysBox" id="today" />
        <div className="daysBox" />
        <div className="daysBox" />
        <div className="daysBox" />
        <div className="daysBox" />
        <div className="daysBox" />
        <div className="daysBox" />
      </div>
      <div id="additionalInfo">
        <div id="dateTime">
          <div id="time">time</div>
          <div id="date">date</div>
        </div>
        <div id="place">place</div>
      </div>
    </div>
  );
}
export default function App() {
  return <WeatherApp />;
}
