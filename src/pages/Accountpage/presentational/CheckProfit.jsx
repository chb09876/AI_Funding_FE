import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HitMapChart from './HitMapChart';

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CheckProfit() {
  const [accountNumber, setAccountNumber] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [aiType, setAIType] = useState('');
  const [createAt, setCreateAt] = useState('');
  const [stockList, setStockList] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:8080/checkProfit', {
      customer_info_id: 1,
      login_type: '00',
      })
      .then((res) => {
        console.log(res.data);
        setAccounts(res.data.account);
        setAIType(res.data.account[accountNumber].aiType);
        setCreateAt(res.data.account[accountNumber].createAt);
        setStockList(res.data.account[accountNumber].stockList);
      })
      .catch((err) => {
        console.log('에러');
      });
  }, []);

  /*계좌 변화시*/
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setAIType(accounts[accountNumber].aiType);
      setCreateAt(accounts[accountNumber].createAt);
      setStockList(accounts[accountNumber].stockList);
    }
  }, [accountNumber]);

  let accountCount = 3; // 계좌 개수

  return (
    <StyledLogContainer>
      <StyledScrollArea>
        <StyledCheck>
          <StyledTop>
            <StyledSwiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              pagination={{
                clickable: true,
                type: 'bullets',
                watchOverflow: true, // 계좌 1개 일때 버튼 삭제
                bulletActiveClass: 'swiper-pagination-bullet-active',
                bulletClass: 'swiper-pagination-bullet-custom swiper-pagination-bullet',
              }}
              className="mySwiper"
              onSlideChange={(e) => {
                setAccountNumber(e.activeIndex);
              }}
            >
              <SwiperSlide>
                <div className="Account1">
                  <Account1 />
                </div>
              </SwiperSlide>

              {accountCount >= 2 ? (
                <SwiperSlide>
                  <div className="Account2">
                    <Account2 />
                  </div>
                </SwiperSlide>
              ) : (
                ''
              )}

              {accountCount >= 3 ? (
                <SwiperSlide>
                  <div className="Account3">
                    <Account3 />
                  </div>
                </SwiperSlide>
              ) : (
                ''
              )}
            </StyledSwiper>
          </StyledTop>

          <StyledBottom>
            <BottomTitle>
              <AIType>{aiType}</AIType>
              <BottomDate>
                <div>{getFormatDate(createAt)}</div>
                <div>{'+' + getStartDay(createAt)+ '일'}</div>
              </BottomDate>
            </BottomTitle>
            <HitMapChart stockList={stockList} aiType={aiType} />
          </StyledBottom>
        </StyledCheck>
      </StyledScrollArea>
    </StyledLogContainer>
  );
}

const getStartDay = (createAt) => {
  const todayDate = new Date();
  const createDate = new Date(createAt);
  const startDay = Math.ceil((todayDate.getTime() - createDate.getTime()) / (1000 * 60 * 60 * 24));
  return startDay;
};

const getFormatDate = (date) => {
  var createAt = new Date(date);
  var year = createAt.getFullYear() - 2000;
  var month = 1 + createAt.getMonth();
  month = month >= 10 ? month : '0' + month;
  var day = createAt.getDate();
  day = day >= 10 ? day : '0' + day;
  return year + '.' + month + '.' + day;
};

const StyledScrollArea = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 95%;
`;

const StyledLogContainer = styled.div`
  height: 90vh;
`;

const StyledTop = styled.div`
  flex-grow: 1;
  width: 95%;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  background-color: black;
  margin: 10px auto;
`;

const StyledSwiper = styled(Swiper)`
  padding-top: 10px;
  color: white;
  height: 100%;
`;

const StyledCheck = styled.div``;

const StyledBottom = styled.div`
  width: 95%;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  background-color: black;
  margin: 10px 10px 15px 10px;
  padding: 10px;
  color: white;
`;

const BottomTitle = styled.div`
  display: flex;
  fiex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomDate = styled.div`
  text-align: end;
  font-size: 20px;
`;

const AIType = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
