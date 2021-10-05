import React from "react";
import axios from "axios";
import { Button, Form, Container} from "semantic-ui-react";
import moment from "moment";
import "../../src/style.css";

export default class TeamForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: "",
      level: this.props.level,
      timeReached: moment().format("LTS"),
    };
  }

  changeHandler = (e) => {
    this.setState({ teamName: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post(this.props.url, this.state).then((response) => {
      console.log(response);
      alert("Level Timestamp recorded successfully");
    });
  };

  render() {
    return (
      <Container fluid className="container">
        <Form
          className="form"
          style={{
            textAlign: "center",
          }}
          onSubmit={this.submitHandler}
        >
          <Form.Field>
            <label
              className="teamName"
              style={{
                color: "white",
                marginBottom: "5px",
                textAlign: "center",
                fontSize: 25,
              }}
            >
              Team Name
            </label>
            <input
              type="text"
              style={{ width: "50%", color: "black" }}
              name="teamName"
              value={this.state.teamName}
              placeholder="Enter your Team Name"
              placeholderStyle={{ color: "black" }}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
