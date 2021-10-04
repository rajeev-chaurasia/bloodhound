import React from "react";
import axios from "axios";
import { Button, Form, Container, Header } from "semantic-ui-react";
import moment from "moment";

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
      <Container fluid className="container" style={{ padding: "20px" }}>
        <Header as="h2">Team Details</Header>
        <Form
          className="form"
          style={{ width: "500px" }}
          onSubmit={this.submitHandler}
        >
          <Form.Field>
            <label>Team Name</label>
            <input
              type="text"
              name="teamName"
              value={this.state.teamName}
              placeholder="Enter your Team Name"
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
