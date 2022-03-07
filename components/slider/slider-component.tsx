import SliderimageComponent from "../slider-image/sliderimage-component";
import { Slider } from "./slider-styled";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

let imageArray = [
  {
    image: "./universityStudents2.jpeg",
    alt: "university students",
    content: "Find work that suits you and your schedule",
  },
  {
    image: "./couple.jpeg",
    alt: "couple",
    content: "Find someone reliable to quickly help you.",
  },
];

function SliderComponent() {
  const [current, setCurrent] = useState(0);
  const length = imageArray.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <Slider>
      <div className="arrow">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>

      {imageArray.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <SliderimageComponent
                image={slide.image}
                altDes={slide.alt}
                content={slide.content}
              />
            )}
          </div>
        );
      })}
    </Slider>
  );
}
export default SliderComponent;
