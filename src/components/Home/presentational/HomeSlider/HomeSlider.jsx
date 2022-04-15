import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.scss";
import ArrowLeft from "./presentational/ArrowLeft/ArrowLeft";
import ArrowRight from "./presentational/ArrowRight/ArrowRight";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
};



const HomeSlider = () => {
  return (
    <Slider {...settings} className="slider">
                <div>
                <img alt="New year, new deals 2022" src={`https://img.remediosdigitales.com/e9f8f8/istock_000040965646_small/450_1000.jpg`}/>
                </div>
                <div>   
                <img alt="Epic Daily Deals, Your holiday head start" src={`https://www.educaciontrespuntocero.com/wp-content/uploads/2021/06/aprender-jugando-en-verano-destacada-1200x675.jpg`}/>
                </div>
    </Slider>
  );
};

export default HomeSlider;
