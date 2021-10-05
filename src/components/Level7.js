import React from "react";
import TeamForm from "./TeamForm";

const Level7 = () => {
  return (
    <div className="level2Container" style={{ height: "980px" }}>
      <p className="title">BloodHound - LEVEL 7</p>
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
          level={2}
          url={
            "https://sheet.best/api/sheets/3f5567d6-8da7-4f0c-8395-cba87c85b2b1"
          }
        />
      </div>

      <div style={{ width: "50%", margin: "auto", color: "white" }}>
        <p
          style={{
            color: "rgb(235, 100, 0)",
            fontSize: "20px",
            lineHeight: "25px",
            textAlign: "center",
          }}
        >
          Encryption is a means of securing digital data using one or more
          mathematical techniques, along with a password or "key" used to
          decrypt the information. The encryption process translates information
          using an algorithm that makes the original information unreadable.
        </p>
        <div
          className="btn-13"
          style={{
            height: "auto",
            width: "auto",
            padding: "20px",
            fontSize: "18px",
            lineHeight: "30px",
            marginTop: "90px",
            borderRadius: "50px",
          }}
        >
          <ul>
            <li>
              <div style={{ fontSize: "25px" }}>
                Use Playfair Algorithm to Encrypt:
              </div>

              <ul>
                <li>
                  Clue 1 : The Key is the Brain of Computer.(Use Abbreviation)
                </li>
                <li>
                  Clue 2 : I am a malicious program that can cause damage. What
                  am I?
                </li>
              </ul>
            </li>

            <li>
              <div style={{ fontSize: "25px", marginTop: "30px" }}>
                Use Atbash Algorithm to Encrypt:
              </div>

              <ul>
                <li>Clue : I am the central part of wireless network.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://drive.google.com/file/d/1WJDNQjEFao6etZ6XPnJ_du2iVVqKnmA8/view?usp=sharing"
          target="_blank"
        >
          Click here to move forward.
        </a>
      </div>
    </div>
  );
};

export default Level7;
