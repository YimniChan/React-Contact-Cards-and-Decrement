import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
  render() {
    return (
      <div className="contactCard">
        <h2>{this.props.name}, {this.props.lname}</h2>
        <ul>
          <li>Mobile number: {this.props.mobile}</li>
          <li>Work number: {this.props.work}</li>
          <li>Email: {this.props.email}</li>
        </ul>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  work: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default ContactCard;

/**
 * Exercise: Contact Cards
Props and PropTypes
Define a ContactCard component that takes in a contact name, mobile number, work phone number and email as properties and displays the results in a visually appealing way.
The name, mobile number and email are required, but the work phone number is optional.
Create a page that display at least 3 different contact cards with different information.
 */