import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants1 = {
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

const variants = {
  initial: {
    opacity: 0,
    x: 50,
    y: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
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

export const Section4 = () => {
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
      variants={variants1}
      className=' py-10 lg:py-20 container mx-auto'
    >
      <div className=' flex flex-col justify-center items-center   '>
        <h1 className='font-extrabold text-3xl lg:text-5xl text-primary-dark my-10'>
          How it works
        </h1>
        <p className='my-4 text-primary-dark text-xs lg:text-sm mx-20 lg:mx-72 text-center'>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit,sed do eiusmod tempor.
        </p>
      </div>

      {/* VERTICAL TAB */}
      <div className='my-10 container mx-auto '>
        <div className='flex flex-col lg:flex-row justify-center items-center w-full'>
          {/* left */}
          <div className=' px-5 lg:p-0 w-full lg:w-1/3'>
            <ul
              className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col'
              role='tablist'
            >
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 1
                      ? 'text-white bg-primary-dark'
                      : 'text-primary-dark bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Services
                </a>
              </li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 2
                      ? 'text-white bg-primary-dark'
                      : 'text-primary-dark bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  Benefits
                </a>
              </li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 3
                      ? 'text-white bg-primary-dark'
                      : 'text-primary-dark bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle='tab'
                  href='#link3'
                  role='tablist'
                >
                  Community
                </a>
              </li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
                <a
                  className={
                    'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                    (openTab === 4
                      ? 'text-white bg-primary-dark'
                      : 'text-primary-dark bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Grow
                </a>
              </li>
            </ul>
          </div>

          {/* right */}
          <div className='px-6 lg:p-0 '>
            <div className='bg-white  mb-6 shadow-lg rounded w-full '>
              <div className='px-4 py-5 '>
                <div className='tab-content tab-space'>
                  {openTab == 1 && (
                    <motion.div
                      initial='initial'
                      animate='enter'
                      exit='exit'
                      variants={variants}
                      className={''}
                      id='link1'
                    >
                      <h1 className='text-primary-dark text-lg lg:text-2xl font font-semibold my-2'>
                        Access unlisted work opportunities with top brands &
                        employers
                      </h1>
                      <p className='text-primary-dark text-xs lg:text-sm my-4'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet,
                      </p>
                      <p className='text-primary-dark text-xs lg:text-sm my-4'>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                      </p>
                    </motion.div>
                  )}

                  {openTab == 2 && (
                    <motion.div
                      initial='initial'
                      animate='enter'
                      exit='exit'
                      variants={variants}
                      className={''}
                      id='link2'
                    >
                      <h1 className='text-primary-dark text-lg lg:text-2xl font font-semibold my-2'>
                        Benefitss
                      </h1>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet,
                      </p>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                      </p>
                    </motion.div>
                  )}

                  {openTab == 3 && (
                    <motion.div
                      initial='initial'
                      animate='enter'
                      exit='exit'
                      variants={variants}
                      className={''}
                      id='link3'
                    >
                      <h1 className='text-primary-dark text-lg lg:text-2xl font font-semibold my-2'>
                        Community
                      </h1>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet,
                      </p>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                      </p>
                    </motion.div>
                  )}
                  {openTab == 4 && (
                    <motion.div
                      initial='initial'
                      animate='enter'
                      exit='exit'
                      variants={variants}
                      className={''}
                      id='link4'
                    >
                      <h1 className='text-primary-dark text-lg lg:text-2xl font font-semibold my-2'>
                        Grow
                      </h1>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet,
                      </p>
                      <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
