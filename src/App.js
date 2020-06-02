import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name = "Betty"
          lname = "Rodriguez"
          mobile = "202-555-0151"
          work = ""
          email = "rodriguez.b@siosfatuat.tk"
        />
        <ContactCard
          name = "Ciaran"
          lname = "Jones"
          mobile = "615-812-4661"
          work = "907-825-8908"
          email = "ciaran.j@twizadnu.org"
        />
        <ContactCard
          name="Georgie"
          lname = "Williams"
          mobile="517-902-2231"
          work="719-662-1898"
          email="gw123@ksea.ga"
        />
      </>
    );
  }
}

export default App;

