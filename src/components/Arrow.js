import React from "react";
import "./Arrow.css";

class Arrow extends React.Component {
  onArrowClick = e => {
    this.props.onArrowClick(e);
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
