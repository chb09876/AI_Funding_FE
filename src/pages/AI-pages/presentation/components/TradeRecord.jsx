import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
const selectStockAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-5px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;
export default function TradeRecord({
  stockName,
  tradeDate,
  totalPrice,
  tradeType,
  tradeAmount,
  unitPrice,
  tradePrice,
  toggleOFF,
}) {
  useEffect(() => {
    setDetailToggle(0);
  }, [toggleOFF]);
  const [detailToggle, setDetailToggle] = useState(0);
  return (
    <StyledTradeRecord className="Records">
      <StyledDetails>
        <StyledSummary
          className={detailToggle === -1 ? 'active' : ''}
          onClick={() => {
            setDetailToggle(~detailToggle);
          }}
        >
          <StyledTopOfSummary className="top">
            <div className="leftside">{stockName}</div>
            <div className="rightside">
              {totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </StyledTopOfSummary>
          <StyledBottomofSummary className="bottom">
            <div className="leftside">{tradeDate}</div>
            <StyledType className={tradeType === '매수' ? 'Buy' : 'Sell'}>{tradeType}</StyledType>
          </StyledBottomofSummary>
        </StyledSummary>
        <StyledDetailsContainer className={detailToggle === -1 ? 'active detail' : ''}>
          <StyledDetailsContent className="detailInfo">
            거래종류 :{' '}
            <StyledType className={tradeType === '매수' ? 'Buy' : 'Sell'}>{tradeType}</StyledType>
            <br />
            거래수량 : {tradeAmount}주
            <br />
            단가 : {unitPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
            <br />
            매수가 : {tradePrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
          </StyledDetailsContent>
        </StyledDetailsContainer>
      </StyledDetails>
    </StyledTradeRecord>
  );
}

const StyledType = styled.strong`
  ${(props) => {
    return props.className === 'Buy' ? `color: rgb(239, 99, 99)` : `color: rgb(99, 201, 239)`;
  }};
`;

const StyledTradeRecord = styled.div`
  padding: 0 10px;
`;

const StyledDetails = styled.div`
  .active.detail {
    display: block;
  }
  animation: ${selectStockAnimation} 0.6s ease-in-out;
`;
const StyledSummary = styled.div`
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  ${(props) => {
    return props.className === 'active'
      ? `border-bottom: 2px dashed rgb(119, 119, 119);`
      : `border-bottom: 2px solid rgb(184, 168, 142);`;
  }};
`;
const StyledTopOfSummary = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
const StyledBottomofSummary = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  color: gray;
  display: flex;
  justify-content: space-between;
`;
const StyledDetailsContent = styled.div`
  color: white;
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
`;
const StyledDetailsContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgb(184, 168, 142);
  display: none;
  animation: ${selectStockAnimation} 0.5s ease-in-out;
`;
