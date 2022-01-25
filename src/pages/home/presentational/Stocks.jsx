import React from 'react';
import styled from "styled-components";
import Stock from './Stock';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay])

/*임시데이터*/
const stockData = [
  [
    {
      itemName: "포스코엠텍",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "포스코엠텍2",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "포스코엠텍3",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "포스코엠텍4",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
  ],
  [
    {
      itemName: "카카오",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "카카오2",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "카카오3",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "카카오4",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
  ],
	[
    {
      itemName: "네이버",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
    {
      itemName: "네이버2",
      percent: "25",
      price: "89000",
      profit: "12.1",
    },
  ],
];

export default function Stocks(props) {
	const stockSlide = stockData[props.account].map((list, index) => (
		<SwiperSlide>
			<Stock name={list.itemName} index={index+1} share={list.percent} rate={list.profit}></Stock>
		</SwiperSlide>
	));
	
  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true, type: "bullets", bulletClass: "swiper-pagination-bullet"}}
      autoplay={{ delay: 1000, disableOnInteraction: false}}
    >
			{stockSlide}
    </Swiper>
  );
}
