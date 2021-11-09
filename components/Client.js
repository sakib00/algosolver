import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ClientIMG from '../assets/image2.JPG';
import Slider from 'react-slick';

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

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
};

export const Client = () => {
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
      className=' py-10 lg:py-20 container mx-auto'
    >
      <div className=' flex flex-col justify-center items-center   '>
        <h1 className='font-extrabold text-3xl lg:text-5xl text-primary-dark my-10'>
          Our Clients
        </h1>
        <p className='my-4 text-primary-dark text-xs lg:text-sm mx-20 lg:mx-72 text-center'>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit,sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit,sed do eiusmod tempor.
        </p>
      </div>
      <div className='container my-10 px-8 lg:mx-auto'>
        <Slider {...settings}>
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
          <Image src={ClientIMG} width={150} height={50} alt='' />
        </Slider>
      </div>
    </motion.div>
  );
};
