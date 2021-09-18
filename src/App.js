import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Button from "@mui/material/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
const endTime = 1633440600; // use UNIX timestamp in seconds
const remainingTime = endTime - startTime;
const days = Math.ceil(remainingTime / daySeconds);
const daysDuration = days * daySeconds;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000000" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#000000",
          }}
        >
          <BackgroundAnimation />
        </div>
        <div style={{ position: "absolute", top: 50, left: "20%" }}>
          <p style={{ color: "white", fontSize: 90 }}>Blood Hound</p>
          <p style={{ color: "white", fontSize: 30 }}>Cognitia 2021</p>
          <Button
            variant="contained"
            href="https://forms.gle/9ERgDRTNDCuWyUsW9"
            target="_blank"
          >
            Registeration Link
          </Button>
        </div>
        <div style={{ display : "flex" , justifyContent : "space-evenly" ,width : "45%",position: "absolute", top: 500, left: "20%"}}>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#7E2E84"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) =>
              renderTime("days", getTimeDays(daysDuration - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#D14081"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("hours", getTimeHours(daySeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("seconds", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </div>
      </div>
    );
  }
}

export default App;
