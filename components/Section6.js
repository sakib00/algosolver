import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Circle from '../assets/circle.jpg';
import Image from 'next/image';

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

export const Section6 = () => {
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
      className=' pt-10 lg:pt-20 container mx-auto'
    >
      <div className=' flex flex-col justify-center items-center   '>
        <h1 className='font-extrabold text-3xl lg:text-5xl text-primary-dark my-10'>
          Our Approach
        </h1>
        <p className='my-4 text-primary-dark text-xs lg:text-sm mx-20 lg:mx-72 text-center'>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit,sed do eiusmod tempor.
        </p>
      </div>
      <div className='container mt-40 px-8 lg:mx-auto'>
        <div className='relative flex justify-center'>
          <h3 className='z-10 w-1/2 text-sm lg:text-2xl lg:font-medium text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Extraordinary work <br /> transformation,
            <br /> by design
          </h3>
          <div className='w-4/5 lg:w-full text-center animate-spin-slow'>
            <Image src={Circle} alt='' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
