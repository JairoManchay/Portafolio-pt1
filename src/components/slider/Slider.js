import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import './Slider.css'

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel 
      animationSpeed={200}
      offset={50}
      itemWidth={350}
      slidesPerPage={3}
      slides={Slides}
      plugins={[
        'arrows',
        'infinite',
        'centered'
      ]}
      breakpoints={{
        960:{
          slidesPerPage:1,
          itemWidth:190,
        }
      }}
      />
    </div>
  );
};

export default React.memo(Slider);
