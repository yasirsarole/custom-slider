import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Arrow from "./Arrow";
import AddButton from "./AddButton";
import "./App.css";

class App extends React.Component {
  state = { images: [], arrow: "" };

  onAddImageClick = async count => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: "car",
        per_page: 1,
        page: count
      }
    });

    if (count === 1) {
      this.setState({ images: response.data.results });
    } else if (count > 1) {
      this.setState({ images: response.data.results, arrow: "show" });
    }
  };

  onArrowClick = direction => {
    const currentSlide = document.getElementsByClassName("current")[0],
      slides = document.querySelectorAll("figure");

    slides.forEach(slide => {
      slide.classList.remove(...["next", "prev", "current"]);
    });

    if (direction === "left") {
      if (!currentSlide.classList.contains("first")) {
        currentSlide.previousSibling.classList.add(...["prev", "current"]);
      } else {
        slides[slides.length - 1].classList.add(...["prev", "current"]);
      }
    } else {
      if (!currentSlide.classList.contains("last")) {
        currentSlide.nextSibling.classList.add(...["next", "current"]);
      } else {
        slides[0].classList.add(...["next", "current"]);
      }
    }
  };

  render() {
    return (
      <div className="slider-container">
        <AddButton onAddImageClick={this.onAddImageClick} />
        <Arrow
          showArrow={this.state.arrow}
          onArrowClick={this.onArrowClick}
          nameDirection="left"
        />
        <div className="slide">
          <ImageList images={this.state.images} />
        </div>
        <Arrow
          showArrow={this.state.arrow}
          onArrowClick={this.onArrowClick}
          nameDirection="right"
        />
      </div>
    );
  }
}

export default App;
