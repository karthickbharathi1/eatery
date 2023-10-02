
import NavBar from './NavBar'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

// Swiper CSS
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };


  return (
    <div className="h-screen w-full">
        
      
      
      {/* <div className="flex flex-col justify-center items-center">
        <FaArrowCircleLeft size={30} onClick={() => ref.current?.swiper.slidePrev()} className="fill-white/30 hover:fill-purple-400 hover:text-white cursor-pointer" />
      </div> */}
      <NavBar />
      <div className='h-full'>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    
    //     on={{
    // slideChange: (swiper) => handleSlideChange(swiper),
//   }}
  >
        <SwiperSlide> 

        {/* <video className="w-full" controls>
        <source src="./" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

        {/* <iframe 
        className='w-full h-full'
        src="https://www.youtube.com/embed/pMN5D5FWCxI"
         title="Simunovic`s Grill &amp; Garden Restaurant - Promo Video HD1080p"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            {/* <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/pMN5D5FWCxI?autoplay=1"
        title="YouTube Video Player"
        allow='autoplay'
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
      <img className='absolute top-0 left-0' src="https://freebw.com/templates/deli/images/slide-01.jpg" alt="" />
      <div className='absolute text-white z-50  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-7xl font-bold '>Seasonal Flavours</h1>
        <div>
        <button className='border-2 border-red-500 text-red-500 px-3 py-2  mx-2 md:mx-4 my-8'>VIEW MENU</button>
        <button className='border-2 text-white border-red-500 bg-red-500 px-3 py-2  mx-1  md:mx-4 my-8'>BOOK A TABLE</button>
        </div>
        
      </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='absolute top-0 left-0' src="https://freebw.com/templates/deli/images/slide-02.jpg" alt="" />
            <div className='absolute text-white z-50  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-6xl md:text-7xl font-bold'>Fresh Ingredients</h1>
                <p className=' my-4 text-2xl md:text-2xl'>FRESH.DELICIOUS.HEALTHY</p>
                <div>
                <button className='border-2 border-red-500 text-red-500 px-3 py-2 mx-2 md:mx-4 my-4'>VIEW MENU</button>
                <button className='border-2 text-white border-red-500 bg-red-500 px-3 mx-2 py-2 md:mx-4 my-4'>BOOK A TABLE</button>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className='absolute top-0 left-0' src="https://freebw.com/templates/deli/images/slide-03.jpg" alt="" />
           <div className={`absolute text-white z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${activeIndex === 2 ? 'animate-slide-up' : ''}`}>
                <h1 className='text-6xl md:text-7xl font-bold'> Deli Restaurant</h1>
                
                <div>
                <button className='border-2 border-red-500 text-red-500 px-3 py-2 mx-2 md:mx-4 my-8'>VIEW MENU</button>
                <button className='border-2 text-white border-red-500 bg-red-500 px-3 py-2 mx-2 md:mx-4 my-6'>BOOK A TABLE</button>
                </div>
                
            </div>
        </SwiperSlide>
        
      

      </Swiper>
      </div>

      

      {/* <div className="flex flex-col justify-center items-center">
        <FaArrowCircleRight size={30} onClick={() => ref.current?.swiper.slideNext()} className="fill-white/30 hover:fill-purple-400 hover:text-white cursor-pointer" />
      </div> */}

    </div>
  )
}

export default Hero


