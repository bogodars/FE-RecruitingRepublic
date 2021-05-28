import React from 'react';
import img from '../img/ContactUs.png';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='container mx-auto'>
      <div className='ml-2 mb-10 md:flex md:justify-between md:items-center'>
        <div className='text-gray-600 md:flex-col-reverse md:flex md:w-2/4 '>
          <img src={img} alt='Contact' />
          <div>
            <h2 className=' font-bold py-5 ml-2'>Request info</h2>
            <p className='mw-500 ml-2'>
              Got a question? Need to see a demo? Want to start your free trial
              subscription? We'd love to hear from you! Contact us and we will
              get back to you shortly.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col border-none  md:w-2/4 md:h-full'>
          <input
            {...register('name', { required: true })}
            className=' border-4 border-dashed  border-r-0 border-l-0  border-t-0 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent pt-6 pb-4 '
            type='text'
            placeholder='Name*'
          />
          <input
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            type='email'
            placeholder='Email*'
            className='border-4 border-dashed border-r-0 border-l-0  border-t-0 pt-6 pb-4 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent'
          />
          <input
            {...register('date', {
              required: true,
              pattern: {
                message: 'Enter your valid age pls',
              },
            })}
            type='date'
            placeholder='Date of birth*'
            className='border-4 border-dashed border-r-0 border-l-0  border-t-0 pt-6 pb-4 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent'
          />
          {errors.date && <span>This field is required</span>}
          <textarea
            {...register('text')}
            type='text'
            placeholder='Message*'
            className='resize-none h-48 border-4 border-dashed border-r-0 border-l-0  border-t-0 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent'
          />
          <div className='text-center md:text-left py-10'>
            <button
              className='text-white inline-block sm:align-center sm:text-center  rounded-full w-36 py-2 focus:border-transparent outline-none bg-gradient-to-r from-purple-400  whitespace-nowrap text-center to-indigo-400 '
              type='submit'>
              Request Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
