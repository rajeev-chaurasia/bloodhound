import React from "react";
import TeamForm from "./TeamForm";

class ThankYou extends React.Component {
  render() {
    return (
      <div className="flexColumn" style={{ backgroundColor: "black" }}>
        <p className="title">CONGRATULATIONS</p>
        <div id="thankYou">.</div>
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
            level={8}
            url={
              "https://sheet.best/api/sheets/7f1d310e-ecf6-4999-ae2e-961e38afecb3"
            }
          />
        </div>
        <div className="flexColumn" style={{ color: "black" }}>
          <div>
            <h1 className="neonText">YOU HAVE FOUND EVERYTHING!!&nbsp;</h1>
          </div>
          <div>
            <h3 className="neonText">
              <em>It's been a delight to work your puzzle solving skills.</em>
            </h3>
            <h1
              className="text-center"
              style={{ color: "red", margin: "40px", fontSize: "40px" }}
            >
              Thank you.
            </h1>
            <p
              className="neonText"
              style={{ fontSize: "40px", marginBottom: "100px" }}
            >
              <span style={{ color: "blue" }}> Bloodhound </span>|
              <span style={{ color: "yellow" }}>Cognitia 2021 </span>|
              <span style={{ color: "purple" }}>CSE Department </span>|
              <span style={{ color: "green" }}> NIT - Meghalaya</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
