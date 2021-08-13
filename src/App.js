import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null
    };
  }

  handleCallback = (pass) => {
    this.setState({ password: pass });
  };
  render() {
    const { password } = this.state;
    return (
      <>
        <ChildComponent parenCallback={this.handleCallback} />
        <p> {password}</p>
      </>
    );
  }
}

class ChildComponent extends React.Component {
  clickCounter = () => {
    this.props.parenCallback(Math.random().toString(32));
  };
  render() {
    return (
      <>
        <button onClick={this.clickCounter}>generate Password </button>
      </>
    );
  }
}
