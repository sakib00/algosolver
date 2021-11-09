import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  initial: {
    opacity: 0,
    x: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

export const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    rootMargin: '-100px',
  });
  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else if (!inView) {
      controls.start('exit');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      initial='initial'
      animate={controls}
      variants={variants}
      className='relative flex items-top justify-center py-40 bg-white dark:bg-gray-900 sm:items-center sm:pt-0'
    >
      <div className='max-w-6xl mx-auto sm:px-6 lg:px-8'>
        <div className='mt-8 overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-24'>
            <div className='p-6 mr-2 sm:rounded-lg'>
              <h1 className='font-extrabold text-3xl lg:text-5xl text-primary-dark my-10'>
                Get in touch
              </h1>
              <p className=' text-xs lg:text-lg font-medium text-primary-dark dark:text-gray-400 mt-5'>
                Fill in the form to start a conversation
              </p>

              <div className='flex items-center mt-8 text-primary-dark dark:text-gray-400'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-gray-500'
                >
                  <path d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <div className='ml-4 text-sm tracking-wide  w-40'>
                  Algo, Street, State, Postal Code
                </div>
              </div>

              <div className='flex items-center mt-4 text-primary-dark dark:text-gray-400'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-gray-500'
                >
                  <path d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <div className='ml-4 text-sm tracking-wide  w-40'>
                  +8801XXXXXXXXX
                </div>
              </div>

              <div className='flex items-center mt-2 text-primary-dark dark:text-gray-400'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 text-gray-500'
                >
                  <path d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <div className='ml-4 text-sm tracking-wide  w-40'>
                  info@algo.org
                </div>
              </div>
            </div>

            <form className='p-6 flex flex-col justify-center'>
              <div className='flex flex-col'>
                <label className='hidden'>Full Name</label>
                <input
                  type='name'
                  name='name'
                  id='name'
                  placeholder='Full Name'
                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary-dark focus:outline-none'
                />
              </div>

              <div className='flex flex-col mt-2'>
                <label className='hidden'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary-dark focus:outline-none'
                />
              </div>

              <div className='flex flex-col mt-2'>
                <label className='hidden'>Number</label>
                <input
                  type='tel'
                  name='tel'
                  id='tel'
                  placeholder='Telephone Number'
                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary-dark focus:outline-none'
                />
              </div>

              <button
                type='submit'
                className='md:w-32 bg-primary-dark hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-gray-700 transition ease-in-out duration-300'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
