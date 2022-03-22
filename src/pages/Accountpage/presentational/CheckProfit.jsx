import React from 'react';
import styled from 'styled-components';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Account1 from './Account1';
import Account2 from './Account2';
import Account3 from './Account3';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CustomBubbleChart from './BubbleChart';

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CheckProfit() {
	const [accountNumber, setAccountNumber] = useState(0);
	const [accounts, setAccounts] = useState([]);
  const [profitDetail, setProfitDetail] = useState([]);

	useEffect(() => {
    axios
      .post('http://localhost:8080/checkProfit')//, {
        // customer_info_id: 1,
        // login_type: '00',
      	//})
      .then((res) => {
				console.log(res.data);
        setAccounts(res.data.account);
        setProfitDetail(res.data.account[accountNumber].profitDetail);
      })
      .catch((err) => {
        console.log('에러');
      });
  }, []);

	/*계좌 변화시*/
	const mounted = useRef(false);
	useEffect(() => {
		if(!mounted.current){
			mounted.current = true;
		} else {
			setProfitDetail(accounts[accountNumber].profitDetail)
		}
	}, [accountNumber])

  return (
    <StyledLogContainer>
      <StyledScrollArea>
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
              onSlideChange={(e) => {
                setAccountNumber(e.activeIndex);
              }}
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
                  <Account3 />
                </div>
              </SwiperSlide>
            </StyledSwiper>
          </StyledTop>

          <StyledBottom>
            <CustomBubbleChart
              height={(window.innerHeight * 35) / 100}
              width={window.innerWidth - 20}
							accountNumber={accountNumber}
							account={accounts[accountNumber]}
							profitDetail={profitDetail}
            />
          </StyledBottom>
        </StyledCheck>
      </StyledScrollArea>
    </StyledLogContainer>
  );
}

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
`;
