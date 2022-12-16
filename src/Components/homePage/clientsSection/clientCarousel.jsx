import React from 'react'

import {Swiper , SwiperSlide} from "swiper/react"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './clientSection.css'


import C1 from '../homePageAssets/c1.png'
import C2 from '../homePageAssets/c2.png'
import C3 from '../homePageAssets/c3.png'


// import required modules
import { Pagination } from 'swiper'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <div className="py-5">
          <SwiperSlide> <div className=" client_logo my-5"> <img src={C1} className='w-100' alt="" /></div> </SwiperSlide>
          <SwiperSlide> <div className=" client_logo my-5"> <img src={C2} className='w-100' alt="" /></div></SwiperSlide>
          <SwiperSlide> <div className=" client_logo my-5"> <img src={C3} className='w-100' alt="" /></div> </SwiperSlide>

          <SwiperSlide> <div className=" client_logo my-5"> <img src={C1} className='w-100' alt="" /></div> </SwiperSlide>
          <SwiperSlide> <div className=" client_logo my-5"> <img src={C2} className='w-100' alt="" /></div></SwiperSlide>
          <SwiperSlide> <div className=" client_logo my-5"> <img src={C3} className='w-100' alt="" /></div> </SwiperSlide>
       </div>

      </Swiper>
    </>
  );
}
