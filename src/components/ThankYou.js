import React from "react";
import TeamForm from "./TeamForm";

class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <div>
          <TeamForm level={3} url={"https://sheetdb.io/api/v1/k862qs7gicod2"} />
          Thank You
        </div>
        <div>
          <div>
            <h1>YOU HAVE FOUND EVERYTHING! CONGRATULATIONS&nbsp;</h1>
          </div>
          <div>
            <h3>
              <em>It's been a delight to work your puzzle solving skills.</em>
            </h3>
            <h1>
              <em>Thank you.</em>
            </h1>
            <h4>
              <em>
                Bloodhound | Cognitia 2021 | CSE Department | NIT - Meghalaya
              </em>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
