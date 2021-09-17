import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Button from "@mui/material/Button";
import Countdown from "react-countdown";

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
          <p style={{ color: "white", fontSize: 90 }}>Blood Hound.</p>
          <p style={{ color: "white", fontSize: 30 }}>Cognitia 2021</p>
          <Button variant="contained">Registeration Link(Coming soon)</Button>
          <p>Are you ready? hint - Welcome</p>
          <Countdown date="2021-10-06T01:02:03" />
        </div>
      </div>
    );
  }
}

export default App;