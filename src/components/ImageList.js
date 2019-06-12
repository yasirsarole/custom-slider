import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

class ImageList extends React.Component {
  flagArray = [];
  images = [];

  shouldComponentUpdate = nextProps => {
    const imageArr = [...this.flagArray, nextProps.images[0]];
    this.flagArray = [...imageArr];

    const imagesNew = imageArr.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });

    this.images = [...imagesNew];
    return true;
  };

  render() {
    return this.images;
  }
}

export default ImageList;
