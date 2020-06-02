import React, { Component } from "react";
import PropTypes from "prop-types";

class Decrement extends Component{
    constructor(props){
        super (props);
        this.state = {number:props.start};
    }

    decrementCondition = (state) => {
        if (state.number === 0) {
          return alert("Cannot be less than zero!");
        }
        this.setState ( { number: state.number -1 });
      };
    //   decrementCondition = (state) => {
    //     if (state.number === 0||(state.-2)<0) {
    //       return alert("Cannot be less than zero!");
    //     }
    //     this.setState ( { number: state.number-2 });
    //   };

    render() {
        return (
          <div >
            {this.state.number}{" "}
            <button onClick={() => this.decrementCondition(this.state)}>
              Decrement by 1
            </button>
          </div>
        );
      }
    //Decrement by 2
}

Decrement.propTypes = {
    start: PropTypes.number.isRequired,
};
  
export default Decrement;