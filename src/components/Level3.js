import React from "react";
import TeamForm from "./TeamForm";

class Level3 extends React.Component {
  render() {
    return (
      <div className="level2Container" style={{ height: "980px" }}>
        <p className="title">BloodHound - LEVEL 3</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <TeamForm
            level={3}
            url={
              "https://sheet.best/api/sheets/3f5567d6-8da7-4f0c-8395-cba87c85b2b1"
            }
          />
          <div class="container">
            <div>Listen to the video and open your eyes ..CC</div>
            <div>
              Striking the clock at 13 shows the path but you will reach the
              destination at 20
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/69plhSVRSPU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Level3;
