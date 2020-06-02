import React, { Component } from "react";
import Decrement from "./Decrement";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <h2>Decrement method</h2>
        <Decrement start={21} />
        <br/>
        <Decrement start={10} />
      </>
    );
  }
}

export default App;

