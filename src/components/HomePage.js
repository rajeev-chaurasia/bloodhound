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
     
        <BackgroundAnimation />
    

        <div class="homePageLogo"></div>
        <div style={{ position: "absolute", top: "0%", left: "5%" }}>
          <div
            className="flexColumn"
            style={{
              marginTop: "20px",
            }}
          >
            <h1 style={{ color: "#C22C04", fontSize: 90, textAlign: "center" }}>
              Blood Hound
            </h1>
            <p style={{ fontSize: 50, textAlign: "center", color: "green" }}>
              Cognitia 2021
            </p>

            <Button
              variant="contained"
              href="https://dare2compete.com/o/HDtoJ4A?lb=ZFRtUsz"
              target="_blank"
              fontSize={20}
            >
              Visit BloodHound on D2C
            </Button>
            <Timer />
          </div>

          <div
            style={{
              color: "white",
              marginTop: "120px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <h2
              class="section-heading mb-4"
              style={{ color: "blue", fontSize: "35px" }}
            >
              <span class="section-heading-upper">HOW THIS WORKS FOR YOU</span>
            </h2>

            <p class="text-left mb-0">
              - The event lasts for a duration of 60 minutes.
            </p>
            <p class="text-left mb-0">
              - Each team can have a maximum of 2 members.
            </p>
            <p class="text-left mb-0">
              - Participants must join the event using a laptop. One of the
              participant will share their screen and only mode of communication
              between the teammates will be the google meet platform.
            </p>
            <p class="text-left mb-0">
              - Each team will get 1 skip for a level and 3 free hints. In case
              your free hints are exhausted, a penalty of -30 per additional
              hint will be incurred.
            </p>
            <p class="text-left mb-0">
              - Each stage has a base score of +200 points on completion.
            </p>
            <p class="text-left mb-0">
              - The team with the highest points will be declared the winner.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
