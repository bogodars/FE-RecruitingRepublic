import React, { useState, useEffect } from 'react';
import mobileImage from '../img/bg.png';
import desktopImage from '../img/bg2.png';

const CallToAction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const backgroundImg = window.innerWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg}) `,
        backgroundSize: 'cover',
        height: '550px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className='mt-10 md:mt-0 ml:mt-0'>
      <div className=' container mx-auto'>
        <div className='text-white pt-40 flex flex-col text-left content-center w-auto ml-3'>
          <h1 className='text-white text-3xl font-extrabold '>
            Become a five-star <br></br>professional!
          </h1>

          <p className='py-5 mw-500'>
            Join the growing community of professional icarians. Use the iCaria
            professional services to launch and grow your business, manage your
            clients, organize your schedule, and simplify your payments. With
            iCaria certification, your customers will be assured safe and secure
            access to services.
          </p>
          <button
            type='button'
            className='inline-block rounded-full w-36 py-2  outline-none bg-gradient-to-r from-purple-400  whitespace-nowrap text-center to-indigo-400'>
            Request Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
