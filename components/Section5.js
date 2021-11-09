import React, { useEffect } from 'react';
import RevenueSVG from '../assets/revenue.svg';
import Image from 'next/image';
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

export const Section5 = () => {
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
      className=' py-10 lg:py-20 flex flex-col justify-center items-center container mx-auto  '
    >
      {/* HORIZONTAL TAB */}
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='lg:flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='-mb-px mx-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3  block leading-normal ' +
                  (openTab === 1
                    ? 'text-primary-dark border-b-4 border-primary-dark'
                    : 'text-primary-dark ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                Global Reach
              </a>
            </li>
            <li className='-mb-px mx-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3  block leading-normal ' +
                  (openTab === 2
                    ? 'text-primary-dark border-b-4 border-primary-dark'
                    : 'text-primary-dark ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                Global Reach
              </a>
            </li>
            <li className='-mb-px mx-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3  block leading-normal ' +
                  (openTab === 3
                    ? 'text-primary-dark border-b-4 border-primary-dark'
                    : 'text-primary-dark ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Global Reach
              </a>
            </li>
            <li className='-mb-px mx-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3  block leading-normal ' +
                  (openTab === 4
                    ? 'text-primary-dark border-b-4 border-primary-dark'
                    : 'text-primary-dark ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                Global Reach
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 lg:shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                {openTab === 1 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={variants}
                    className='lg:flex justify-center items-center my-4'
                    id='link1'
                  >
                    <div className='mx-20 my-10 lg:my-0 lg:w-1/4 lg:h-1/4'>
                      <Image src={RevenueSVG} alt='' />
                    </div>

                    <div className='mx-10'>
                      <h1 className='text-lg lg:text-xl font-semibold mb-10'>
                        Global Reach
                      </h1>
                      <p className=' text-xs lg:text-sm  mb-5'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                      </p>
                      <a
                        className='mt-5  text-xs lg:text-sm  text-blue-500'
                        href=''
                      >
                        View our services brochure
                      </a>
                    </div>
                  </motion.div>
                )}
                {openTab === 2 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={variants}
                    className='lg:flex justify-center items-center my-4'
                    id='link2'
                  >
                    <div className='mx-20 my-10 lg:my-0 lg:w-1/4 lg:h-1/4'>
                      <Image src={RevenueSVG} alt='' />
                    </div>

                    <div className='mx-10'>
                      <h1 className='text-lg lg:text-xl font-semibold mb-10'>
                        Global Reach
                      </h1>
                      <p className='text-xs lg:text-sm  mb-5'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                      </p>
                      <a
                        className='mt-5  text-xs lg:text-sm  text-blue-500'
                        href=''
                      >
                        View our services brochure
                      </a>
                    </div>
                  </motion.div>
                )}
                {openTab === 3 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={variants}
                    className='lg:flex justify-center items-center my-4'
                    id='link3'
                  >
                    <div className='mx-20 my-10 lg:my-0 lg:w-1/4 lg:h-1/4'>
                      <Image src={RevenueSVG} alt='' />
                    </div>

                    <div className='mx-10'>
                      <h1 className='text-lg lg:text-xl font-semibold mb-10'>
                        Global Reach
                      </h1>
                      <p className='text-xs lg:text-sm  mb-5'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                      </p>
                      <a
                        className='mt-5  text-xs lg:text-sm  text-blue-500'
                        href=''
                      >
                        View our services brochure
                      </a>
                    </div>
                  </motion.div>
                )}
                {openTab === 4 && (
                  <motion.div
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    variants={variants}
                    className='lg:flex justify-center items-center my-4'
                    id='link4'
                  >
                    <div className='mx-20 my-10 lg:my-0 lg:w-1/4 lg:h-1/4'>
                      <Image src={RevenueSVG} alt='' />
                    </div>

                    <div className='mx-10'>
                      <h1 className='text-lg lg:text-xl font-semibold mb-10'>
                        Global Reach
                      </h1>
                      <p className='text-xs lg:text-sm  mb-5'>
                        In publishing and graphic design, Lorem ipsum is a
                        placeholder text commonly used to demonstrate the
                        visual. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod
                        tempor.
                      </p>
                      <a
                        className='mt-5  text-xs lg:text-sm  text-blue-500'
                        href=''
                      >
                        View our services brochure
                      </a>
                    </div>
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
