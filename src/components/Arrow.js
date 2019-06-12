import React from "react";
import "./Arrow.css";

class Arrow extends React.Component {
  onArrowClick = e => {
    if (e.target.classList.contains("left")) {
      this.props.onArrowClick("left");
    } else {
      this.props.onArrowClick("right");
    }
  };

  render() {
    return (
      <div
        onClick={this.onArrowClick}
        className={`${this.props.nameDirection} ${
          this.props.showArrow ? this.props.showArrow : ""
        }`}
      />
    );
  }
}

export default Arrow;
