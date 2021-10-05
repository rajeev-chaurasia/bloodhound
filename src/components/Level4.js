import React from "react";
import TeamForm from "./TeamForm";

class Level4 extends React.Component {
  render() {
    return (
      <div className="level2Container" style={{ paddingBottom: "50px" }}>
        <p className="title">BloodHound - LEVEL 4</p>
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
            level={4}
            url={
              "https://sheet.best/api/sheets/69da3ac1-493e-4b16-abca-59a7f8afaf41"
            }
          />
        </div>
        <div className="level3Img" id="bgimg">
          <div class="jumbotron flexColumn" id="jumbo">
            <h1 class="text-center">Seek and you shall find</h1>
            <p
              class="text-center"
              style={{ fontSize: "20px", color: "dodgerblue" }}
            >
              Seive through the TEXT, be an EDITOR and you shall pass
            </p>
            <p
              class="text-center"
              style={{ fontSize: "20px", color: "firebrick" }}
            >
              Searching a drop in an ocean , remember the base and you shall
              achieve
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/1bzMLpxECwrBBHI206D9RbJKraXq-Sd9U/view?usp=sharing"
                target="_blank"
              >
                <button class="btnLevel4" type="button" target="_blank">
                  Download
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Level4;
