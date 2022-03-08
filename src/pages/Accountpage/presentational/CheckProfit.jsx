import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';
import { useState } from 'react';
import CustomBubbleChart from './BubbleChart';

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CheckProfit() {
  const [SelectUnit, SelectPercent] = useState(0);
	console.log(window.innerHeight, window.innerWidth);
  return (
    <StyledCheck>
      <StyledTop className="Top">
        <StyledSwiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet-custom swiper-pagination-bullet',
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="Account1">
              <Account1 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Account2">
              <Account2 />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Account3">
             <Account3/>
            </div>
      
  );

//const StyledPercentButton = styled.div``;
const StyledUnitButton = styled.div``;

const StyledLine = styled.div``;

          </SwiperSlide>
        </StyledSwiper>
      </StyledTop>

			<StyledBottom>
					<CustomBubbleChart height={window.innerHeight*35/100} width={window.innerWidth-20}/>
        </StyledBottom>

    </StyledCheck>
  );
};

const StyledTop = styled.div`
  height: 40vh;
  width: 95%;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  background-color: black;
  margin: 10px auto;
`;
const StyledSwiper = styled(Swiper)`
  color: white;
  height: 100%;
  margin: 10px;
`;
const StyledCheck = styled.div``;

const StyledBottom = styled.div`
height: 40vh;
width: 95%;
border: solid 1px #b8a88e;
border-radius: 10px;
background-color: black;
margin: 10px auto;
`;