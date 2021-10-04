import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import Button from "@mui/material/Button";
import Timer from "./Timer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    };
  }

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
            href="https://dare2compete.com/o/HDtoJ4A?lb=ZFRtUsz"
            target="_blank"
          >
            Visit BloodHound on D2C
          </Button>
        </div>
        <Timer />
      </div>
    );
  }
}

export default HomePage;
