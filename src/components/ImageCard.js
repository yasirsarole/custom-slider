import React from "react";

class ImageCard extends React.Component {
  componentDidMount() {
    const figureCollection = document.querySelectorAll("figure");

    if (figureCollection.length === 1) {
      figureCollection[0].classList.add(...["first", "current"]);
    }

    figureCollection.forEach(figure => {
      figure.classList.remove("last");
    });

    figureCollection[figureCollection.length - 1].classList.add("last");
  }

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
