import React from "react";

class ImageCard extends React.Component {
  render() {
    return (
      <figure>
        <img
          src={this.props.image.urls.small}
          alt={this.props.image.alt_description}
        />
      </figure>
    );
  }
}

export default ImageCard;
