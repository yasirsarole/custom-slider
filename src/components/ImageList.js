import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

class ImageList extends React.Component {
  flagArray = [];
  images = [];

  updateList = () => {
    if (this.props.buttonCount > 0) {
      const imageArr = [...this.flagArray, this.props.images[0]];
      this.flagArray = [...imageArr];

      const imagesNew = imageArr.map(image => {
        return <ImageCard key={image.id} image={image} />;
      });

      this.images = [...imagesNew];
    }
  };

  componentDidUpdate() {
    const figures = this.imageRef.children;

    if (figures.length === 1) {
      figures[0].classList.add(...["first", "current"]);
    }

    for (let figure of figures) {
      figure.classList.remove("last");
    }

    figures[figures.length - 1].classList.add("last");
  }

  render() {
    this.updateList();

    return (
      <div ref={ref => (this.imageRef = ref)} className="image-list">
        {this.images}
      </div>
    );
  }
}

export default ImageList;
