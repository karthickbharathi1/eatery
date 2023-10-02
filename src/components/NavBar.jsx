import React, { useState } from 'react';
import { BiLogoFacebook , BiLogoTwitter , BiLogoGmail, BiLogoInstagram} from 'react-icons/bi';
import { Link } from 'react-scroll';

import {
    FaBars,
    FaTimes,

  } from 'react-icons/fa';
function NavBar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    // <div className='bg-black text-white w-full flex justify-between items-center'>
    //     <div>
    //         <img src="https://freebw.com/templates/deli/images/icons/logo-mobile.png" alt="" />
    //     </div>
    //     <div>
    //         <ul className='flex justify-between items-center'>
    //             <li className='ml-4'><a href="">HOME</a></li>
    //             <li  className='ml-4'><a href="">MENUS</a></li>
    //             <li  className='ml-4'><a href="">RESERVATION</a></li>
    //             <li  className='ml-4'><a href="">ABOUT US</a></li>
    //             <li  className='ml-4'><a href="">FEATURES</a></li>
    //             <li  className='ml-4'><a href="">BLOG</a></li>
    //             <li  className='ml-4'><a href="">CONTACT</a></li>
    //         </ul>
    //     </div>
    //     <div className='flex'>
    //         <BiLogoFacebook  className='mx-2'/>
    //         <BiLogoTwitter  className='mx-2'/>
    //         <BiLogoGmail  className='mx-2'/>
    //         <BiLogoInstagram className='mx-2' />

    //     </div>
    // </div>
    <div className='absolute z-50 w-full h-[80px] flex justify-between items-center px-4 py-5 text-gray-300'>
    <div>
      {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
      {/* <img src="https://freebw.com/templates/deli/images/icons/logo-mobile.png" alt="" /> */}
      <img src="https://freebw.com/templates/deli/images/icons/logo.png" width={80} alt="" />
    </div>

    {/* menu */}
    <ul className='hidden lg:flex'>
      <li className='mx-2'>
        <Link to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='menus' smooth={true} duration={500}>
         MENUS
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='reservation' smooth={true} duration={500}>
        RESERVATION
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='about' smooth={true} duration={500}>
        ABOUT US
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='features' smooth={true} duration={500}>
        FEATURES
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='blog' smooth={true} duration={500}>
        BLOG
        </Link>
      </li>
      <li className='mx-2'>
        <Link to='contact' smooth={true} duration={500}>
        CONTACT
        </Link>
      </li>
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='lg:hidden z-10'>
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
    >
        <li className='py-6 text-4xl'>
        <Link to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='menus' smooth={true} duration={500}>
         Menus
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='reservation' smooth={true} duration={500}>
        Reservation
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='about' smooth={true} duration={500}>
        About Us
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='features' smooth={true} duration={500}>
       Features
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='blog' smooth={true} duration={500}>
        Blog
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        <Link to='contact' smooth={true} duration={500}>
        Contact
        </Link>
      </li>
      
    </ul>

    {/* Social icons */}
    <div className='hidden lg:flex '>
    <BiLogoFacebook  className='mx-2'/>
           <BiLogoTwitter  className='mx-2'/>
             <BiLogoGmail  className='mx-2'/>
         <BiLogoInstagram className='mx-2' />
      
    </div>
  </div>
  )
}

export default NavBar