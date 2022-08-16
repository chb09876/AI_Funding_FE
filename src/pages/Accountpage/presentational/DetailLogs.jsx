import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function DetailLogs(props) {
  const [profitDetailMore, setProfitDetailMore] = useState([]);

  useEffect(() => {
    setProfitDetailMore(props.profitDetailMore);
  }, [props.profitDetailMore]);

  var detail = profitDetailMore.map((_, index) => (
    <DetailValue key={index}>
      <Date>{profitDetailMore[index].creatAt || 'default'}</Date>
      {props.setUnit === true ? (
        <Won>
          {profitDetailMore[index].creatAtProfitWon
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '000,000'}
          원
        </Won>
      ) : (
        <Percent>{profitDetailMore[index].creatAtProfitPersent || 'default'}%</Percent>
      )}
    </DetailValue>
  ));

  return (
    <StyledLogContainer>
      <StyledLog>{detail}</StyledLog>
    </StyledLogContainer>
  );
}

const DetailValue = styled.div``;

// 기록 날짜
const Date = styled.div`
  float: left;
  font-size: 1.2rem;
  padding-left: 20px;
  width: 50%;
  color: gray;
`;

// 기록 이익
const Won = styled.div`
  font-size: 1.2rem;
  padding-right: 20px;
  width: 50%;
  color: white;
  float: right;
  text-align: right;
`;

const Percent = styled.div`
  font-size: 1.2rem;
  padding-right: 20px;
  width: 50%;
  color: white;
  float: right;
  text-align: right;
`;

const StyledLog = styled.div`
  color: white;
  margin: auto;
  font-size: 16px;
`;

const StyledLogContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;
