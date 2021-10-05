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
              "https://sheet.best/api/sheets/897ecf77-89e3-4715-9fac-8f7ec7cf0b11"
            }
          />
          <div class="container flexColumn">
            <div
              className="neonText p4"
              style={{
                marginTop: "25px",
                marginBottom: "15px",
                color: "dodgerblue",
                fontSize: "25px",
              }}
            >
              Listen to the video and open your eyes ..CC
            </div>

            <div>
              <iframe
                className="p4"
                width="560"
                height="315"
                style={{ borderRadius: "20px" }}
                src="https://www.youtube.com/embed/69plhSVRSPU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div
              className="neonText p4"
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                color: "green",
                fontSize: "30px",
              }}
            >
              Striking the clock at 13 shows the path but you will reach the
              destination at 20
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Level3;
