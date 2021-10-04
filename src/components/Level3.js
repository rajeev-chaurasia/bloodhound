import React from "react";
import TeamForm from "./TeamForm";

class Level3 extends React.Component {
  render() {
    return (
      <div>
        <TeamForm level={3} url={"https://sheetdb.io/api/v1/k862qs7gicod2"} />
        Level 3
      </div>
    );
  }
}

export default Level3;
