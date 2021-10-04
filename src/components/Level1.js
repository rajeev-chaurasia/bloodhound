import React from "react";
import { Button } from "@mui/material";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";
import TeamForm from "./TeamForm";

class Level1 extends React.Component {
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
    if (this.cross.current.isCrosswordCorrect())
      this.setState({ showClue: true });
    else this.setState({ showClue: false });
  };

  reset = () => {
    this.cross.current.reset();
  };

  render() {
    return (
      <div>
        <TeamForm
          level={1}
          url={
            " https://sheet.best/api/sheets/e02ac799-7155-4ebe-b745-5c9ac179f318"
          }
        />

        <div>
          I am someone who is generally ignored by compiler and interpreter but
          I make developers life easier. Meet me , I might be useful for you.
        </div>
        <div style={{ width: "50%", backgroundColor: "black" }}>
          <ThemeProvider
            theme={{
              columnBreakpoint: "9999px",
              numberColor: "#fffff",
              focusBackground: "#f00",
              highlightBackground: "#f99",
            }}
          >
            <Crossword data={this.data} ref={this.cross} />
          </ThemeProvider>
        </div>
        <Button onClick={this.reset}>Reset Crossword</Button>
        <Button onClick={this.checkResult}>Check CrossWord</Button>
        {this.state.showClue && (
          <div>Link to Level 2 : http://localhost:3000/level2bloodhound</div>
        )}
      </div>
    );
  }
}

export default Level1;
