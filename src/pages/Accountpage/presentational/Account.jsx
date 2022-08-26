import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import refresh from '../../../image/btn_refresh.png';
import Logs from './Logs';

export default function Account(props) {
  const [setUnit, setWon] = useState(false);
  const [close, setOpen] = useState(0);
  const accountNumber = ['첫', '두', '세'];

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setOpen();
    }
  }, [props.realIndex]);

  return (
    <StyledCompareProfit>
      <StyledMoney>
        <div style={{ fontSize: '1rem', fontWeight: 500, color: 'white' }}>
          {accountNumber[props.accountNum]}번째 계좌
        </div>
        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white' }}>
          {props.todayTotalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'}원
        </div>
      </StyledMoney>
      <StyledTotalProfit>
        {/* 새로고침 버튼 */}
        <Styledbtn
          src={refresh}
          onClick={() => {
            setWon(!setUnit);
          }}
        ></Styledbtn>

        <StyledButton onClick={() => setOpen(!close)}>
          <StyledTotal>{setUnit === true ? '총 손익금 (원)' : '총 손익금 (퍼센트)'}</StyledTotal>
          <StyledUnit>
            {setUnit === true
              ? props.todayProfitWon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'
              : props.todayProfitPersent || 'default'}
            {setUnit === true ? '원' : '%'}
          </StyledUnit>
        </StyledButton>
        {close === true ? (
          <Logs
            profitDetail={props.profitDetail}
            profitDetailMore={props.profitDetailMore}
            setUnit={setUnit}
          />
        ) : (
          ''
        )}
      </StyledTotalProfit>

      <StyledDayProfit>
        <StyledDayWon>
          하루 손익금
          <br />
          {props.todayProfitWon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'}원
        </StyledDayWon>
        <StyledDayPer>
          하루 수익률
          <br />
          {props.todayProfitPersent || 'default'}%
        </StyledDayPer>
      </StyledDayProfit>
    </StyledCompareProfit>
  );
}

const StyledButton = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  display: block;
`;

//새로고침 버튼
const Styledbtn = styled.img`
  margin-top: 25px;
  margin-right: 10px;
  float: right;
  width: 40px;
  height: 40px;
`;

// 금액
const StyledUnit = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-left: 10px;
`;

// 총 손익금
const StyledTotal = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: gray;
  padding-left: 10px;
`;

const StyledCompareProfit = styled.div``;

const StyledMoney = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
`;

const StyledTotalProfit = styled.div`
  padding-right: 20px;
  padding-top: 10px;
`;

const StyledDayProfit = styled.div`
  border-top: 1px solid gray;
  text-align: center;
  height: 10vh;
`;

// 하루 손익금
const StyledDayWon = styled.div`
  float: left;
  font-size: 1.5rem;
  width: 50%;
  padding-top: 20px;
  padding-bottom: 5vh;
  border-right: 1px solid gray;
`;

// 하루 수익률
const StyledDayPer = styled.div`
  float: right;
  font-size: 1.5rem;
  width: 50%;
  padding-top: 20px;
  padding-bottom: 5px;
`;
