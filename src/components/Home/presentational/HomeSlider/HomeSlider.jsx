import React from 'react'
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const HomeSlider = () => {
  return (
    <Slider {...settings}>
      
    </Slider>
  )
}

export default HomeSlider