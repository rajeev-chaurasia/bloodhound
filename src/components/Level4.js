import React from "react";
import TeamForm from "./TeamForm";

class Level3 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TeamForm level={3} url={"https://sheetdb.io/api/v1/k862qs7gicod2"} />
          Level 4
        </div>
        <h1>Seek and you shall find</h1>
        <p>Seive through the TEXT, be an EDITOR and you shall pass</p>
        <p>
          Trying to search a pearl in an ocean , remember the event and you
          shall achieve
        </p>
        <a>
            <button>Download</button>
        </a>
      </div>
    );
  }
}

export default Level3;
