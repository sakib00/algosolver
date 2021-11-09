import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const leftnavigationLinks = [
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Resource',
    link: '/resource',
  },
  {
    name: 'Enterprise',
    link: '/enterprise',
  },
  {
    name: 'Pricing',
    link: '/pricing',
  },
];

const rightnavigationLinks = [
  {
    name: 'Company',
    link: '/company',
  },
  {
    name: 'Contact Sales',
    link: '/contact-sales',
  },
  {
    name: 'Login',
    link: '/login',
  },
];
const variants = {
  backToTop: {
    backgroundColor: ['transparent'],
    transition: {
      duration: 1,
      ease: 'easeIn',
    },
  },
  scrolled: {
    backgroundColor: ['#ff00aa', '#ffffff'],
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter;
  const [scrolled, setScrolled] = useState(false);
  const handleNavigation = useCallback((e) => {
    if (window.scrollY <= 100) {
      setScrolled(false);
    }
    if (window.scrollY > 100) {
      setScrolled(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  });
  return (
    <>
      <div
        className={`fixed z-20 py-5 flex justify-between items-center w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg px-12 lg:px-32 text-primary-dark'
            : 'px-20 text-white'
        }`}
      >
        <ul className='hidden lg:flex lg:items-center lg:w-auto lg:space-x-6'>
          {leftnavigationLinks.map((navLink, index) => (
            <li
              className={
                router.pathname === navLink.link
                  ? 'text-base font-medium tracking-wide text-primary-dark hover:text-white transition duration-300'
                  : `text-base font-medium tracking-wide ${
                      scrolled ? 'text-gray-500' : 'text-white'
                    } hover:text-black transition duration-300`
              }
              key={'nav-link-' + index}
            >
              <Link href={navLink.link}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <h1 className='font-bold text-2xl'>Logo</h1>
        </div>
        <div className='lg:hidden'>
          <button
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
            className='navbar-burger flex items-center text-secondary p-3'
          >
            <svg
              className='block h-4 w-4 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Mobile menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </button>
        </div>
        <ul className='hidden lg:flex lg:items-center lg:w-auto lg:space-x-10'>
          {rightnavigationLinks.map((navLink, index) => (
            <li
              className={
                router.pathname === navLink.link
                  ? 'text-base font-medium tracking-wide text-primary-dark hover:text-white transition duration-300'
                  : `text-base font-medium tracking-wide ${
                      scrolled ? 'text-gray-500' : 'text-white'
                    } hover:text-black transition duration-300`
              }
              key={'nav-link-' + index}
            >
              <Link href={navLink.link}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          toggleMenu
            ? 'navbar-menu relative z-50 '
            : 'navbar-menu relative z-50 hidden'
        }
      >
        <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'></div>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='font-bold text-2xl'>Logo</h1>
            </div>
            <button
              onClick={() => {
                setToggleMenu(false);
              }}
              className='navbar-close'
            >
              <svg
                className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {leftnavigationLinks.map((navLink, index) => (
                <li
                  className={
                    router.pathname === navLink.link
                      ? 'text-sm font-medium tracking-wide text-primary hover:text-primary transition duration-300'
                      : `text-sm font-medium tracking-wide text-gray-500 hover:text-primary transition duration-300`
                  }
                  key={'nav-link-' + index}
                >
                  <Link href={navLink.link}>{navLink.name}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {rightnavigationLinks.map((navLink, index) => (
                <li
                  className={
                    router.pathname === navLink.link
                      ? 'text-sm font-medium tracking-wide text-primary hover:text-primary transition duration-300'
                      : `text-sm font-medium tracking-wide text-gray-500 hover:text-primary transition duration-300`
                  }
                  key={'nav-link-' + index}
                >
                  <Link href={navLink.link}>{navLink.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto'>
            <p className='my-4 text-xs text-center text-gray-400'>
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};
