import React from "react";
import './AddButton.css'

let count = 0;

class AddButton extends React.Component {
  onAddImageClick = e => {
    e.preventDefault();
    count++;
    this.props.onAddImageClick(count);
  };

  render() {
    return (
      <div className="add-button">
        <a onClick={this.onAddImageClick} href="#FIXME" title="Add Image">
          Add Image
        </a>
      </div>
    );
  }
}

export default AddButton;
