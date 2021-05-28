import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../img/offer1.svg';
import image2 from '../img/search2.svg';
import image3 from '../img/improve3.svg';
import image4 from '../img/idea4.svg';
import Slider from 'react-slick';

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
      },
      {
        breakpoint: 2000, // a unrealistically big number to cover up greatest screen resolution
        settings: 'unslick',
      },
    ],
  };
  return (
    <div className='container mx-auto'>
      <Slider {...settings} className='ml-2 md:flex '>
        <div className='text-gray-600 md:pr-10'>
          <img
            src={image1}
            className='sliderimg py-3 md:width-20'
            alt='img1'
            height='50px'
            width='50px'
          />
          <div className='bg-green-200 h-3 hidden md:block'></div>
          <div className='bg-blue-300 h-6 hidden md:block'></div>
          <h3 className='font-bold'>Offer coupons</h3>
          <div className='bg-green-200 h-4 hidden md:block'></div>
          <p className='text-sm py-2 '>
            Grow your customer base by offering free coupons that are advertised
            on social media and discoverable through Google search. No hidden or
            upfront fees and you get a free professional profile. Engage your
            customers and leads while expanding your business.
          </p>
        </div>

        <div className='text-gray-600 md:pr-10'>
          <img
            src={image2}
            className='sliderimg py-3'
            alt='img1'
            height='50px'
            width='50px'
          />
          <div className='bg-green-200 h-3 hidden md:block'></div>
          <div className='bg-blue-300 h-6 hidden md:block'></div>
          <h3 className='font-bold'>Search and discover</h3>
          <div className='bg-green-200 h-4 hidden md:block'></div>
          <p className='text-sm py-2'>
            Our directory is accessed by families across US and Canada to find
            local service providers and facilities by profession, services
            offered, or ratings and rankingsWe match families based on their
            needs.
          </p>
        </div>
        <div className='text-gray-600 md:pr-10'>
          <img
            src={image3}
            className='sliderimg py-3'
            alt='img1'
            height='50px'
            width='50px'
          />
          <div className='bg-green-200 h-3 hidden md:block'></div>
          <div className='bg-blue-300 h-6 hidden md:block'></div>
          <h3 className='font-bold'>Improve satisfaction</h3>
          <div className='bg-green-200 h-4 hidden md:block'></div>
          <p className='text-sm py-2'>
            Get higher ratings and better reviews through transparency,
            media-rich profiles, engaging social blog, professional articles,
            and accreditation.Create events to promote your business and
            advertise them on social media.
          </p>
        </div>
        <div className='text-gray-600 md:pr-10'>
          <img
            src={image4}
            className='sliderimg py-3'
            alt='img1'
            height='50px'
            width='50px'
          />
          <div className='bg-green-200 h-3 hidden md:block'></div>
          <div className='bg-blue-300 h-6 hidden md:block'></div>
          <h3 className='font-bold'>Profile Boosting</h3>
          <div className='bg-green-200 h-4 hidden md:block'></div>
          <p className='text-sm py-2'>
            Get more referrals through improved ratings and reviews, performance
            monitoring, recommendations from other professionals, and profile
            search boosting. Your profiles are discoverable on Google search.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
