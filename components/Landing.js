import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  initial: {
    opacity: 0,
    x: 0,
    y: 20,
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
    y: 0,
    transition: {},
  },
};

export const Landing = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('enter');
    } else if (!inView) {
      controls.start('exit');
    }
  }, [controls, inView]);
  return (
    <div className='min-h-screen bg-primary-dark flex flex-col justify-center items-center'>
      <motion.h1
        ref={ref}
        initial='initial'
        animate={controls}
        variants={variants}
        className='text-white font-extrabold text-3xl lg:text-6xl tracking-wide my-5'
      >
        The future of hiring
      </motion.h1>
      <motion.p
        ref={ref}
        initial='initial'
        animate={controls}
        variants={variants}
        className='my-2 text-secondary text-xs lg:text-sm'
      >
        SERVICES AND BENEFITS
      </motion.p>
      <motion.p
        ref={ref}
        initial='initial'
        animate={controls}
        variants={variants}
        className='my-4 text-white text-xs lg:text-sm text-center'
      >
        Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod
        tempor.
      </motion.p>
      <motion.button
        ref={ref}
        initial='initial'
        animate={controls}
        variants={variants}
        className='my-5 px-8 py-2 rounded-full border lg:border-2 border-white text-white text-sm lg:text-lg font-semibold hover:bg-white hover:text-primary-dark transition duration-700 ease-in-out'
      >
        Learn more
      </motion.button>
    </div>
  );
};
