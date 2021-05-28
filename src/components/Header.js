import React from 'react';

const Header = () => {
  return (
    <div className='container mx-auto'>
      <div className='bg-red-200 h-10 hidden md:block'></div>
      <div className='bg-purple-300 h-5 hidden md:block'></div>
      <h1 className='text-lg font-bold text-gray-600 ml-2 pb-6'>
        Why our Directory
      </h1>
      <div className='bg-blue-300 h-5 hidden md:block'></div>
    </div>
  );
};

export default Header;
