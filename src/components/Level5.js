import React from "react";
import TeamForm from "./TeamForm";

class Level5 extends React.Component {
  render() {
    return (
      <div style={{ background: "black", paddingBottom: "70px" }}>
        <div className="level5Hero">
          <div className="heroBox">
            <p className="title">BloodHound - LEVEL 5</p>
          </div>
        </div>

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
            level={5}
            url={"https://sheet.best/api/sheets/ba06d7f8-cc36-4f46-8159-5b36861e84b8"}
          />
        </div>
        <div
          className="flexColumn"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <h2
            className="text-center"
            style={{ color: "yellow", fontSize: "40px" }}
          >
            EVERYTHING WE SEEK IS WITHIN THE ACCOUNTS
          </h2>

          <div
            className="btnLevel4 flexColumn"
            style={{
              backgroundColor: "red",
              color: "white",
              
            }}
          >
            <a
              href="https://twitter.com/BloodCognitia"
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", fontSize: "25px" }}
            >
              LET'S FIND
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Level5;
