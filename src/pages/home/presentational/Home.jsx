import React, {useState} from 'react';
import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';

import MyAccount from './MyAccount';
import Stock from './Stock';
import Stocks from './Stocks';

SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Home() {
	var [accountNumber, setAccount] = useState(0);
	
	return (
    <HomeStyle>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true, type: "bullets", bulletClass: "swiper-pagination-bullet swiper-pagination-bullet-custom" }}
				onSlideChange={(e) => setAccount(e.activeIndex)}
      >
        <SwiperSlide>
          <MyAccount></MyAccount>
        </SwiperSlide>
        <SwiperSlide>
          <MyAccount></MyAccount>
        </SwiperSlide>
        <SwiperSlide>
          <MyAccount></MyAccount>
        </SwiperSlide>
      </Swiper>
			
			<Stocks account={accountNumber}></Stocks>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
	flex-grow: 1;
	padding: 10px;
`;