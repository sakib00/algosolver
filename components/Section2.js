import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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

export const Section2 = () => {
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
      className='pt-20 pb-10 lg:pt-40 lg:pb-20  container mx-auto flex flex-col justify-center items-center'
    >
      {/* <div className='flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-5xl text-primary-dark my-10'>
          Lorem ipsum
        </h1>
        <p className='text-primary-dark text-sm my-5 mx-72 text-center'>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit,sed do eiusmod tempor.
        </p>
      </div> */}
      {/* VERTICAL TAB */}
      <div className='my-10 container mx-auto'>
        <div className='lg:flex justify-center items-center mx-20 lg:mx-40'>
          {/* left */}
          <div className='flex  w-full lg:w-1/3'>
            <ul
              className='flex mb-0 list-none  pt-3 pb-4 space-y-3 flex-col'
              role='tablist'
            >
              <li className='-mb-px mr-2 last:mr-0 flex-auto '>
                <a
                  className={
                    'text-base whitespace-nowrap lg:text-2xl font-bold uppercase  px-5  leading-normal ' +
                    (openTab === 1
                      ? 'text-primary-dark border-l-4 border-primary-dark'
                      : 'text-gray-300')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle='tab'
                  href='#link1'
                  role='tablist'
                >
                  Mind maps
                </a>
              </li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto '>
                <a
                  className={
                    'text-base whitespace-nowrap lg:text-2xl font-bold uppercase px-5   leading-normal ' +
                    (openTab === 2
                      ? 'text-primary-dark border-l-4 border-primary-dark'
                      : 'text-gray-300')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle='tab'
                  href='#link2'
                  role='tablist'
                >
                  Connect
                </a>
              </li>
              <li className='-mb-px mr-2 last:mr-0 flex-auto '>
                <a
                  className={
                    'text-base whitespace-nowrap lg:text-2xl font-bold uppercase px-5    leading-normal ' +
                    (openTab === 3
                      ? 'text-primary-dark border-l-4 border-primary-dark'
                      : 'text-gray-300')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle='tab'
                  href='#link3'
                  role='tablist'
                >
                  e-Governance
                </a>
              </li>
            </ul>
          </div>

          {/* right */}
          <div className='relative flex flex-col   bg-white  mb-6  w-full lg:w-2/3'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                {openTab == 1 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    variants={variants}
                    className={''}
                    id='link1'
                  >
                    <h1 className='text-primary-dark text-base lg:text-2xl font font-semibold my-2'>
                      Ideas to action every project.
                    </h1>
                    <p className='text-primary-dark text-xs lg:text-sm my-4'>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the
                      visual.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,sed do eiusmod tempor.
                    </p>
                  </motion.div>
                )}

                {openTab == 2 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    variants={variants}
                    className={''}
                    id='link2'
                  >
                    <h1 className='text-primary-dark text-base lg:text-2xl font font-semibold my-2'>
                      Connect.
                    </h1>
                    <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the
                      visual.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,sed do eiusmod tempor.
                    </p>
                  </motion.div>
                )}

                {openTab == 3 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    variants={variants}
                    className={''}
                    id='link3'
                  >
                    <h1 className='text-primary-dark text-base lg:text-2xl font font-semibold my-2'>
                      e-Governance
                    </h1>
                    <p className='text-primary-dark text-xs lg:text-sm  my-4'>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the
                      visual.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit,sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit,sed do eiusmod tempor.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
