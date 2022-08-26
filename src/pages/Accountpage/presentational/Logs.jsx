import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailLogs from './DetailLogs';

export default function Logs(props) {
  const [close, setOpen] = useState(0);
  const [profitDetail, setProfitDetail] = useState([]);

  useEffect(() => {
    setProfitDetail(props.profitDetail);
  }, [props.profitDetail]);

  var detail = profitDetail.map((_, index) => (
    <DetailValue key={index}>
      <Date>{profitDetail[index].creatAt || 'default'}</Date>
      {props.setUnit === true ? (
        <Won>
          {profitDetail[index].creatAtProfitWon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') ||
            '000,000'}
          원
        </Won>
      ) : (
        <Percent>{profitDetail[index].creatAtProfitPersent || 'default'}%</Percent>
      )}
    </DetailValue>
  ));

  return (
    <StyledLogContainer>
      <StyledLog>
        {detail}
        {close === true ? (
          <DetailLogs profitDetailMore={props.profitDetailMore} setUnit={props.setUnit} />
        ) : (
          ''
        )}
        <StyledMoreLog
          onClick={() => {
            setOpen(!close);
          }}
        >
          {close === true ? '닫기' : '더보기'}
        </StyledMoreLog>
      </StyledLog>
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

const StyledMoreLog = styled.div`
  text-align: center;
  color: gray;
`;
