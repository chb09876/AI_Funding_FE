import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Intro1 from './AI-intros/intro1';
import Intro2 from './AI-intros/intro2';
import Intro3 from './AI-intros/intro3';

SwiperCore.use([EffectCoverflow, Pagination]);

const App = () => {
  return (
    <StyledScrollArea className="ScrollArea">
      <StyledContainer className="Container">
        <StyledSwiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          pagination={{
            el: '.swiper-pagination-top',
            clickable: true,
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet-custom swiper-pagination-bullet',
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>';
            },
          }}
          className="mySwiper"
        >
          <StyledSwiperPagination className="swiper-pagi">
            <div className="swiper-pagination-top"></div>
          </StyledSwiperPagination>
          <SwiperSlide>
            <StyledSwiperContent className="intro1">
              <Intro1 />
            </StyledSwiperContent>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperContent className="intro2">
              <Intro2 />
            </StyledSwiperContent>
          </SwiperSlide>
          <SwiperSlide>
            <StyledSwiperContent className="intro3">
              <Intro3 />
            </StyledSwiperContent>
          </SwiperSlide>
        </StyledSwiper>
      </StyledContainer>
    </StyledScrollArea>
  );
};

export default App;
const StyledSwiperSlide = styled(SwiperSlide)`
  flex: 1;
`;
const StyledContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;
const StyledSwiper = styled(Swiper)`
  color: white;
  flex-grow: 1;
  position: relative;
`;
const StyledScrollArea = styled.div`
  overflow: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const StyledSwiperContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow:scroll;
  display: flex;
  justify-content: center;
`;
const StyledSwiperPagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: 10px;
  height: 2px;
  z-index: 10;
`;
