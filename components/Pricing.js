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

export const Pricing = () => {
  const [openTab, setOpenTab] = React.useState(1);
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
      className='py-10 lg:py-20'
    >
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-3xl lg:text-5xl text-primary-dark mb-10'>
          Pricing
        </h1>
        <p className='my-4 text-primary-dark text-xs lg:text-sm mx-20 lg:mx-72 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do
          eiusmod tempor. Lorem ipsum dolor sit amet,consectetur adipisicing
          elit,sed do eiusmod tempor. Lorem ipsum dolor sit amet,consectetur
          adipisicing Lorem ipsum dolor sit amet,consectetur adipisicing
          elit,sed do eiusmod tempor. Lorem ipsum dolor sit amet,consectetur
          adipisicing Lorem ipsum dolor sit amet,consectetur adipisicing
        </p>
        <div className='card-group lg:flex lg:space-x-14  my-5'>
          <div className='card-1 transform my-4 hover:scale-110 transition duration-500 ease-out'>
            <div className='shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4'>
              <p className='text-primary-dark dark:text-white text-3xl font-bold'>
                Free
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                For the basics tailwind
              </p>
              <p className='text-primary-dark dark:text-white  text-3xl font-bold'>
                $0
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                Per agent per month
              </p>
              <button
                type='button'
                className='w-56 m-auto px-3 py-3 text-sm shadow border border-primary-dark rounded-lg text-primary-dark bg-white hover:bg-primary-dark hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 transition duration-500 ease-in-out '
              >
                Request demo
              </button>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  All illimited components Tailwind
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  Own analitycs templates
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  24/24 support link
                </li>
              </ul>
              <span className='w-56 block bg-gray-100 h-1 rounded-lg my-2'></span>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>
                    All free dashboard
                    <a href='#' className='text-red-500 font-semibold'>
                      free plan
                    </a>
                  </div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Best ranking</div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Chocolate and meel</div>
                </li>
              </ul>
            </div>
          </div>
          <div className='card-2 transform my-4 lg:scale-105 hover:scale-110 transition duration-500 ease-out'>
            <div className='shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4'>
              <p className='text-primary-dark dark:text-white text-3xl font-bold'>
                Pro
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                For the basics tailwind
              </p>
              <p className='text-primary-dark dark:text-white  text-3xl font-bold'>
                $199
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                Per agent per month
              </p>
              <button
                type='button'
                className='w-56 m-auto px-3 py-3 text-sm shadow border border-primary-dark rounded-lg text-primary-dark bg-white hover:bg-primary-dark hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 transition duration-500 ease-in-out'
              >
                Request demo
              </button>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  All illimited components Tailwind
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  Own analitycs templates
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  24/24 support link
                </li>
              </ul>
              <span className='w-56 block bg-gray-100 h-1 rounded-lg my-2'></span>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>
                    All free dashboard
                    <a href='#' className='text-red-500 font-semibold'>
                      free plan
                    </a>
                  </div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Best ranking</div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Chocolate and meel</div>
                </li>
              </ul>
            </div>
          </div>
          <div className='card-3 transform my-4 hover:scale-110 transition duration-500 ease-out'>
            <div className='shadow-lg rounded-2xl w-64 bg-white dark:bg-gray-800 p-4'>
              <p className='text-primary-dark dark:text-white text-3xl font-bold'>
                Regular
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                For the basics tailwind
              </p>
              <p className='text-primary-dark dark:text-white  text-3xl font-bold'>
                $99
              </p>
              <p className='text-gray-500 dark:text-gray-300 text-sm mb-4'>
                Per agent per month
              </p>
              <button
                type='button'
                className='w-56 m-auto px-3 py-3 text-sm shadow border border-primary-dark rounded-lg text-primary-dark bg-white hover:bg-primary-dark hover:text-white dark:hover-text-gray-900 dark:hover:bg-gray-100 transition duration-500 ease-in-out '
              >
                Request demo
              </button>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  All illimited components Tailwind
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  Own analitycs templates
                </li>
                <li className='mb-3 flex items-center'>
                  <svg
                    className='mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'></path>
                  </svg>
                  24/24 support link
                </li>
              </ul>
              <span className='w-56 block bg-gray-100 h-1 rounded-lg my-2'></span>
              <ul className='text-sm text-primary-dark dark:text-white w-full mt-6 mb-6'>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>
                    All free dashboard
                    <a href='#' className='text-red-500 font-semibold'>
                      free plan
                    </a>
                  </div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Best ranking</div>
                </li>
                <li className='mb-3 flex items-center space-x-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#10b981'
                    viewBox='0 0 1792 1792'
                  >
                    <path d='M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z'></path>
                  </svg>
                  <div>Chocolate and meel</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
