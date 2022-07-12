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
    <StyledScrollArea>
      <StyledContainer className="Container">
        <StyledSwiperPagination>
          <div className="swiper-pagination-top"></div>
        </StyledSwiperPagination>
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
const StyledContainer = styled.div``;
const StyledSwiper = styled(Swiper)`
  color: white;
  height: 100%;
  margin: 10px;
`;
const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 85vh;
`;

const StyledSwiperContent = styled.div``;
const StyledSwiperPagination = styled.div`
  height: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
`;
