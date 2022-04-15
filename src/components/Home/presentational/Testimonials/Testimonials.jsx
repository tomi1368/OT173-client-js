import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from '../HomeSlider/presentational/ArrowLeft/ArrowLeft';
import ArrowRight from '../HomeSlider/presentational/ArrowRight/ArrowRight';
import "./Testimonials.scss"


const settings ={
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ArrowRight />,
  prevArrow: <ArrowLeft />,
}

const Testimonials = () => {
  return (
    <>
    <h2 className='test-title'>Testimonials</h2>
    <Slider {...settings} className="slider-test">
        <div className='slider-test__slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider-test__slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider-test__slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider-test__slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider-test__slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
    </Slider>
    </>
  )
}

export default Testimonials