import React from "react";
import { Button } from "@mui/material";
import "../../src/style.css";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import TeamForm from "./TeamForm";

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.cross = React.createRef();
    this.state = {
      showClue: false,
    };
  }

  data = {
    across: {
      5: {
        clue: "bundling of data with the methods(related to OOPs)",
        answer: "ENCAPSULATION",
        row: 4,
        col: 0,
      },
      6: {
        clue: "protocol used for secure communication over a computer network, widely used on the Internet",
        answer: "HTTPS",
        row: 9,
        col: 4,
      },
      7: {
        clue: "sorting algorithm that divides data into smaller groups , sorts them and then recombine",
        answer: "MERGESORT",
        row: 11,
        col: 3,
      },
    },
    down: {
      1: {
        clue: "a network of personal computers in a small area for sharing resources or exchanging data",
        answer: "LAN",
        row: 2,
        col: 1,
      },
      2: {
        clue: "can be linear(array) or non linear(tree)",
        answer: "DATASTRUCTURE",
        row: 0,
        col: 5,
      },
      3: {
        clue: "predefined , reserved words in programming language(e.g : C)",
        answer: "KEYWORD",
        row: 6,
        col: 10,
      },
      4: {
        clue: "software intermediary that allows two applications to talk to each other",
        answer: "API",
        row: 4,
        col: 3,
      },
    },
  };

  checkResult = () => {
    if (this.cross.current.isCrosswordCorrect()) {
      this.setState({ showClue: true });
      console.log("Yes");
    } else this.setState({ showClue: false });
  };

  reset = () => {
    this.cross.current.reset();
  };

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <p className="title">BloodHound - LEVEL 2</p>
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
            // url={}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "40%",
              margin: "auto",
              // backgroundColor: "black",
              color: "white",
              fontSize: "18px",
              paddingTop: "80px",
            }}
          >
            <ThemeProvider
              theme={{
                columnBreakpoint: "99999px",
                numberColor: "blue",
                cellBorder: "white",
                textColor: "purple",
                focusBackground: "#f00",
                highlightBackground: "transparent",
              }}
            >
              <Crossword data={this.data} ref={this.cross} />
            </ThemeProvider>
          </div>
        </div>
        {this.state.showClue && (
          <p
            className="neonText"
            style={{
              alignSelf: "center",
              marginBottom: "40px",
            }}
          >
            I am someone who is generally ignored by compiler and interpreter
            but I make developers life easier. Meet me, I might be useful for
            you.
          </p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              paddingRight: "15px",
              marginBottom: "90px",
            }}
          >
            <Button className="btn-13" onClick={this.reset}>
              Reset Crossword
            </Button>
          </div>
          <div
            style={{ width: "50%", paddingLeft: "15px", marginBottom: "90px" }}
          >
            <Button className="btn-13" onClick={this.checkResult}>
              Check CrossWord
            </Button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `<!-- Here is the link for Level 3: https://bloodhound-cognitia2021.netlify.app/welcomelevel3 -->`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Level2;
