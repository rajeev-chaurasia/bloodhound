import React from "react";
import "../../src/style.css";
import TeamForm from "./TeamForm";

class Level6 extends React.Component {
  render() {
    return (
      <div style={{ background: "black", paddingBottom: "70px" }}>
        <p className="title">BloodHound - LEVEL 6</p>
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
            level={6}
            url={"https://sheet.best/api/sheets/c1a77cfa-e5e8-4d64-818a-038520ceb2b9"}
          />
        </div>
        <div>
          <div>
            <div style={{ fontSize: "20px" }}>
              <h2 class="neonText">The KEY to Future: 20212021COGNITIA</h2>
              <p class="text-center">1. MODE: ECB</p>
              <p class="text-center">2. KEY SIZE : 128</p>
              <p class="text-center">3. TEXT Format : HEX</p>
              <p class="text-center">4. bit.ly(hmmm)</p>
              <p class="text-center">5. 3</p>
              <p class="text-center">6. A</p>
              <p class="text-center">7. c</p>
              <p class="text-center">8. x</p>
              <p class="text-center">9. t</p>
              <p class="text-center">10. w</p>
              <p class="text-center">11. n</p>
            </div>
            <div>
              <p
                class="neonText"
                style={{ padding: "20px", fontSize: "20px", color: "red" }}
              >
                <strong>
                  A240E02FBFD85F0339D97CE91B533D4FF0A7F858FA614776AA4E2213AE997D444B11A7EC5D8878C8BD27024B5E0F8B42A4DEE7507F164FA7446B75C247621C0F
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Level6;
