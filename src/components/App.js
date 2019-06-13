import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import Arrow from "./Arrow";
import AddButton from "./AddButton";
import "./App.css";

class App extends React.Component {
  state = { images: [], arrow: "", buttonCount: "" };

  onAddImageClick = async count => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: "car",
        per_page: 1,
        page: count
      }
    });

    if (count === 1) {
      this.setState({ images: response.data.results, buttonCount: count });
    } else if (count > 1) {
      this.setState({
        images: response.data.results,
        arrow: "show",
        buttonCount: count
      });
    }
  };

  onArrowClick = e => {
    const slides = [...this.slideRef.children[0].children],
      currentSlide = slides.filter(current => {
        return current.classList.contains("current");
      });

    slides.forEach(slide => {
      slide.classList.remove(...["next", "prev", "current"]);
    });

    if (e.target.classList.contains("left")) {
      if (!currentSlide[0].classList.contains("first")) {
        currentSlide[0].previousSibling.classList.add(...["prev", "current"]);
      } else {
        slides[slides.length - 1].classList.add(...["prev", "current"]);
      }
    } else {
      if (!currentSlide[0].classList.contains("last")) {
        currentSlide[0].nextSibling.classList.add(...["next", "current"]);
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
        <div
          className="slide"
          ref={ref => {
            this.slideRef = ref;
          }}
        >
          <ImageList
            buttonCount={this.state.buttonCount}
            images={this.state.images}
          />
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
