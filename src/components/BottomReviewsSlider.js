import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from '../img/sliderBottom/1.png';
import image2 from '../img/sliderBottom/2.png';
import image3 from '../img/sliderBottom/3.png';
import image4 from '../img/sliderBottom/4.png';
import image5 from '../img/sliderBottom/5.png';
import image6 from '../img/sliderBottom/6.png';
import image7 from '../img/sliderBottom/7.png';
import image8 from '../img/sliderBottom/8.png';

const BottomReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto py-10'>
      <div className='text-gray-600 text-center font-bold py-8'>
        <h2>iCaria Living - Explore the wonders of life</h2>
      </div>
      <Slider {...settings} className='ml-2 md:flex '>
        <div className='text-gray-600 md:pr-10'>
          <img src={image1} className='py-3 md:width-20' alt='img1' />
          <h3 className='font-bold'>Owner</h3>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img src={image2} className=' py-3' alt='image2' />
          <h3 className='font-bold'>Tutor</h3>
        </div>
        <div className='text-gray-600 md:pr-10'>
          <img src={image3} className=' py-3' alt='image2' />
          <h3 className='font-bold'>Financial Advisor</h3>
        </div>
        <div className='text-gray-600 md:pr-10'>
          <img src={image4} className='py-3' alt='image3' />
          <h3 className='font-bold'>Personal Care Giver</h3>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img src={image5} className=' py-3' alt='image4' />
          <h3 className='font-bold'>Yoga Trainer</h3>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img src={image6} className='sliderimg py-3' alt='img1' />
          <h3 className='font-bold'>Nutritionist</h3>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img src={image7} className='sliderimg py-3' alt='img1' />
          <h3 className='font-bold'>Astrologer</h3>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img src={image8} className='sliderimg py-3' alt='img1' />
          <h3 className='font-bold'>Senior Care Director</h3>
        </div>
      </Slider>
    </div>
  );
};

export default BottomReviewsSlider;
